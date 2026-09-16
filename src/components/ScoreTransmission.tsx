import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertTriangle, LogIn, ShieldQuestion } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';
import {
  authenticateContent,
  transmitirPuntos,
  getPlayerScoreProfile,
  isDuplicateTransmission,
  ApiError,
} from '../services/api';

interface ScoreTransmissionProps {
  /** Total points earned by the player in this run (to transmit). */
  gamePoints: number;
  /** Whether there is an authenticated session. */
  hasSession: boolean;
  /** Content id for the transmission (gaming-core). */
  contentId: string;
  gameVersion: string;
  /** User email used as a stable transmissionId seed per run. */
  userEmail?: string;
}

type TxStatus =
  | 'idle'
  | 'transmitting'
  | 'done'
  | 'duplicate'
  | 'error';

function makeUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxx-xxxx-xxxx'.replace(/x/g, () =>
    Math.floor(Math.random() * 16).toString(16),
  );
}

export const ScoreTransmission: React.FC<ScoreTransmissionProps> = ({
  gamePoints,
  hasSession,
  contentId,
  gameVersion,
}) => {
  const [status, setStatus] = useState<TxStatus>('idle');
  const [message, setMessage] = useState('');
  const [pointsAdded, setPointsAdded] = useState<number | null>(null);
  const [totalAccumulated, setTotalAccumulated] = useState<number | null>(null);
  const [aikTokens, setAikTokens] = useState<number | null>(null);

  // ONE transmissionId per run → re-sending it is a no-value (idempotent) op.
  const [transmissionId] = useState<string>(() => makeUuid());

  const canTransmit = hasSession && gamePoints > 0 && !!contentId && status === 'idle';

  const handleTransmit = async () => {
    if (!canTransmit) return;
    ttsAudio.playSound('click');
    setStatus('transmitting');
    setMessage('Transmitiendo puntuación…');
    setPointsAdded(null);
    setTotalAccumulated(null);
    setAikTokens(null);

    const end = new Date();
    const start = new Date(end.getTime() - 1 * 60 * 1000); // sesión de la run

    try {
      // 1. Identity token for this content (player + content binding)
      const { token } = await authenticateContent(contentId);

      // 2. Explicit idempotent transmission
      const res = await transmitirPuntos(contentId, {
        tokenIdentidad: token,
        transmissionId,
        startDateTime: start.toISOString(),
        endDateTime: end.toISOString(),
        durationSeconds: Math.max(5, Math.round(gamePoints)), // sesión mínima
        gamePoints,
        versionContent: gameVersion,
      });
      setAikTokens(res.aikTokens);
      setPointsAdded(gamePoints);

      // 3. Total accumulated (player profile)
      const profile = await getPlayerScoreProfile();
      setTotalAccumulated(profile.saldoGeneral);

      setStatus('done');
      setMessage(
        `Puntuación transmitida: +${gamePoints} pts → ${res.aikTokens} AIK. ` +
          `Puntuación total acumulada: ${profile.saldoGeneral} AIK.`,
      );
      ttsAudio.playSound('success');
    } catch (err) {
      if (isDuplicateTransmission(err)) {
        // Already processed: no-value operation, report it clearly.
        setStatus('duplicate');
        setMessage(
          'Esta puntuación ya fue transmitida — operación sin valor. ' +
            'No se agregaron puntos adicionales.',
        );
        ttsAudio.playSound('alert');
      } else {
        const msg = err instanceof ApiError ? err.message : 'Error al transmitir la puntuación.';
        setStatus('error');
        setMessage(msg);
        ttsAudio.playSound('alert');
      }
    }
  };

  const statusStyles: Record<TxStatus, string> = {
    idle: 'border-slate-700 bg-slate-900/60 text-slate-300',
    transmitting: 'border-cyan-400/50 bg-cyan-950/40 text-cyan-200',
    done: 'border-emerald-500/70 bg-emerald-950/50 text-emerald-200',
    duplicate: 'border-amber-500/70 bg-amber-950/50 text-amber-200',
    error: 'border-red-500/70 bg-red-950/50 text-red-200',
  };

  return (
    <div
      className={`mt-4 p-5 sm:p-6 rounded-2xl border backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)] transition-colors ${statusStyles[status]}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1 min-w-0 space-y-1.5">
          <h3 className="text-base sm:text-lg font-extrabold text-white font-mono flex items-center gap-2">
            <Send className="w-5 h-5 text-cyan-400" />
            Transmisión de Puntuación
          </h3>
          <p className="text-xs text-slate-300">
            Acción explícita e idempotente: este desafío se contabiliza una sola vez.
          </p>

          {!hasSession && (
            <p className="text-[11px] font-mono text-amber-300 inline-flex items-center gap-1.5 pt-1">
              <LogIn className="w-3.5 h-3.5" /> Requiere iniciar sesión para transmitir.
            </p>
          )}
          {gamePoints <= 0 && (
            <p className="text-[11px] font-mono text-slate-400 pt-1 inline-flex items-center gap-1.5">
              <ShieldQuestion className="w-3.5 h-3.5" /> No hay puntos acumulados para transmitir.
            </p>
          )}
          {hasSession && gamePoints > 0 && !contentId && (
            <p className="text-[11px] font-mono text-amber-300 pt-1">
              Configura VITE_CONTENT_ID (o VITE_GAME_ID) para habilitar la transmisión.
            </p>
          )}
        </div>

        <div className="flex flex-col items-stretch sm:items-end gap-2 shrink-0 text-right">
          <div className="text-xs font-mono text-slate-400">
            A transmitir:{' '}
            <span className="text-white font-bold text-sm">{gamePoints}</span>{' '}
            pts
          </div>
          <button
            type="button"
            onClick={() => void handleTransmit()}
            disabled={!canTransmit}
            className={`px-5 py-2.5 rounded-xl font-bold font-mono text-xs tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
              status === 'idle'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-[1.02]'
                : 'bg-slate-900 border border-slate-700 text-slate-400'
            }`}
          >
            {status === 'transmitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Transmitiendo…
              </>
            ) : status === 'done' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Puntuación transmitida
              </>
            ) : status === 'duplicate' ? (
              <>
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Ya transmitida
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Transmitir puntuación
              </>
            )}
          </button>
        </div>
      </div>

      {(status === 'done' || status === 'duplicate') && (
        <div
          className={`mt-4 pt-4 border-t flex items-start gap-2.5 text-xs sm:text-sm ${
            status === 'done' ? 'border-emerald-500/40' : 'border-amber-500/40'
          }`}
        >
          {status === 'done' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-0.5">
            <p className="font-mono text-[12px] sm:text-sm">{message}</p>
            {status === 'done' && pointsAdded !== null && totalAccumulated !== null && (
              <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-[11px] sm:text-xs">
                <div className="px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block">Puntos agregados</span>
                  <span className="text-emerald-300 font-bold text-sm">
                    +{pointsAdded} pts ({aikTokens ?? 0} AIK)
                  </span>
                </div>
                <div className="px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-400 block">Total acumulado</span>
                  <span className="text-cyan-300 font-bold text-sm">
                    {totalAccumulated} AIK
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-4 pt-4 border-t border-red-500/40 text-xs font-mono text-red-200 flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span className="break-words">{message}</span>
        </div>
      )}
    </div>
  );
};