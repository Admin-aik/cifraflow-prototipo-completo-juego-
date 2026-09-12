import React from 'react';
import { LevelCompletionData, Avatar, StudentProfile } from '../types';
import { Award, ArrowRight, ShieldCheck, Flame, RotateCcw, AlertTriangle, Sparkles, CheckCircle2 } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';

interface Phase4GameOverLevelProps {
  levelData: LevelCompletionData;
  activeAvatar: Avatar;
  studentProfile: StudentProfile;
  onNextLevel: () => void;
  onBackToModules: () => void;
  onGoToFinalEvaluation?: () => void;
  isLastLevelOverall?: boolean;
}

export const Phase4GameOverLevel: React.FC<Phase4GameOverLevelProps> = ({
  levelData,
  activeAvatar,
  studentProfile,
  onNextLevel,
  onBackToModules,
  onGoToFinalEvaluation,
  isLastLevelOverall = false
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-in zoom-in-95 duration-300">
      {/* Cinematic Banner */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950/90 border-2 border-cyan-500/50 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,243,255,0.2)] overflow-hidden text-center space-y-4">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Phase Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>FASE 4: CIERRE DE NIVEL</span>
        </div>

        {/* Banner Title as requested by Master Prompt */}
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            {levelData.module_name}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-mono drop-shadow-[0_0_25px_rgba(0,243,255,0.4)]">
            {levelData.banner_title}
          </h1>
          <p className="text-xs sm:text-sm text-cyan-300 font-mono">
            Nivel {levelData.completed_level_number} Superado • Datos Sincronizados con el HUD Derecho
          </p>
        </div>

        {/* Avatar Recognition Card - Large Display */}
        <div
          className="inline-flex items-center gap-4 p-3.5 sm:px-6 sm:py-3.5 rounded-3xl bg-slate-900/95 border-2 text-left shadow-xl backdrop-blur-xl"
          style={{
            borderColor: `${activeAvatar.theme_color}60`,
            boxShadow: `0 0 25px ${activeAvatar.accent_glow}`
          }}
        >
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 shrink-0 bg-slate-950 shadow-md relative group"
            style={{ borderColor: activeAvatar.theme_color }}
          >
            {activeAvatar.image_url ? (
              <img
                src={activeAvatar.image_url}
                alt={activeAvatar.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            ) : null}
          </div>
          <div className="space-y-1 font-mono">
            <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold">
              Operador de Misión
            </div>
            <div className="text-base sm:text-lg font-black text-white">
              {activeAvatar.name}
            </div>
            <div className="text-xs text-slate-300">
              Estudiante: <strong className="text-cyan-300">{studentProfile.student_name}</strong>
            </div>
            <div className="text-[11px] text-slate-400">
              Perk activo: <span className="text-amber-300">{activeAvatar.perk}</span>
            </div>
          </div>
        </div>

        {/* Score Summary Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {/* Puntos Ganados */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-mono text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ganados en Nivel</span>
            </div>
            <div className={`text-2xl sm:text-3xl font-black font-mono ${
              levelData.score_summary.puntos_ganados_nivel < 0 ? 'text-red-400' : 'text-emerald-300'
            }`}>
              {levelData.score_summary.puntos_ganados_nivel > 0 ? `+${levelData.score_summary.puntos_ganados_nivel}` : levelData.score_summary.puntos_ganados_nivel}
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Acierto + Bonificación</p>
          </div>

          {/* Penalizaciones */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-red-500/30 text-center space-y-1">
            <div className="flex items-center justify-center gap-1 text-red-400 font-mono text-xs">
              <AlertTriangle className="w-4 h-4" />
              <span>Penalizaciones</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-red-300">
              {levelData.score_summary.penalizaciones_nivel}
            </div>
            <p className="text-[10px] text-slate-400 font-mono">-25 pts por fallo</p>
          </div>

          {/* Total Acumulado */}
          <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-1 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            <div className="flex items-center justify-center gap-1 text-cyan-400 font-mono text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Total Acumulado</span>
            </div>
            <div className={`text-2xl sm:text-3xl font-black font-mono ${
              levelData.score_summary.puntos_totales_acumulados < 0 ? 'text-red-400' : 'text-cyan-300'
            }`}>
              {levelData.score_summary.puntos_totales_acumulados}
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Puntuación Global HUD</p>
          </div>
        </div>

        {/* Next Level Unlocked Banner */}
        <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between text-left text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-400 text-[10px] uppercase tracking-wider">Desbloqueo de Nivel:</div>
              <div className="text-cyan-300 font-bold">{levelData.next_level_unlocked}</div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-amber-400 font-bold text-xs">
            <Flame className="w-4 h-4 fill-current" />
            <span>Racha Máxima: {levelData.score_summary.racha_maxima}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onBackToModules}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ver Otros Módulos</span>
          </button>

          {isLastLevelOverall && onGoToFinalEvaluation ? (
            <button
              type="button"
              onClick={onGoToFinalEvaluation}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-400 hover:from-amber-400 hover:to-emerald-300 text-slate-950 font-bold font-mono text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>Ver Evaluación Final (FIN DE LA MISIÓN)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onNextLevel}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold font-mono text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>{levelData.action_button}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
