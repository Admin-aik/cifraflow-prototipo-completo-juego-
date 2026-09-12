import React from 'react';
import { ModuleDefinition, Avatar, StudentProfile } from '../types';
import { GAME_MODULES, MASTER_15_CHALLENGES_MODULE } from '../data/gameModules';
import { BookOpen, Landmark, TrendingUp, LineChart, ShieldAlert, ArrowRight, ArrowLeft, Play, Sparkles, Zap, Award, Target } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';
import { BcvRateBadge } from './BcvRateBadge';

interface Phase2ModuleSelectionProps {
  studentProfile: StudentProfile;
  activeAvatar: Avatar;
  completedModuleIds: string[];
  onSelectModule: (module: ModuleDefinition) => void;
  onBackToAvatars: () => void;
  onTriggerFinalEvaluation: () => void;
}

export const Phase2ModuleSelection: React.FC<Phase2ModuleSelectionProps> = ({
  studentProfile,
  activeAvatar,
  completedModuleIds,
  onSelectModule,
  onBackToAvatars,
  onTriggerFinalEvaluation
}) => {
  const getModuleIcon = (iconName: string, themeColor: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" style={{ color: themeColor }} />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" style={{ color: themeColor }} />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" style={{ color: themeColor }} />;
      case 'LineChart':
        return <LineChart className="w-6 h-6" style={{ color: themeColor }} />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" style={{ color: themeColor }} />;
      default:
        return <Sparkles className="w-6 h-6" style={{ color: themeColor }} />;
    }
  };

  const handleLaunch = (mod: ModuleDefinition) => {
    ttsAudio.playSound('click');
    ttsAudio.speakLatinSpanish(`Iniciando ${mod.name}. Desplegando los desafíos tácticos. Fíjate bien en el caso práctico.`);
    onSelectModule(mod);
  };

  const subModules = GAME_MODULES.filter(m => m.id !== 'todos_los_15_desafios' && m.id !== 'todos_los_10_desafios');

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Bar Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToAvatars}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Cambiar Avatar</span>
          </button>
          <div className="h-4 w-px bg-slate-700 hidden sm:block" />
          <div className="text-xs">
            <span className="text-slate-400">Operador: </span>
            <span className="text-cyan-400 font-bold font-mono">{activeAvatar.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <BcvRateBadge compact={false} showTime={true} />
          {completedModuleIds.length > 0 && (
            <button
              type="button"
              onClick={onTriggerFinalEvaluation}
              className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Ver Certificado Final</span>
            </button>
          )}
        </div>
      </div>

      {/* Featured Master Campaign: Los 15 Desafíos */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-mono font-black tracking-wider shadow-[0_0_15px_rgba(0,243,255,0.5)]">
              <Target className="w-3.5 h-3.5" />
              <span>MODALIDAD RECOMENDADA — 15 DESAFÍOS INTEGRADOS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              CifraFlow: La Misión de los 15 Desafíos
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Recorre en secuencia continua los 15 casos prácticos de la simulación: Comprensión Lectora de Contratos y Pólizas, Apertura Bancaria BDV/Plaza y Tasa Oficial BCV, Estructura de Costos de <span className="text-emerald-400 font-bold">Emprendimiento</span> y Optimización Cloud, Bolsa de Valores de Caracas (BVC) y Ciberseguridad Zero Trust / Anti-Vishing.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-mono text-cyan-300">
              <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700">15 Casos Prácticos</span>
              <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700">3 Desafíos por Módulo</span>
              <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700">Tasa BCV del Día y Hora en Vivo</span>
              <span className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-700">+100 Pts / -25 Pts</span>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleLaunch(MASTER_15_CHALLENGES_MODULE)}
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-black font-mono text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:scale-105 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Iniciar los 15 Desafíos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Headline for Thematic Modules */}
      <div className="text-center space-y-1.5 pt-2">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          O Practica por Vectores Temáticos
        </h3>
        <p className="text-slate-400 text-xs max-w-xl mx-auto">
          Selecciona un módulo temático si deseas entrenar en un área de conocimiento específica.
        </p>
      </div>

      {/* Modules Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subModules.map((module) => {
          const isCompleted = completedModuleIds.includes(module.id);
          const isRecommended = activeAvatar.specialty_modules?.includes(module.id);

          return (
            <div
              key={module.id}
              className={`relative rounded-3xl p-5 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                isCompleted
                  ? 'bg-emerald-950/20 border-emerald-500/40 shadow-[0_0_30px_rgba(52,211,153,0.1)]'
                  : 'bg-slate-950/80 border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {/* Recommended Badge for Active Avatar */}
              {isRecommended && (
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-bold font-mono text-[10px] flex items-center gap-1 shadow-md">
                  <Zap className="w-3 h-3 fill-current" />
                  <span>BONIFICACIÓN {activeAvatar.name.split(' ')[0].toUpperCase()}</span>
                </div>
              )}

              {/* Module Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="p-3 rounded-2xl border"
                    style={{
                      backgroundColor: `${module.theme_color}15`,
                      borderColor: `${module.theme_color}40`
                    }}
                  >
                    {getModuleIcon(module.icon_name, module.theme_color)}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700 text-slate-300">
                    {module.total_levels} Desafíos
                  </span>
                </div>

                <div>
                  <span
                    className="text-[10px] font-mono uppercase font-bold tracking-wider"
                    style={{ color: module.theme_color }}
                  >
                    {module.badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {module.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {module.subtitle}
                  </p>
                </div>

                {/* Levels list preview */}
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 text-[11px] font-mono">
                  {module.missions.map((m, idx) => (
                    <div key={m.id} className="flex items-center justify-between text-slate-400">
                      <span className="truncate pr-2">{m.level_title.split(':')[0]}: {m.title}</span>
                      <span className="text-cyan-400 font-bold shrink-0">+100 pts</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => handleLaunch(module)}
                  className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-110"
                  style={{
                    backgroundColor: module.theme_color,
                    color: '#020617'
                  }}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isCompleted ? 'Volver a Jugar Vector' : 'Practicar Vector'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
