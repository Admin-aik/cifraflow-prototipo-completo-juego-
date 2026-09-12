import React, { useState } from 'react';
import { useBcvRate } from '../services/bcvService';
import { RefreshCw, TrendingUp, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';

interface BcvRateBadgeProps {
  compact?: boolean;
  showTime?: boolean;
}

export const BcvRateBadge: React.FC<BcvRateBadgeProps> = ({ compact = false, showTime = true }) => {
  const { rate, rateString, officialDate, lastUpdatedHour, isRefreshing, status, refresh } = useBcvRate();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleManualRefresh = (e: React.MouseEvent) => {
    e.stopPropagation();
    ttsAudio.playSound('switch');
    refresh();
  };

  const handleSpeakRate = () => {
    ttsAudio.speakLatinSpanish(`Tasa oficial del Banco Central de Venezuela: ${rate} bolívares por dólar estadounidense. Fecha de referencia: ${officialDate}, actualizada a las ${lastUpdatedHour}.`);
  };

  if (compact) {
    return (
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
        onClick={handleSpeakRate}
        title="Clic para escuchar cotización oficial BCV"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold">BCV: {rateString}</span>
        {showTime && (
          <span className="text-emerald-400/80 text-[10px] hidden sm:inline">
            ({lastUpdatedHour})
          </span>
        )}
        <button
          type="button"
          onClick={handleManualRefresh}
          className="ml-1 p-0.5 rounded hover:bg-emerald-800 text-emerald-300 hover:text-white transition-colors"
          title="Actualizar tasa del BCV en vivo"
        >
          <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin text-cyan-300' : ''}`} />
        </button>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-emerald-950/90 via-slate-950 to-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-400 transition-all cursor-pointer group"
        title="Tasa oficial en tiempo real del Banco Central de Venezuela"
      >
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-400 hidden sm:inline">Tasa Oficial BCV:</span>
          <span className="font-black text-emerald-300 tracking-wide text-xs sm:text-sm">{rateString}</span>
        </div>

        {showTime && (
          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-emerald-800/60 text-[11px] text-emerald-400/90">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {officialDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {lastUpdatedHour}
            </span>
          </div>
        )}

        <button
          type="button"
          onClick={handleManualRefresh}
          className="p-1 rounded-lg bg-emerald-900/50 hover:bg-emerald-800 text-emerald-200 hover:text-white transition-all cursor-pointer"
          title="Actualizar tasa del BCV ahora"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-cyan-300' : ''}`} />
        </button>
      </div>

      {showDetails && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl p-4 bg-slate-950/95 border border-emerald-500/50 shadow-2xl backdrop-blur-xl z-50 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-emerald-300 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Banco Central de Venezuela
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              {status === 'live' ? 'En Vivo' : 'Referencia'}
            </span>
          </div>

          <div className="space-y-1.5 text-slate-300 font-mono text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">1 Dólar (USD):</span>
              <span className="text-emerald-300 font-bold">{rateString}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Fecha Valor:</span>
              <span className="text-white">{officialDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Hora de Consulta:</span>
              <span className="text-white">{lastUpdatedHour}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={handleSpeakRate}
              className="flex-1 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 text-[11px] font-mono transition-colors"
            >
              Escuchar Audio
            </button>
            <button
              type="button"
              onClick={handleManualRefresh}
              className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-[11px] font-mono transition-colors flex items-center justify-center gap-1"
            >
              <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
