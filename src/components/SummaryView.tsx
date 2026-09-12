import React from 'react';
import { Avatar } from '../types';
import { PILLARS_LIST } from '../data/pillars';
import { ShieldCheck, Award, Sparkles, Flame, CheckCircle2, XCircle, RotateCcw, ArrowLeft, Share2, Target, BarChart2 } from 'lucide-react';

interface SummaryViewProps {
  activeAvatar: Avatar;
  playerAlias: string;
  puntosDefensa: number;
  rachaAciertos: number;
  respuestasAfirmativas?: number;
  respuestasNegativas?: number;
  unlockedPillars: string[];
  threatLevel: "Bajo" | "Moderado" | "Crítico";
  onRestart: () => void;
  onReturnToMissions: () => void;
}

export const SummaryView: React.FC<SummaryViewProps> = ({
  activeAvatar,
  playerAlias,
  puntosDefensa,
  rachaAciertos,
  respuestasAfirmativas = 0,
  respuestasNegativas = 0,
  unlockedPillars,
  threatLevel,
  onRestart,
  onReturnToMissions
}) => {
  const completionPercentage = Math.round((unlockedPillars.length / PILLARS_LIST.length) * 100);
  const totalRespuestas = respuestasAfirmativas + respuestasNegativas;
  const tasaEfectividad = totalRespuestas > 0 ? Math.round((respuestasAfirmativas / totalRespuestas) * 100) : 100;

  const getRankTitle = () => {
    if (completionPercentage === 100 && tasaEfectividad >= 80) return "Arquitecto Supremo de Ciberdefensa Integral";
    if (completionPercentage >= 70) return "Comandante de Ciberseguridad Resiliente";
    if (completionPercentage >= 40) return "Especialista Táctico en Cero Confianza";
    return "Cadete Cibernético en Entrenamiento";
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Main Holographic Evaluation Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,243,255,0.15)] relative overflow-hidden">
        {/* Glow background accent */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: activeAvatar.theme_color }}
        />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              {activeAvatar.image_url && (
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.6)] bg-slate-900"
                  style={{ borderColor: activeAvatar.theme_color }}
                >
                  <img
                    src={activeAvatar.image_url}
                    alt={`Caricatura de ${activeAvatar.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  Informe de Postura Cibernética
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-['Chakra_Petch'] text-white">
                  Evaluación: {playerAlias || activeAvatar.name}
                </h1>
                <p className="text-xs sm:text-sm font-['Chakra_Petch'] mt-0.5" style={{ color: activeAvatar.theme_color }}>
                  Rol: {activeAvatar.title}
                </p>
              </div>
            </div>
          </div>

          {/* Rank Badge */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                Rango Cibernético Alcanzado
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-['Chakra_Petch'] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-amber-300">
                {getRankTitle()}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Nivel Amenaza</span>
                <span className="font-mono font-bold text-xs text-emerald-400">{threatLevel}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Puntos Defensa</span>
              <div className="flex items-center gap-1.5 text-amber-300 font-bold font-mono text-xl">
                <Sparkles className="w-4 h-4 text-amber-400" />
                {puntosDefensa}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Racha de Aciertos</span>
              <div className="flex items-center gap-1.5 text-orange-400 font-bold font-mono text-xl">
                <Flame className="w-4 h-4 text-orange-400" />
                x{rachaAciertos}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Capas Activas</span>
              <div className="flex items-center gap-1.5 text-cyan-400 font-bold font-mono text-xl">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                {unlockedPillars.length} / 10
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Ciber-Resiliencia</span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono text-xl">
                {completionPercentage}%
              </div>
            </div>
          </div>

          {/* Balance Cuantificado de Respuestas (Sumando Afirmativas, Restando Negativas) */}
          <div className="mt-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold font-['Chakra_Petch'] text-white">
                  Balance Cuantificado de Respuestas
                </h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Efectividad de Decisión: <strong className="text-emerald-400">{tasaEfectividad}%</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                <div className="flex items-center justify-between text-emerald-400 mb-1">
                  <span className="font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Afirmativas
                  </span>
                  <span className="text-base font-bold">+{respuestasAfirmativas}</span>
                </div>
                <p className="text-[11px] text-emerald-300/80">
                  Decisiones correctas que sumaron puntos a la Torre de Defensa.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30">
                <div className="flex items-center justify-between text-red-400 mb-1">
                  <span className="font-bold flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> Negativas
                  </span>
                  <span className="text-base font-bold">-{respuestasNegativas}</span>
                </div>
                <p className="text-[11px] text-red-300/80">
                  Vulnerabilidades y brechas que restaron puntos de defensa.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30">
                <div className="flex items-center justify-between text-cyan-400 mb-1">
                  <span className="font-bold flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" /> Balance Neto
                  </span>
                  <span className="text-base font-bold text-amber-300">{puntosDefensa} PTS</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Puntaje neto consolidado tras sumar aciertos y restar penalizaciones.
                </p>
              </div>
            </div>
          </div>

          {/* Status of All 10 Pillars */}
          <div className="mt-6">
            <h3 className="font-bold text-sm text-slate-300 font-['Chakra_Petch'] mb-3">
              Desglose de la Torre de Defensa Real
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PILLARS_LIST.map((p) => {
                const isUnlocked = unlockedPillars.includes(p.id) || unlockedPillars.includes(p.name);
                return (
                  <div
                    key={p.id}
                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono ${
                      isUnlocked
                        ? 'bg-cyan-950/20 border-cyan-500/30 text-slate-200'
                        : 'bg-slate-900/30 border-slate-800 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-bold text-slate-400">{p.number}.</span>
                      <span className="truncate">{p.name}</span>
                    </div>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <span className="text-[10px] text-slate-500 shrink-0">Pendiente</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onReturnToMissions}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Continuar Misiones
            </button>

            <button
              type="button"
              onClick={onRestart}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-['Chakra_Petch'] text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)]"
            >
              <RotateCcw className="w-4 h-4" /> Reiniciar Simulación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
