/**
 * CifraFlow - Servicio y Hook de Tasa Oficial del BCV (Banco Central de Venezuela)
 * Consulta en tiempo real la API oficial y mantiene actualizado el tipo de cambio
 * del día y de la hora con auto-refresco periódico.
 */

import { useState, useEffect, useCallback } from 'react';

export interface BcvRateData {
  rate: number;
  rateString: string;
  currency: string;
  officialDate: string;
  lastUpdatedHour: string;
  lastUpdatedFull: string;
  source: string;
  status: 'loading' | 'live' | 'fallback';
  error?: string;
}

const FALLBACK_BCV_RATE = 832.49;
const BCV_API_URL = 'https://ve.dolarapi.com/v1/dolares/oficial';

function formatHour(date: Date): string {
  return date.toLocaleTimeString('es-VE', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('es-VE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Estado singleton en memoria para sincronizar toda la app
let cachedState: BcvRateData = {
  rate: FALLBACK_BCV_RATE,
  rateString: `${FALLBACK_BCV_RATE.toFixed(2)} VES/USD`,
  currency: 'VES',
  officialDate: formatDate(new Date()),
  lastUpdatedHour: formatHour(new Date()),
  lastUpdatedFull: `${formatDate(new Date())} • ${formatHour(new Date())}`,
  source: 'Banco Central de Venezuela (BCV Oficial)',
  status: 'loading'
};

const listeners = new Set<(state: BcvRateData) => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener(cachedState));
}

export async function fetchLiveBcvRate(): Promise<BcvRateData> {
  const now = new Date();
  try {
    const res = await fetch(BCV_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    const rateVal = typeof data.promedio === 'number' && data.promedio > 0 ? data.promedio : FALLBACK_BCV_RATE;
    
    let officialDateStr = formatDate(now);
    if (data.fechaActualizacion) {
      try {
        const parsedDate = new Date(data.fechaActualizacion);
        if (!isNaN(parsedDate.getTime())) {
          officialDateStr = formatDate(parsedDate);
        }
      } catch {
        // fallback to now
      }
    }

    cachedState = {
      rate: Number(rateVal.toFixed(2)),
      rateString: `${rateVal.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} VES/USD`,
      currency: 'VES',
      officialDate: officialDateStr,
      lastUpdatedHour: formatHour(now),
      lastUpdatedFull: `${formatDate(now)} • ${formatHour(now)}`,
      source: 'Banco Central de Venezuela (BCV Oficial)',
      status: 'live'
    };
  } catch (err: any) {
    console.warn('No se pudo conectar a la API en vivo de BCV, utilizando tasa de contingencia:', err);
    cachedState = {
      ...cachedState,
      rate: FALLBACK_BCV_RATE,
      rateString: `${FALLBACK_BCV_RATE.toFixed(2)} VES/USD`,
      lastUpdatedHour: formatHour(now),
      lastUpdatedFull: `${formatDate(now)} • ${formatHour(now)}`,
      status: 'fallback',
      error: err?.message || 'Error de conexión'
    };
  }

  notifyListeners();
  return cachedState;
}

// Iniciar primera consulta inmediata
if (typeof window !== 'undefined') {
  fetchLiveBcvRate();
  // Auto-actualización periódica cada 3 minutos (180,000 ms)
  setInterval(() => {
    fetchLiveBcvRate();
  }, 180000);
}

/**
 * Hook React para consumir la tasa oficial del BCV en cualquier componente
 */
export function useBcvRate() {
  const [bcvState, setBcvState] = useState<BcvRateData>(cachedState);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const handleUpdate = (updated: BcvRateData) => {
      setBcvState(updated);
    };

    listeners.add(handleUpdate);
    // Ejecutar fetch inicial si aún estaba en loading
    if (cachedState.status === 'loading') {
      fetchLiveBcvRate();
    }

    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  const refresh = useCallback(async () => {
    setIsRefreshing(true);
    try {
      await fetchLiveBcvRate();
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  return {
    ...bcvState,
    isRefreshing,
    refresh
  };
}

export function getCurrentBcvRateString(): string {
  return cachedState.rateString;
}

export function getCurrentBcvRateValue(): number {
  return cachedState.rate;
}
