import React, { useState, useEffect } from 'react';
import { RightHudPanelState, Avatar, StudentProfile } from '../types';
import { Shield, Flame, Activity, DollarSign, Volume2, VolumeX, ChevronRight, ChevronLeft, User, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';

interface RightHudPanelProps {
  hudState: RightHudPanelState;
  activeAvatar: Avatar;
  studentProfile: StudentProfile;
  currentNarration: string;
  onOpenJsonInspector?: () => void;
}

export const RightHudPanel: React.FC<RightHudPanelProps> = ({
  hudState,
  activeAvatar,
  studentProfile,
  currentNarration,
}) => {
  const [isMuted, setIsMuted] = useState(ttsAudio.getIsMuted());
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCollapsedMobile, setIsCollapsedMobile] = useState(true);

  useEffect(() => {
    const unsubSpeaking = ttsAudio.subscribeSpeaking(setIsSpeaking);
    const unsubMuted = ttsAudio.subscribeMuted(setIsMuted);
    return () => {
      unsubSpeaking();
      unsubMuted();
    };
  }, []);

  const handleToggleMute = () => {
    ttsAudio.playSound('click');
    const newState = ttsAudio.toggleMute();
    setIsMuted(newState);
  };

  const handleReplayNarration = () => {
    ttsAudio.playSound('click');
    if (isMuted) {
      ttsAudio.toggleMute();
    }
    ttsAudio.speakLatinSpanish(currentNarration, true);
  };

  return (
    <>
      {/* Mobile Toggle Button (Top Right corner) */}
      <div className="xl:hidden fixed top-3 right-3 z-50">
        <button
          type="button"
          onClick={() => setIsCollapsedMobile(!isCollapsedMobile)}
          className="p-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/50 text-cyan-300 backdrop-blur-xl shadow-[0_0_20px_rgba(0,243,255,0.3)] flex items-center gap-1.5 text-xs font-mono cursor-pointer"
        >
          <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold">{hudState.puntos_totales_acumulados} PTS</span>
          {isCollapsedMobile ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Slide-out drawer on mobile, sticky sidebar on xl screens */}
      <aside
        className={`fixed xl:static top-0 right-0 h-full xl:h-auto w-80 sm:w-88 z-40 p-4 xl:p-0 transition-transform duration-300 ease-in-out ${
          isCollapsedMobile ? 'translate-x-full xl:translate-x-0' : 'translate-x-0'
        }`}
      >
        <div className="h-full xl:h-auto rounded-3xl bg-slate-950/95 xl:bg-slate-950/80 border-2 border-cyan-500/40 backdrop-blur-2xl p-5 shadow-[0_0_40px_rgba(0,0,0,0.8)] space-y-4 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                HUD DERECHO EN VIVO
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleToggleMute}
                className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 transition-colors cursor-pointer"
                title={isMuted ? "Activar Narración de Voz" : "Silenciar Narración"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              </button>
            </div>
          </div>

          {/* Student Profile Identity */}
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-400 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                Estudiante:
              </span>
              <span className="text-white font-bold truncate max-w-[130px]">
                {hudState.student_info || studentProfile.student_name || 'Sin Asignar'}
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>ID: {hudState.student_id || studentProfile.student_id || 'N/A'}</span>
              <span className="truncate max-w-[120px]">{hudState.institution || studentProfile.institution}</span>
            </div>
          </div>

          {/* Active Avatar Badge - Large Display */}
          <div
            className="p-3.5 rounded-2xl border flex items-center gap-3.5 shadow-lg relative overflow-hidden"
            style={{
              backgroundColor: `${activeAvatar.theme_color}15`,
              borderColor: `${activeAvatar.theme_color}60`,
              boxShadow: `0 0 20px ${activeAvatar.accent_glow}`
            }}
          >
            <div
              className="w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 bg-slate-900 shadow-md relative group"
              style={{ borderColor: activeAvatar.theme_color }}
            >
              {activeAvatar.image_url ? (
                <img
                  src={activeAvatar.image_url}
                  alt={activeAvatar.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500">
                  <Shield className="w-8 h-8" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                Operador Activo
              </div>
              <h4 className="text-sm font-extrabold text-white truncate font-mono">
                {hudState.active_avatar || activeAvatar.name}
              </h4>
              <p className="text-[11px] leading-tight text-slate-300 line-clamp-2 mt-0.5">
                {activeAvatar.perk}
              </p>
            </div>
          </div>

          {/* Score Display (Big Numbers) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-slate-900/90 border border-cyan-500/40 text-center space-y-1 shadow-[0_0_25px_rgba(0,243,255,0.15)]">
            <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider block">
              Puntos Totales Acumulados
            </span>
            <div className={`text-3xl sm:text-4xl font-black font-mono ${
              hudState.puntos_totales_acumulados < 0
                ? 'text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.3)]'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400'
            }`}>
              {hudState.puntos_totales_acumulados}
            </div>
            <div className="flex items-center justify-center gap-3 pt-1 text-[11px] font-mono border-t border-slate-800">
              <span className={`flex items-center gap-0.5 ${hudState.puntos_nivel_actual < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                <CheckCircle2 className="w-3 h-3" />
                <span>Nivel: {hudState.puntos_nivel_actual > 0 ? `+${hudState.puntos_nivel_actual}` : hudState.puntos_nivel_actual}</span>
              </span>
              <span className="text-red-400 flex items-center gap-0.5">
                <AlertTriangle className="w-3 h-3" />
                <span>Fallos: {hudState.penalizaciones_nivel_actual}</span>
              </span>
            </div>
          </div>

          {/* Streak & Level Info */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {/* Racha */}
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-current" />
                <span>Racha Aciertos</span>
              </div>
              <div className="text-lg font-black text-amber-300 flex items-center gap-1">
                <span>{hudState.racha_aciertos}</span>
                {hudState.racha_aciertos >= 3 && (
                  <span className="text-[10px] text-amber-400 animate-pulse">🔥 x{hudState.racha_aciertos}</span>
                )}
              </div>
            </div>

            {/* Tasa BCV */}
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1 text-slate-400 text-[10px]">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Tasa Oficial BCV</span>
              </div>
              <div className="text-xs font-bold text-emerald-300 truncate">
                {hudState.bcv_rate_active}
              </div>
            </div>
          </div>

          {/* Current Level Status */}
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1 text-xs font-mono">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
              Posición en el Ecosistema:
            </span>
            <div className="text-cyan-300 font-bold leading-snug">
              {hudState.nivel_actual}
            </div>
          </div>

          {/* Audio Narration Snip & Re-listen */}
          <div className="p-3 rounded-2xl bg-slate-900/70 border border-cyan-500/20 text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                {isSpeaking ? (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                ) : (
                  <Volume2 className="w-3 h-3 text-cyan-400" />
                )}
                <span>Locución TTS (Español Latino):</span>
              </span>
              <button
                type="button"
                onClick={handleReplayNarration}
                className="text-cyan-300 hover:text-white underline cursor-pointer"
              >
                Re-escuchar
              </button>
            </div>
            <p className="text-[11px] text-slate-300 italic line-clamp-3 leading-relaxed font-sans">
              &ldquo;{currentNarration}&rdquo;
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
