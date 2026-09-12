import React, { useState } from 'react';
import { Avatar, StudentProfile } from '../types';
import { AVATARS } from '../data/avatars';
import { Zap, ArrowRight, ArrowLeft, CheckCircle2, Shield, Activity, Volume2, Sparkles, Box, Users, Compass } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';
import { CyberSpaceCanvas } from './CyberSpaceCanvas';

interface Phase1AvatarSelectionProps {
  studentProfile: StudentProfile;
  selectedAvatar: Avatar;
  onSelectAvatar: (avatar: Avatar) => void;
  onConfirmSelection: () => void;
  onBackToLogin: () => void;
  completedModuleIds?: string[];
  threatLevel?: "Bajo" | "Moderado" | "Crítico";
}

export const Phase1AvatarSelection: React.FC<Phase1AvatarSelectionProps> = ({
  studentProfile,
  selectedAvatar,
  onSelectAvatar,
  onConfirmSelection,
  onBackToLogin,
  completedModuleIds = [],
  threatLevel = "Crítico"
}) => {
  const [activeTab, setActiveTab] = useState<'both' | 'cyberspace' | 'avatars'>('both');

  const handleChoose = (avatar: Avatar) => {
    ttsAudio.playSound('switch');
    onSelectAvatar(avatar);
    ttsAudio.speakLatinSpanish(`¡Has seleccionado a ${avatar.name}! ${avatar.title}. Fíjate en su ventaja táctica: ${avatar.perk}. Cita: ${avatar.audio_quote}`);
  };

  const handlePlayQuote = (e: React.MouseEvent, quote: string) => {
    e.stopPropagation();
    ttsAudio.playSound('click');
    ttsAudio.speakLatinSpanish(quote);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-in fade-in-50 duration-300">
      {/* Top Banner Navigation & Student Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToLogin}
            className="p-2.5 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-all flex items-center gap-2 text-xs sm:text-sm font-mono font-bold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Editar Datos de Login</span>
          </button>
          <div className="h-5 w-px bg-slate-700 hidden sm:block" />
          <div className="text-xs sm:text-sm flex flex-wrap items-center gap-1.5">
            <span className="text-slate-400">Estudiante: </span>
            <span className="text-cyan-300 font-bold font-mono">{studentProfile.student_name}</span>
            <span className="text-slate-500 font-mono text-xs">· C.I. {studentProfile.student_id}</span>
            <span className="text-slate-400 text-xs hidden md:inline">({studentProfile.institution})</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle Tabs */}
          <div className="flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-700">
            <button
              type="button"
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'both' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Vista Completa
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cyberspace')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'cyberspace' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Solo Ciberespacio 3D
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('avatars')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'avatars' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Solo Avatares 3D
            </button>
          </div>
        </div>
      </div>

      {/* PART 1: 3D CYBERSPACE INTERACTIVE SIMULATION ("esta parte después del logeo") */}
      {(activeTab === 'both' || activeTab === 'cyberspace') && (
        <section className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Box className="w-4 h-4 text-cyan-400" />
              <span>Simulación 3D: Arquitectura Defensiva vs Mito Perimetral</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Despliegue interactivo pos-login • Arrastra para rotar en 3D
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_40px_rgba(0,243,255,0.15)] bg-slate-950">
            <CyberSpaceCanvas
              unlockedPillars={completedModuleIds}
              accentColor={selectedAvatar.theme_color}
              threatLevel={threatLevel}
            />
          </div>
        </section>
      )}

      {/* PART 2: GRAND AVATAR SPOTLIGHT & 4-OPERATOR SELECTION ("coloca en grande la imagen del avatar") */}
      {(activeTab === 'both' || activeTab === 'avatars') && (
        <section className="space-y-6">
          {/* Section Headline */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-wider">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>FASE 1: OPERADORES ESPECIALISTAS ATEMPORALES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selecciona tu <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">Operador Táctico</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
              Cada especialista atemporal activa multiplicadores y escudos para la resolución de contratos, aperturas bancarias BDV, cálculo de costos y defensa Zero Trust.
            </p>
          </div>

          {/* GRAND AVATAR HERO SPOTLIGHT (Avatar en GRANDE) */}
          <div
            className="relative p-6 sm:p-8 rounded-3xl border-2 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-500"
            style={{
              borderColor: `${selectedAvatar.theme_color}80`,
              boxShadow: `0 0 50px ${selectedAvatar.accent_glow}`
            }}
          >
            <div
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ backgroundColor: selectedAvatar.theme_color }}
            />

            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
              {/* LARGE AVATAR IMAGE CONTAINER */}
              <div className="w-full lg:w-96 shrink-0 flex flex-col items-center">
                <div
                  className="relative w-full max-w-sm aspect-[3/4] sm:h-[420px] rounded-3xl overflow-hidden border-2 bg-slate-950 shadow-2xl group transition-all duration-300"
                  style={{
                    borderColor: selectedAvatar.theme_color,
                    boxShadow: `0 0 35px ${selectedAvatar.accent_glow}`
                  }}
                >
                  {selectedAvatar.image_url ? (
                    <img
                      src={selectedAvatar.image_url}
                      alt={selectedAvatar.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700">
                      <Shield className="w-24 h-24" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Active Selected Tag */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-slate-950 font-bold font-mono text-xs shadow-lg flex items-center gap-1.5 z-20"
                    style={{ backgroundColor: selectedAvatar.theme_color }}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>OPERADOR ACTIVO</span>
                  </div>

                  {/* Audio Quote Trigger Button */}
                  <button
                    type="button"
                    onClick={(e) => handlePlayQuote(e, `${selectedAvatar.name}. ${selectedAvatar.audio_quote}`)}
                    className="absolute bottom-3 right-3 p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-slate-700 backdrop-blur-xl shadow-xl transition-all cursor-pointer hover:scale-110"
                    title="Escuchar voz del avatar en español latino"
                  >
                    <Volume2 className="w-5 h-5 text-cyan-400" />
                  </button>
                </div>

                <p className="text-[11px] font-mono text-slate-400 mt-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Retrato oficial en alta definición 3D</span>
                </p>
              </div>

              {/* AVATAR DETAILS & TACTICAL PROFILE */}
              <div className="flex-1 w-full space-y-5 text-left">
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider mb-2"
                    style={{
                      backgroundColor: `${selectedAvatar.theme_color}22`,
                      color: selectedAvatar.theme_color,
                      border: `1px solid ${selectedAvatar.theme_color}55`
                    }}
                  >
                    {selectedAvatar.title}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white font-mono">
                    {selectedAvatar.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2 font-sans">
                    {selectedAvatar.description}
                  </p>
                </div>

                {/* Perk Box */}
                <div
                  className="p-4 rounded-2xl border text-sm space-y-1 shadow-inner"
                  style={{
                    backgroundColor: `${selectedAvatar.theme_color}15`,
                    borderColor: `${selectedAvatar.theme_color}45`
                  }}
                >
                  <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase" style={{ color: selectedAvatar.theme_color }}>
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Bonificación Táctica en Vivo (Perk):</span>
                  </div>
                  <p className="text-white text-sm sm:text-base font-semibold">
                    {selectedAvatar.perk}
                  </p>
                </div>

                {/* Voice Quote */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 italic font-mono flex items-start gap-2.5">
                  <Volume2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>&ldquo;{selectedAvatar.audio_quote}&rdquo;</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Lógica</span>
                    <span className="text-base font-bold font-mono text-white">{selectedAvatar.stats.logica}%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Auditoría</span>
                    <span className="text-base font-bold font-mono text-white">{selectedAvatar.stats.auditoria}%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Respuesta</span>
                    <span className="text-base font-bold font-mono text-white">{selectedAvatar.stats.respuesta}%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Criptografía</span>
                    <span className="text-base font-bold font-mono text-white">{selectedAvatar.stats.criptografia}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 AVATAR SELECTOR GRID (with large portraits) */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-bold px-1">
              Haz clic en cualquier operador para cambiar y escuchar su voz:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AVATARS.map((avatar) => {
                const isSelected = selectedAvatar.id === avatar.id;
                return (
                  <div
                    key={avatar.id}
                    onClick={() => handleChoose(avatar)}
                    className={`relative group rounded-3xl p-4 transition-all duration-300 cursor-pointer backdrop-blur-xl flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900/95 border-2 shadow-[0_0_30px_rgba(0,0,0,0.8)] scale-[1.02]'
                        : 'bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:scale-[1.01]'
                    }`}
                    style={{
                      borderColor: isSelected ? avatar.theme_color : undefined,
                      boxShadow: isSelected ? `0 0 25px ${avatar.accent_glow}` : undefined
                    }}
                  >
                    {/* Large image frame in the card */}
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-3 bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {avatar.image_url ? (
                        <img
                          src={avatar.image_url}
                          alt={avatar.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700">
                          <Shield className="w-12 h-12" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                      {/* Small speaker button inside thumbnail */}
                      <button
                        type="button"
                        onClick={(e) => handlePlayQuote(e, `${avatar.name}. ${avatar.audio_quote}`)}
                        className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-cyan-300 border border-slate-700"
                        title="Escuchar audio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="absolute bottom-2 left-2">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase"
                          style={{
                            backgroundColor: `${avatar.theme_color}33`,
                            color: avatar.theme_color,
                            border: `1px solid ${avatar.theme_color}66`
                          }}
                        >
                          {avatar.title.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 flex-1">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {avatar.name}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {avatar.title}
                        </p>
                      </div>

                      <div
                        className="p-2 rounded-xl border text-[11px] leading-tight"
                        style={{
                          backgroundColor: `${avatar.theme_color}11`,
                          borderColor: `${avatar.theme_color}33`
                        }}
                      >
                        <span className="font-bold block text-[10px] uppercase font-mono" style={{ color: avatar.theme_color }}>
                          Perk:
                        </span>
                        <span className="text-slate-200 line-clamp-2">
                          {avatar.perk}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 mt-2 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={() => handleChoose(avatar)}
                        className={`w-full py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'text-slate-950 shadow'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                        }`}
                        style={{
                          backgroundColor: isSelected ? avatar.theme_color : undefined
                        }}
                      >
                        <Activity className="w-3.5 h-3.5" />
                        <span>{isSelected ? 'Seleccionado' : 'Elegir'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Confirmation Bar */}
          <div className="p-5 sm:p-6 rounded-3xl bg-slate-950/95 border-2 border-cyan-500/50 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,243,255,0.2)] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-left">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 shrink-0 bg-slate-900 shadow-md"
                style={{ borderColor: selectedAvatar.theme_color }}
              >
                {selectedAvatar.image_url ? (
                  <img src={selectedAvatar.image_url} alt={selectedAvatar.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-800" />
                )}
              </div>
              <div className="space-y-0.5">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Operador Confirmado para la Misión
                </div>
                <div className="text-base sm:text-lg font-black text-white font-mono">
                  {selectedAvatar.name} — <span className="text-slate-400 text-sm font-normal">{selectedAvatar.title}</span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-1">
                  {selectedAvatar.perk}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onConfirmSelection}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-black font-mono text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Desplegar a Selección de Módulos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
