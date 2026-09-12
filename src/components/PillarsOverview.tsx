import React from 'react';
import { PILLARS_LIST } from '../data/pillars';
import { CheckCircle2, Lock, ArrowRight, ShieldCheck, AlertTriangle, Shield, Crosshair } from 'lucide-react';

interface PillarsOverviewProps {
  unlockedPillars: string[];
  activePillarId?: string;
  onSelectPillar: (pillarId: string) => void;
}

export const PillarsOverview: React.FC<PillarsOverviewProps> = ({
  unlockedPillars,
  activePillarId,
  onSelectPillar
}) => {
  return (
    <div className="w-full space-y-4">
      {/* Intro Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4" />
              Estructura Multinivel
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Chakra_Petch'] text-white">
              La Torre de Defensa Real (10 Pilares)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Frente a la creencia superficial de que un simple firewall y un antivirus protegen los sistemas, esta es la arquitectura contemporánea de capas defensivas que mitiga ataques en profundidad.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3 bg-slate-900/90 px-4 py-2.5 rounded-xl border border-slate-800">
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Progreso de la Torre</span>
              <span className="font-['Chakra_Petch'] text-lg font-bold text-cyan-300">
                {unlockedPillars.length} / 10
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-cyan-500/30 flex items-center justify-center font-bold text-xs text-cyan-400">
              {Math.round((unlockedPillars.length / 10) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* 10 Pillars Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {PILLARS_LIST.map((pillar) => {
          const isUnlocked = unlockedPillars.includes(pillar.id) || unlockedPillars.includes(pillar.name);
          const isActive = activePillarId === pillar.id;

          return (
            <div
              key={pillar.id}
              onClick={() => {
                onSelectPillar(pillar.id);
              }}
              className={`p-4 rounded-2xl border transition-all cursor-pointer backdrop-blur-xl ${
                isUnlocked
                  ? 'bg-slate-900/80 hover:bg-slate-900 border-cyan-500/30 hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,243,255,0.06)]'
                  : 'bg-slate-950/60 hover:bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
              } ${isActive ? 'ring-2 ring-cyan-400' : ''}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-xs border"
                    style={{
                      backgroundColor: isUnlocked ? `${pillar.color}22` : '#1e293b',
                      borderColor: isUnlocked ? pillar.color : '#334155',
                      color: isUnlocked ? pillar.color : '#94a3b8'
                    }}
                  >
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white font-['Chakra_Petch'] flex items-center gap-1.5">
                      {pillar.name}
                    </h3>
                    <p className="text-[11px] text-slate-400">{pillar.tagline}</p>
                  </div>
                </div>

                {isUnlocked ? (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" /> Activo
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1 shrink-0">
                    <Lock className="w-3 h-3" /> Bloqueado
                  </span>
                )}
              </div>

              {/* Myth vs Reality Comparison */}
              <div className="space-y-1.5 mt-3 pt-2.5 border-t border-slate-800/80 text-xs">
                <div className="flex items-start gap-1.5 text-red-300/90 text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong className="text-red-400">Mito:</strong> {pillar.myth}</span>
                </div>
                <div className="flex items-start gap-1.5 text-cyan-300/90 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-cyan-400">Realidad:</strong> {pillar.reality}</span>
                </div>
              </div>

              {/* Threat example tag & Action */}
              <div className="mt-3 pt-2 flex items-center justify-between gap-2 text-[10px] font-mono text-slate-400 border-t border-slate-800/60">
                <span className="flex items-center gap-1 text-slate-500 truncate">
                  <Crosshair className="w-3 h-3 text-slate-400 shrink-0" />
                  {pillar.mitreTechnique}
                </span>

                <span className="text-cyan-400 font-medium flex items-center gap-0.5 hover:underline shrink-0">
                  {isUnlocked ? 'Revisar Misión' : 'Desafiar Misión'} <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
