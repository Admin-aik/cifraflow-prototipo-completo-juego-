import React from 'react';
import { Shield, Flame, Terminal, Code, Activity, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { Avatar } from '../types';
import { CifraFlowLogo } from './CifraFlowLogo';

interface HudHeaderProps {
  activeAvatar: Avatar;
  playerAlias: string;
  puntosDefensa: number;
  rachaAciertos: number;
  respuestasAfirmativas?: number;
  respuestasNegativas?: number;
  unlockedCount: number;
  threatLevel: "Bajo" | "Moderado" | "Crítico";
  currentScreen: "PORTADA" | "GAMEPLAY" | "TASK_HUB" | "SUMMARY";
  onNavigate: (screen: "PORTADA" | "GAMEPLAY" | "TASK_HUB" | "SUMMARY") => void;
  onBack?: () => void;
  onOpenJsonModal: () => void;
}

export const HudHeader: React.FC<HudHeaderProps> = ({
  activeAvatar,
  playerAlias,
  puntosDefensa,
  rachaAciertos,
  respuestasAfirmativas = 0,
  respuestasNegativas = 0,
  unlockedCount,
  threatLevel,
  currentScreen,
  onNavigate,
  onBack,
  onOpenJsonModal,
}) => {
  const getThreatBadge = () => {
    switch (threatLevel) {
      case 'Bajo':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">Bajo</span>;
      case 'Moderado':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">Moderado</span>;
      case 'Crítico':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse">Crítico</span>;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/85 border-b border-cyan-500/20 px-3 sm:px-6 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            type="button"
            onClick={() => {
              if (onBack) {
                onBack();
              } else {
                onNavigate('PORTADA');
              }
            }}
            title="Toca el logotipo de CifraFlow para regresar a la pantalla anterior"
            className="flex items-center gap-2.5 cursor-pointer group text-left bg-transparent border-0 p-0"
          >
            <CifraFlowLogo size="sm" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-['Chakra_Petch'] font-bold text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400">
                  CIFRAFLOW
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  v2.5 PRO
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-wide uppercase">
                Flow Financiero & Tech World
              </p>
            </div>
          </button>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              type="button"
              onClick={onOpenJsonModal}
              className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs flex items-center gap-1"
            >
              <Code className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-['Chakra_Petch']">
          <button
            type="button"
            onClick={() => onNavigate('PORTADA')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentScreen === 'PORTADA'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(0,243,255,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Portada
          </button>
          <button
            type="button"
            onClick={() => onNavigate('GAMEPLAY')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentScreen === 'GAMEPLAY'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(0,243,255,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Misión HUD
          </button>
          <button
            type="button"
            onClick={() => onNavigate('TASK_HUB')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentScreen === 'TASK_HUB'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(0,243,255,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Torre 10 Pilares
          </button>
          <button
            type="button"
            onClick={() => onNavigate('SUMMARY')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentScreen === 'SUMMARY'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-[0_0_10px_rgba(0,243,255,0.2)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Evaluación
          </button>
        </nav>

        {/* Live HUD Telemetry Stats */}
        <div className="flex items-center flex-wrap justify-center md:justify-end gap-2 sm:gap-3 text-xs font-['JetBrains_Mono']">
          {/* Active Operator Pill */}
          <div
            className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/90 border"
            style={{ borderColor: `${activeAvatar.theme_color}55` }}
          >
            {activeAvatar.image_url ? (
              <img
                src={activeAvatar.image_url}
                alt={activeAvatar.name}
                referrerPolicy="no-referrer"
                className="w-5 h-5 rounded-full object-cover border"
                style={{ borderColor: activeAvatar.theme_color }}
              />
            ) : (
              <span
                className="w-2 h-2 rounded-full shadow-[0_0_8px]"
                style={{ backgroundColor: activeAvatar.theme_color }}
              />
            )}
            <span className="text-slate-400">Op:</span>
            <span className="font-bold text-white max-w-[90px] sm:max-w-none truncate">
              {playerAlias || activeAvatar.name.split(' ')[0]}
            </span>
          </div>

          {/* Defense Points */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800" title="Puntos de Defensa Totales">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">PTS:</span>
            <span className={`font-bold ${puntosDefensa < 0 ? 'text-red-400' : 'text-amber-300'}`}>{puntosDefensa}</span>
          </div>

          {/* Respuestas Afirmativas (sumando) */}
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.15)]"
            title="Respuestas afirmativas acertadas (+PTS)"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] text-emerald-400/80 font-bold uppercase hidden sm:inline">Afirmativas:</span>
            <span className="font-bold text-emerald-300 font-mono">+{respuestasAfirmativas}</span>
          </div>

          {/* Respuestas Negativas (restando) */}
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.15)]"
            title="Respuestas negativas / brechas detectadas (-PTS)"
          >
            <XCircle className="w-3.5 h-3.5 text-red-400" />
            <span className="text-[10px] text-red-400/80 font-bold uppercase hidden sm:inline">Negativas:</span>
            <span className="font-bold text-red-300 font-mono">-{respuestasNegativas}</span>
          </div>

          {/* Streak */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-400">Racha:</span>
            <span className="font-bold text-orange-300">x{rachaAciertos}</span>
          </div>

          {/* Unlocked Pillars */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/30">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400">Torre:</span>
            <span className="font-bold text-cyan-300">{unlockedCount}/10</span>
          </div>

          {/* Threat Level */}
          <div className="hidden sm:flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-slate-400" />
            {getThreatBadge()}
          </div>

          {/* JSON Controls (Desktop) */}
          <div className="hidden md:flex items-center gap-1.5 pl-1.5 border-l border-slate-800">
            <button
              type="button"
              onClick={onOpenJsonModal}
              title="Inspeccionar respuesta JSON estricta del motor lógico"
              className="px-2 py-1 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 flex items-center gap-1 font-mono text-[11px] transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>JSON</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
