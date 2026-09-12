import React, { useState, useEffect, useRef } from 'react';
import { Mission, MissionOption, Avatar } from '../types';
import { ShieldCheck, AlertTriangle, Terminal, CheckCircle2, XCircle, Sparkles, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MissionModalProps {
  mission: Mission;
  activeAvatar: Avatar;
  onSolve: (isCorrect: boolean, pointsAwarded: number, pilarId: string) => void;
  onNextMission?: () => void;
  isPilarUnlocked: boolean;
  totalMissions: number;
}

export const MissionModal: React.FC<MissionModalProps> = ({
  mission,
  activeAvatar,
  onSolve,
  onNextMission,
  isPilarUnlocked,
  totalMissions
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [failedOptionIds, setFailedOptionIds] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string; points: number } | null>(null);
  const [autoAdvanceCountdown, setAutoAdvanceCountdown] = useState<number | null>(null);
  const [retryCountdown, setRetryCountdown] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const retryTimerRef = useRef<NodeJS.Timeout | null>(null);
  const retryIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clear all timers and reset response state cleanly whenever mission changes
  useEffect(() => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
    setFailedOptionIds([]);
    setFeedback(null);
    setAutoAdvanceCountdown(null);
    setRetryCountdown(null);

    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
    if (retryIntervalRef.current) clearInterval(retryIntervalRef.current);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
      if (retryIntervalRef.current) clearInterval(retryIntervalRef.current);
    };
  }, [mission.id]);

  // Check if active avatar receives an affinity bonus for this mission
  const hasAvatarBonus = mission.bonus_eligible_avatar_id === activeAvatar.id;

  const handleResetForRetry = () => {
    if (retryTimerRef.current) clearTimeout(retryTimerRef.current);
    if (retryIntervalRef.current) clearInterval(retryIntervalRef.current);
    setRetryCountdown(null);
    setHasSubmitted(false);
    setSelectedOptionId(null);
    setFeedback(null);
  };

  const handleSelectOption = (option: MissionOption) => {
    if (hasSubmitted) return;
    if (failedOptionIds.includes(option.id)) return;

    setSelectedOptionId(option.id);
    setHasSubmitted(true);

    const isCorrect = option.id === mission.correct_option_id;

    if (isCorrect) {
      // PREMIO A LA RESPUESTA AFIRMATIVA
      let finalPoints = option.reward.puntos || 100;
      if (hasAvatarBonus && mission.bonus_points) {
        finalPoints += mission.bonus_points;
      }

      setFeedback({
        isCorrect: true,
        text: option.feedback_immediate,
        points: finalPoints
      });

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f3ff', '#ff007f', '#fbbf24', '#34d399']
        });
      } catch {
        // Fallback
      }

      // Update parent game state: awarded points + affirmative count
      onSolve(true, finalPoints, mission.pilar_id);

      // Automatically transition to next mission
      if (onNextMission) {
        setAutoAdvanceCountdown(3);

        intervalRef.current = setInterval(() => {
          setAutoAdvanceCountdown((prev) => {
            if (prev !== null && prev > 1) return prev - 1;
            return null;
          });
        }, 1000);

        timerRef.current = setTimeout(() => {
          onNextMission();
        }, 3200);
      }
    } else {
      // RESPUESTA ERRADA: Resta puntos, NO muestra la solución correcta y reinicia la misión
      const penaltyPoints = -40;
      setFailedOptionIds(prev => [...prev, option.id]);

      setFeedback({
        isCorrect: false,
        text: `Ojo ahí... Se ha detectado una brecha en la defensa (${penaltyPoints} PTS restados). La solución correcta NO se revela para obligar al análisis real. Tómate un respiro y analicemos el vector paso a paso...`,
        points: penaltyPoints
      });

      // Subtrae puntos y computa respuesta negativa
      onSolve(false, penaltyPoints, mission.pilar_id);

      // Programar reinicio automático en 2 segundos
      setRetryCountdown(2);
      retryIntervalRef.current = setInterval(() => {
        setRetryCountdown((prev) => {
          if (prev !== null && prev > 1) return prev - 1;
          return null;
        });
      }, 1000);

      retryTimerRef.current = setTimeout(() => {
        setHasSubmitted(false);
        setSelectedOptionId(null);
        setFeedback(null);
        setRetryCountdown(null);
      }, 2400);
    }
  };

  const handleImmediateNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (onNextMission) {
      onNextMission();
    }
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-xl p-4 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
      {/* Top Mission Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
            Capítulo {mission.id} de {totalMissions}
          </span>
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium font-['Chakra_Petch'] bg-slate-900 text-slate-300 border border-slate-800">
            {mission.challenge_type}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isPilarUnlocked && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold font-mono flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pilar Desbloqueado
            </span>
          )}
        </div>
      </div>

      {/* Main Title & Layer Target */}
      <div className="mt-4">
        <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
          {mission.security_layer}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-['Chakra_Petch'] text-white">
          {mission.title}
        </h2>
      </div>

      {/* Pedagogic Core: Creencia Popular vs Ciberseguridad Real */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Myth */}
        <div className="p-3.5 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
          <div className="flex items-center gap-1.5 text-red-400 font-bold mb-1.5 uppercase font-mono text-[11px]">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            La Creencia Básica (Mito Común)
          </div>
          <p className="text-slate-300 leading-relaxed">
            {mission.myth_vs_reality.creencia_popular}
          </p>
        </div>

        {/* Reality */}
        <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold mb-1.5 uppercase font-mono text-[11px]">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            La Ciberseguridad Real (Arquitectura Moderna)
          </div>
          <p className="text-slate-300 leading-relaxed">
            {mission.myth_vs_reality.realidad_avanzada}
          </p>
        </div>
      </div>

      {/* Narrative Context / Source Text */}
      <div className="mt-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
        {mission.source_text}
      </div>

      {/* Incident Telemetry Snippet / Terminal Logs */}
      {mission.telemetry_snippet && (
        <div className="mt-3 rounded-xl bg-slate-950 border border-cyan-500/20 overflow-hidden text-[11px] font-mono">
          <div className="bg-slate-900/90 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-slate-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>TELEMETRÍA & REGISTROS DE INCIDENTE</span>
            </div>
            <span className="text-[10px] text-cyan-500/80">SENSOR_ACTIVE</span>
          </div>
          <pre className="p-3 text-cyan-300/90 overflow-x-auto whitespace-pre-wrap leading-tight selection:bg-cyan-900">
            {mission.telemetry_snippet}
          </pre>
        </div>
      )}

      {/* Operator Affinity Perk Banner */}
      {hasAvatarBonus && (
        <div
          className="mt-3 px-3 py-2 rounded-xl border flex items-center justify-between gap-2 text-xs"
          style={{
            backgroundColor: `${activeAvatar.theme_color}15`,
            borderColor: `${activeAvatar.theme_color}44`
          }}
        >
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-4 h-4" style={{ color: activeAvatar.theme_color }} />
            <span>{mission.bonus_description}</span>
          </div>
          <span
            className="font-mono font-bold text-[11px] px-2 py-0.5 rounded"
            style={{ backgroundColor: activeAvatar.theme_color, color: '#050711' }}
          >
            +{mission.bonus_points} PTS
          </span>
        </div>
      )}

      {/* Interactive Challenge Question */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <h3 className="font-bold text-sm sm:text-base text-white">
            {mission.question}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {mission.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrectOption = option.id === mission.correct_option_id;
            const hasFailedBefore = failedOptionIds.includes(option.id);

            let cardStyle = 'bg-slate-900/70 hover:bg-slate-800/80 border-slate-800 text-slate-200 cursor-pointer';
            let badge = null;

            if (hasSubmitted) {
              if (feedback?.isCorrect) {
                // PREMIO RESPUESTA AFIRMATIVA
                if (isCorrectOption) {
                  cardStyle = 'bg-emerald-950/70 border-emerald-400 text-emerald-100 ring-2 ring-emerald-400/80 shadow-[0_0_25px_rgba(52,211,153,0.35)]';
                  badge = (
                    <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500 text-slate-950 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> AFIRMATIVA (+{feedback.points} PTS)
                    </span>
                  );
                } else {
                  cardStyle = 'bg-slate-950/40 border-slate-800/40 text-slate-500 opacity-40';
                }
              } else {
                // "no coloques la respuesta si esta errada"
                // NUNCA revelar isCorrectOption aquí
                if (isSelected) {
                  cardStyle = 'bg-red-950/80 border-red-500 text-red-200 ring-2 ring-red-500/80 shadow-[0_0_20px_rgba(239,68,68,0.35)]';
                  badge = (
                    <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-600 text-white flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> ERRADA (-40 PTS)
                    </span>
                  );
                } else if (hasFailedBefore) {
                  cardStyle = 'bg-red-950/30 border-red-900/40 text-red-400/60 opacity-50';
                  badge = (
                    <span className="shrink-0 px-1.5 py-0.5 rounded text-[9px] font-mono bg-red-950 text-red-400 border border-red-900/50">
                      Descartada
                    </span>
                  );
                } else {
                  cardStyle = 'bg-slate-900/60 border-slate-800 text-slate-300';
                }
              }
            } else if (hasFailedBefore) {
              // Misión reiniciada: las opciones que ya fallaron se muestran descartadas
              cardStyle = 'bg-red-950/20 border-red-900/40 text-slate-400 cursor-not-allowed opacity-60';
              badge = (
                <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-red-950 text-red-400 border border-red-800/50 flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-red-400" /> Brecha (-40 PTS)
                </span>
              );
            }

            return (
              <button
                key={option.id}
                type="button"
                disabled={hasSubmitted || hasFailedBefore}
                onClick={() => handleSelectOption(option)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start justify-between gap-3 ${cardStyle}`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-0.5 shrink-0">
                    {hasSubmitted && feedback?.isCorrect && isCorrectOption ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (hasSubmitted && isSelected && !feedback?.isCorrect) || hasFailedBefore ? (
                      <XCircle className="w-4 h-4 text-red-400" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center text-[10px] font-mono">
                        {option.id}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 leading-relaxed">
                    {option.text}
                  </div>
                </div>
                {badge}
              </button>
            );
          })}
        </div>
      </div>

      {/* Immediate Result / Technical Feedback Box */}
      {feedback && (
        <div
          className={`mt-4 p-4 rounded-xl border ${
            feedback.isCorrect
              ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
              : 'bg-red-950/70 border-red-500/60 text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-['Chakra_Petch'] font-bold text-sm flex items-center gap-1.5">
              {feedback.isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">¡PREMIO A LA RESPUESTA AFIRMATIVA! (+{feedback.points} PTS)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-300">RESPUESTA ERRADA: BRECHA DETECTADA ({feedback.points} PTS)</span>
                </>
              )}
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed opacity-95">
            {feedback.text}
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10">
            {feedback.isCorrect ? (
              <>
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>
                    {mission.id < totalMissions
                      ? `Siguiente misión automática en ${autoAdvanceCountdown ?? 3}s...`
                      : 'Completando todas las 10 misiones...'}
                  </span>
                </div>
                {onNextMission && (
                  <button
                    type="button"
                    onClick={handleImmediateNext}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 text-xs font-bold font-['Chakra_Petch'] tracking-wide flex items-center gap-1.5 shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all"
                  >
                    {mission.id < totalMissions ? 'Siguiente Misión' : 'Ver Evaluación Final'} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>
                    No se revela la respuesta. Reiniciando misión en {retryCountdown ?? 2}s...
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleResetForRetry}
                  className="px-3.5 py-1.5 rounded-lg bg-red-900/80 hover:bg-red-800 border border-red-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reintentar Ahora (-40 PTS ya restados)
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
