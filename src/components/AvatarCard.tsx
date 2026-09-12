import React from 'react';
import { Avatar } from '../types';
import { Sparkles, Shield, Cpu, Binary, SearchCode, CheckCircle2, Info, ChevronDown } from 'lucide-react';

interface AvatarCardProps {
  avatar: Avatar;
  isSelected: boolean;
  onSelect: (avatar: Avatar) => void;
}

export const AvatarCard: React.FC<AvatarCardProps> = ({
  avatar,
  isSelected,
  onSelect,
}) => {
  const getAvatarIllustration = (av: Avatar) => {
    if (av.image_url) {
      return (
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 shrink-0 group-hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-slate-900"
          style={{ borderColor: av.theme_color, boxShadow: `0 0 20px ${av.accent_glow}` }}
        >
          <img
            src={av.image_url}
            alt={`Caricatura de ${av.name}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          <div
            className="absolute -bottom-0.5 -right-0.5 px-2 py-0.5 rounded-tl-lg text-slate-950 flex items-center justify-center font-bold font-mono text-[10px] shadow"
            style={{ backgroundColor: av.theme_color }}
          >
            {av.name.slice(0, 2).toUpperCase()}
          </div>
        </div>
      );
    }

    switch (av.id) {
      case 'kael_rivera':
        return (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-cyan-950 flex items-center justify-center border border-cyan-400/40 shadow-[0_0_20px_rgba(0,243,255,0.25)] group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-1 rounded-xl border border-cyan-400/20 pointer-events-none" />
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 drop-shadow-[0_0_10px_#00f3ff]" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              JO
            </div>
          </div>
        );
      case 'maya_chen':
        return (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-slate-900 to-pink-950 flex items-center justify-center border border-fuchsia-400/40 shadow-[0_0_20px_rgba(255,0,127,0.25)] group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-1 rounded-xl border border-fuchsia-400/20 pointer-events-none" />
            <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-fuchsia-400 drop-shadow-[0_0_10px_#ff007f]" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-fuchsia-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              IR
            </div>
          </div>
        );
      case 'dante_albornoz':
        return (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-slate-900 to-green-950 flex items-center justify-center border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-1 rounded-xl border border-emerald-400/20 pointer-events-none" />
            <SearchCode className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 drop-shadow-[0_0_10px_#10b981]" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              IV
            </div>
          </div>
        );
      case 'valeria_montero':
        return (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-yellow-950 flex items-center justify-center border border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.25)] group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-1 rounded-xl border border-amber-400/20 pointer-events-none" />
            <Binary className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400 drop-shadow-[0_0_10px_#fbbf24]" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              CA
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleCardClick = () => {
    onSelect(avatar);
  };

  return (
    <div
      id={`avatar-${avatar.id}`}
      onClick={handleCardClick}
      className={`group relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer backdrop-blur-xl border ${
        isSelected
          ? 'bg-slate-900/90 shadow-[0_0_35px_rgba(0,0,0,0.8)] ring-2'
          : 'bg-slate-950/60 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700'
      }`}
      style={{
        borderColor: isSelected ? avatar.theme_color : undefined,
        boxShadow: isSelected ? `0 0 30px ${avatar.accent_glow}, inset 0 0 15px ${avatar.accent_glow}` : undefined,
      }}
    >
      {/* Selection indicator pill */}
      {isSelected && (
        <div
          className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 text-slate-950"
          style={{ backgroundColor: avatar.theme_color }}
        >
          <CheckCircle2 className="w-3 h-3" /> Operador Activo
        </div>
      )}

      {/* Header section with stylized illustration & details */}
      <div className="flex items-start gap-3.5 mb-3">
        {getAvatarIllustration(avatar)}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1">
            <h3 className="font-bold text-base sm:text-lg text-white font-['Chakra_Petch'] truncate">
              {avatar.name}
            </h3>
          </div>
          <p
            className="text-xs font-medium font-['Chakra_Petch'] mt-0.5"
            style={{ color: avatar.theme_color }}
          >
            {avatar.title}
          </p>
          <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {avatar.role_focus}
          </p>
        </div>
      </div>

      {/* Special Perk pill */}
      <div className="mb-3.5 px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-start gap-2 text-xs">
        <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: avatar.theme_color }} />
        <div className="leading-snug">
          <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">Habilidad Especial</span>
          <span className="text-slate-200 font-medium text-[11px]">{avatar.perk}</span>
        </div>
      </div>

      {/* Operator stats matrix */}
      <div className="grid grid-cols-2 gap-2 text-[11px] font-['JetBrains_Mono']">
        <div className="bg-slate-900/60 px-2 py-1.5 rounded-lg border border-slate-800/60">
          <div className="flex justify-between text-slate-400 mb-1 text-[10px]">
            <span>Lógica</span>
            <span className="text-white font-bold">{avatar.stats.logica}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${avatar.stats.logica}%`, backgroundColor: avatar.theme_color }}
            />
          </div>
        </div>

        <div className="bg-slate-900/60 px-2 py-1.5 rounded-lg border border-slate-800/60">
          <div className="flex justify-between text-slate-400 mb-1 text-[10px]">
            <span>Auditoría</span>
            <span className="text-white font-bold">{avatar.stats.auditoria}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${avatar.stats.auditoria}%`, backgroundColor: avatar.theme_color }}
            />
          </div>
        </div>

        <div className="bg-slate-900/60 px-2 py-1.5 rounded-lg border border-slate-800/60">
          <div className="flex justify-between text-slate-400 mb-1 text-[10px]">
            <span>Respuesta</span>
            <span className="text-white font-bold">{avatar.stats.respuesta}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${avatar.stats.respuesta}%`, backgroundColor: avatar.theme_color }}
            />
          </div>
        </div>

        <div className="bg-slate-900/60 px-2 py-1.5 rounded-lg border border-slate-800/60">
          <div className="flex justify-between text-slate-400 mb-1 text-[10px]">
            <span>Criptografía</span>
            <span className="text-white font-bold">{avatar.stats.criptografia}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${avatar.stats.criptografia}%`, backgroundColor: avatar.theme_color }}
            />
          </div>
        </div>
      </div>

      {/* Operator Description (Describir avatar al hacer clic) */}
      {avatar.description && (
        <div
          className={`mt-3 p-3 rounded-xl border text-xs transition-all ${
            isSelected
              ? 'bg-slate-900/90 border-cyan-500/50 shadow-sm'
              : 'bg-slate-900/40 border-slate-800/80 text-slate-300'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1"
              style={{ color: avatar.theme_color }}
            >
              <Info className="w-3 h-3" />
              Perfil & Descripción
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-300">
            {avatar.description}
          </p>
          {avatar.recommended_for && (
            <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] font-mono flex items-start gap-1">
              <span className="text-slate-400 font-bold shrink-0">Sinergia:</span>
              <span className="text-amber-300">{avatar.recommended_for}</span>
            </div>
          )}
        </div>
      )}

      {/* Quote bubble snippet */}
      <div className="mt-2.5 pt-2 border-t border-slate-800/60 text-[10px] italic text-slate-400 flex items-center justify-between">
        <span className="line-clamp-1">&ldquo;{avatar.audio_quote}&rdquo;</span>
      </div>
    </div>
  );
};
