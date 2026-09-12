import React, { useState, useEffect } from 'react';
import { GameplayMission, Avatar, StudentProfile, MissionOption } from '../types';
import { Shield, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Zap, Volume2, ArrowLeft, Type, ZoomIn, ZoomOut, Target } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';

interface Phase3GameplayProps {
  mission: GameplayMission;
  activeAvatar: Avatar;
  studentProfile: StudentProfile;
  rachaAciertos: number;
  missionIndex?: number;
  totalMissions?: number;
  onSolveAttempt: (isCorrect: boolean, pointsDelta: number, feedback: string) => void;
  onAdvanceToGameOver: (mission: GameplayMission) => void;
  onBackToModules: () => void;
}

export const Phase3Gameplay: React.FC<Phase3GameplayProps> = ({
  mission,
  activeAvatar,
  studentProfile,
  rachaAciertos,
  missionIndex,
  totalMissions = 15,
  onSolveAttempt,
  onAdvanceToGameOver,
  onBackToModules
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [activeFeedback, setActiveFeedback] = useState<string>('');
  const [failedOptionIds, setFailedOptionIds] = useState<number[]>([]);
  const [isTextZoomed, setIsTextZoomed] = useState<boolean>(false);

  // Reset when changing mission
  useEffect(() => {
    setSelectedOptionId(null);
    setHasAnswered(false);
    setIsAnswerCorrect(false);
    setActiveFeedback('');
    setFailedOptionIds([]);
  }, [mission.id]);

  const toggleTextZoom = () => {
    ttsAudio.playSound('switch');
    setIsTextZoomed(prev => {
      const next = !prev;
      ttsAudio.speakLatinSpanish(next ? 'Modo de lectura ampliada activado para facilitar la lectura del caso práctico.' : 'Lectura estándar restaurada.');
      return next;
    });
  };

  // Compute avatar bonus calculation
  const hasAvatarBonus = mission.bonus_avatar_id === activeAvatar.id;
  const avatarBonusPoints = hasAvatarBonus ? Math.round(100 * ((activeAvatar.multiplier || 1.15) - 1)) : 0;

  const currentNumber = missionIndex !== undefined ? missionIndex + 1 : (mission.level_number || 1);
  const totalCount = totalMissions || 10;

  const handleSelectOption = (option: MissionOption) => {
    if (hasAnswered && isAnswerCorrect) return; // already solved correctly
    if (failedOptionIds.includes(option.id)) return; // already marked wrong

    setSelectedOptionId(option.id);
    const isCorrect = option.id === mission.correct_option_id;

    if (isCorrect) {
      const finalPoints = option.points_delta + avatarBonusPoints;
      setIsAnswerCorrect(true);
      setHasAnswered(true);
      setActiveFeedback(option.feedback_immediate);

      ttsAudio.playSound('success');
      ttsAudio.speakLatinSpanish(
        `¡Excelente decisión! ${option.feedback_immediate} ${hasAvatarBonus ? `¡Bonificación de ${activeAvatar.name} activada!` : ''}`
      );

      onSolveAttempt(true, finalPoints, option.feedback_immediate);
    } else {
      // Penalty: -25 points
      // Add to failed list, do NOT reveal good answer, let student keep trying!
      setFailedOptionIds(prev => [...prev, option.id]);
      setActiveFeedback(option.feedback_immediate);
      setIsAnswerCorrect(false);

      ttsAudio.playSound('alert');
      ttsAudio.speakLatinSpanish(
        `Opción incorrecta: ${option.feedback_immediate}. Sigue intentándolo con las demás opciones hasta conseguir la acertada.`
      );

      onSolveAttempt(false, option.points_delta, option.feedback_immediate);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Top Breadcrumb & Return to Modules */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackToModules}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Selector de Módulos</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-cyan-400 font-bold">{mission.module_name}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300">{mission.level_title}</span>
        </div>

        <div className="flex items-center gap-2">
          {hasAvatarBonus && (
            <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[10px] font-bold flex items-center gap-1">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>+{avatarBonusPoints} Bonus {activeAvatar.name.split(' ')[0]}</span>
            </span>
          )}
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 text-[11px]">
            Racha: <strong className="text-amber-400">{rachaAciertos}</strong>
          </span>
        </div>
      </div>

      {/* 10 Desafíos Progress Tracker */}
      <div className="p-3.5 rounded-2xl bg-slate-950/85 border border-cyan-500/25 backdrop-blur-xl space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-lg bg-cyan-950 border border-cyan-400/40 text-cyan-300 font-bold flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-cyan-400" />
              <span>Desafío {currentNumber} de {totalCount}</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">• {mission.module_name}</span>
          </div>
          <div className="text-[11px] text-slate-400">
            {failedOptionIds.length > 0 ? (
              <span className="text-amber-400 font-mono font-medium">
                {failedOptionIds.length} {failedOptionIds.length === 1 ? 'intento errado' : 'intentos errados'} (¡Sigue intentando!)
              </span>
            ) : (
              <span className="text-slate-500 font-mono">Primer intento</span>
            )}
          </div>
        </div>

        {/* Step Dots for 15 challenges or submodule missions */}
        <div
          className="gap-1.5 pt-1"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${totalCount}, minmax(0, 1fr))`
          }}
        >
          {Array.from({ length: totalCount }).map((_, i) => {
            const stepNum = i + 1;
            const isCurrent = stepNum === currentNumber;
            const isDone = stepNum < currentNumber;
            return (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isCurrent
                    ? 'bg-cyan-400 shadow-[0_0_12px_rgba(0,243,255,0.9)] scale-y-125'
                    : isDone
                    ? 'bg-emerald-500'
                    : 'bg-slate-800'
                }`}
                title={`Desafío ${stepNum} de ${totalCount}`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Mission Card */}
      <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)] space-y-6">
        {/* Mission Title Bar */}
        <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono mb-2">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>CASO DE ESTUDIO TÁCTICO #{currentNumber}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {mission.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTextZoom}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                isTextZoomed
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                  : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
              }`}
              title={isTextZoomed ? 'Restablecer tamaño normal de lectura' : 'Ampliar texto del caso práctico para facilitar lectura'}
            >
              {isTextZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isTextZoomed ? 'Lectura Ampliada (Activa)' : 'Ampliar Texto'}</span>
            </button>

            <button
              type="button"
              onClick={() => ttsAudio.speakLatinSpanish(`Desafío: ${mission.title}. Caso de estudio: ${mission.source_text}. Pregunta: ${mission.question}`)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Escuchar locución del desafío"
            >
              <Volume2 className="w-4 h-4" />
              <span>Escuchar Enunciado</span>
            </button>
          </div>
        </div>

        {/* Source Text / Case Study Box with Text Magnification */}
        <div className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 ${
          isTextZoomed
            ? 'bg-slate-900/95 border-cyan-400/60 shadow-[0_0_30px_rgba(0,243,255,0.15)] ring-1 ring-cyan-400/30'
            : 'bg-slate-900/80 border-slate-800'
        } space-y-3`}>
          <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] sm:text-xs font-bold">
              <Shield className="w-4 h-4" />
              <span>DOCUMENTACIÓN Y CONTEXTO DEL CASO:</span>
            </div>
            <button
              type="button"
              onClick={toggleTextZoom}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{isTextZoomed ? 'Tamaño normal' : 'Zoom de lectura'}</span>
            </button>
          </div>

          <p className={`text-slate-200 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 leading-relaxed font-sans transition-all duration-200 ${
            isTextZoomed
              ? 'text-base sm:text-lg font-medium text-slate-100 tracking-wide'
              : 'text-xs sm:text-sm text-slate-300 italic'
          }`}>
            &ldquo;{mission.source_text}&rdquo;
          </p>
        </div>

        {/* Challenge Question */}
        <div className="space-y-1.5">
          <h3 className={`font-bold text-white flex items-start gap-2 transition-all ${
            isTextZoomed ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}>
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 mt-1.5 animate-ping" />
            <span>{mission.question}</span>
          </h3>
          <p className="text-slate-400 text-xs">
            Selecciona la decisión acertada. Si te equivocas, la respuesta correcta no se revelará y podrás seguir intentando con las opciones restantes.
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {mission.options.map((option, idx) => {
            const isFailed = failedOptionIds.includes(option.id);
            const isCorrectOption = option.id === mission.correct_option_id;

            let borderStyle = 'border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80';
            let bgStyle = 'bg-slate-900/50';

            // CRITICAL: The correct option is ONLY styled in green when isAnswerCorrect is true.
            // If the user picked a wrong option, isAnswerCorrect remains false, so the correct option is NEVER revealed!
            if (isAnswerCorrect && isCorrectOption) {
              borderStyle = 'border-emerald-500 bg-emerald-950/40 shadow-[0_0_25px_rgba(52,211,153,0.3)] ring-1 ring-emerald-400';
              bgStyle = 'bg-emerald-950/30';
            } else if (isFailed) {
              borderStyle = 'border-red-500/60 bg-red-950/30 opacity-75 cursor-not-allowed';
              bgStyle = 'bg-red-950/20';
            }

            return (
              <button
                key={option.id}
                type="button"
                id={`option-choice-${option.id}`}
                disabled={isFailed || (hasAnswered && isAnswerCorrect)}
                onClick={() => handleSelectOption(option)}
                className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 group cursor-pointer ${borderStyle} ${bgStyle}`}
              >
                <div className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                  isAnswerCorrect && isCorrectOption
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                    : isFailed
                    ? 'bg-red-500/30 text-red-300 border-red-500/60'
                    : 'bg-slate-800 text-slate-300 border-slate-700 group-hover:border-cyan-400 group-hover:text-cyan-300'
                }`}>
                  {isAnswerCorrect && isCorrectOption ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : isFailed ? (
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  ) : (
                    String.fromCharCode(65 + idx)
                  )}
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <p className={`text-slate-200 font-sans leading-relaxed group-hover:text-white transition-colors ${
                    isTextZoomed ? 'text-base sm:text-lg font-medium' : 'text-xs sm:text-sm'
                  }`}>
                    {option.text}
                  </p>

                  {/* NO points shown in advance. Only shown after interaction */}
                  {isFailed && (
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-red-400 font-semibold pt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span>-25 PTS (Intento Errado) — Prueba otra de las opciones</span>
                    </div>
                  )}
                  {isAnswerCorrect && isCorrectOption && (
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-300 font-bold pt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>+{option.points_delta + avatarBonusPoints} PTS — ¡Decisión Acertada!</span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Alert Banner */}
        {activeFeedback && (
          <div className={`p-4 rounded-2xl border backdrop-blur-xl flex items-start gap-3 leading-relaxed animate-in fade-in duration-300 ${
            isTextZoomed ? 'text-sm sm:text-base' : 'text-xs'
          } ${
            isAnswerCorrect
              ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-200 shadow-[0_0_25px_rgba(52,211,153,0.15)]'
              : 'bg-red-950/60 border-red-500/70 text-red-200 shadow-[0_0_25px_rgba(239,68,68,0.15)]'
          }`}>
            <div className="mt-0.5 shrink-0">
              {isAnswerCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-red-400" />
              )}
            </div>
            <div className="flex-1 space-y-1.5">
              <span className="font-mono font-bold uppercase tracking-wider text-[11px] block">
                {isAnswerCorrect ? '¡Acierto Confirmado! (+100 Puntos)' : '¡Intento Errado! (-25 Puntos)'}
              </span>
              <p>{activeFeedback}</p>
              {!isAnswerCorrect && (
                <p className="text-[11px] text-amber-300 font-mono pt-1">
                  💡 Sigue intentándolo: selecciona otra de las opciones disponibles hasta encontrar la respuesta acertada.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Footer Navigation when challenge completed */}
        {hasAnswered && isAnswerCorrect && (
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs font-mono text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Desafío {currentNumber} superado. Puntos acreditados en el HUD Derecho.</span>
            </div>

            <button
              type="button"
              onClick={() => onAdvanceToGameOver(mission)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold font-mono text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>{currentNumber >= totalCount ? 'Finalizar Misión de 10 Desafíos' : 'Continuar al Siguiente Desafío'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
