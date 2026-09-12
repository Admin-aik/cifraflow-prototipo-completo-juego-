import React, { useState } from 'react';
import { MissionFinalCompletionData, Avatar, StudentProfile } from '../types';
import { Award, ShieldCheck, Sparkles, CheckCircle2, RotateCcw, Share2, Printer, Terminal, Star, Trophy, ArrowLeft } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';
import { CifraFlowLogo } from './CifraFlowLogo';

interface Phase5FinMisionProps {
  finalData: MissionFinalCompletionData;
  activeAvatar: Avatar;
  studentProfile: StudentProfile;
  onRestartAll: () => void;
  onBackToModules: () => void;
}

export const Phase5FinMision: React.FC<Phase5FinMisionProps> = ({
  finalData,
  activeAvatar,
  studentProfile,
  onRestartAll,
  onBackToModules
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopySummary = () => {
    ttsAudio.playSound('click');
    const text = `🎓 CERTIFICADO DIGITAL: CIFRA FLOW FINANCIERO & TECH WORLD
Estudiante: ${studentProfile.student_name} (${studentProfile.student_id})
Institución: ${studentProfile.institution}
Operador: ${activeAvatar.name}
Puntuación General: ${finalData.final_score_card.puntuacion_general} PTS
Rango Táctico: ${finalData.final_score_card.rango_alcanzado}
Precisión: ${finalData.final_score_card.precision_respuestas}
Módulos Aprobados: ${finalData.final_score_card.modulos_completados} de 5
Verificación Criptográfica: CFF-2026-VAL-OK`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    ttsAudio.playSound('click');
    window.print();
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-in zoom-in-95 duration-300">
      {/* Cinematic Final Banner */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-950/90 border-2 border-amber-500/50 backdrop-blur-2xl shadow-[0_0_70px_rgba(251,191,36,0.25)] overflow-hidden text-center space-y-4">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Phase Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold tracking-wider">
          <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>FASE 5: EVALUACIÓN FINAL</span>
        </div>

        {/* Banner Title as requested by Master Prompt */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-mono drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]">
            {finalData.banner_title}
          </h1>
          <p className="text-xs sm:text-sm text-amber-200/90 font-mono">
            Ecosistema Educativo Concluido • Score Card General Generada
          </p>
        </div>

        {/* Rank Achievement Badge */}
        <div className="inline-flex flex-col items-center p-4 rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-inner">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Rango Otorgado:</span>
          <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono flex items-center gap-2 mt-0.5">
            <Star className="w-5 h-5 fill-current text-amber-400" />
            <span>{finalData.final_score_card.rango_alcanzado}</span>
            <Star className="w-5 h-5 fill-current text-amber-400" />
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Reconocimiento en Finanzas, Contratos, Bolsa BVC y Ciberseguridad
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {/* Puntuación General */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 text-center space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Puntuación General</span>
            <div className={`text-2xl sm:text-3xl font-black font-mono ${
              finalData.final_score_card.puntuacion_general < 0 ? 'text-red-400' : 'text-cyan-300'
            }`}>
              {finalData.final_score_card.puntuacion_general}
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Puntos Netos</p>
          </div>

          {/* Precisión */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-center space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Precisión Global</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-300">
              {finalData.final_score_card.precision_respuestas}
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Aciertos vs Errores</p>
          </div>

          {/* Aciertos Totales */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30 text-center space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Decisiones Clave</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
              {finalData.final_score_card.total_aciertos}
            </div>
            <p className="text-[10px] text-slate-400 font-mono">Respuestas Correctas</p>
          </div>

          {/* Módulos Completados */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-fuchsia-500/30 text-center space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Módulos Aprobados</span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-fuchsia-300">
              {finalData.final_score_card.modulos_completados} / 5
            </div>
            <p className="text-[10px] text-slate-400 font-mono">100% Cobertura</p>
          </div>
        </div>

        {/* Medals Showcase */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 text-left space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Insignias de Maestría Obtenidas</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400">4 / 4 Desbloqueadas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {finalData.medals.map(m => (
              <div key={m.id} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{m.name}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulated Digital Certificate */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border-2 border-cyan-500/40 text-left space-y-4 shadow-2xl relative">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <CifraFlowLogo size="sm" showText={true} />
              <div className="h-6 w-px bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  Certificado Digital de Competencias
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500">
              HASH-SHA256: 0x9B41...E802
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 py-2">
            {/* Grand Avatar Showcase in Certificate */}
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 shrink-0 bg-slate-900 shadow-xl relative group"
              style={{
                borderColor: activeAvatar.theme_color,
                boxShadow: `0 0 30px ${activeAvatar.accent_glow}`
              }}
            >
              {activeAvatar.image_url ? (
                <img
                  src={activeAvatar.image_url}
                  alt={activeAvatar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div
                className="absolute bottom-1 left-1 right-1 text-center py-0.5 rounded text-[9px] font-mono font-bold uppercase text-white bg-slate-950/90 border border-slate-700"
              >
                {activeAvatar.name}
              </div>
            </div>

            <div className="space-y-2 flex-1 text-center md:text-left">
              <p className="text-xs text-slate-400 font-mono">Se certifica que el estudiante:</p>
              <h2 className="text-xl sm:text-2xl font-black text-white font-sans">
                {studentProfile.student_name}
              </h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-mono text-slate-300">
                <span>Cédula/ID: <strong className="text-cyan-400">{studentProfile.student_id}</strong></span>
                <span>•</span>
                <span>Institución: <strong className="text-slate-200">{studentProfile.institution}</strong></span>
                {studentProfile.section && (
                  <>
                    <span>•</span>
                    <span>Sección: <strong className="text-slate-200">{studentProfile.section}</strong></span>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans border-t border-slate-800/80 pt-3">
            Ha superado satisfactoriamente las simulaciones de <strong className="text-cyan-300">Cifra Flow Financiero & Tech World</strong>, evidenciando destrezas en auditoría de contratos, apertura segura de cuentas bancarias y Pago Móvil con tasa oficial BCV, análisis de costos para <span className="text-emerald-400 font-bold">emprendimientos</span>, fundamentos bursátiles en la Bolsa de Valores de Caracas (BVC) y defensa en profundidad con Zero Trust y Passkeys FIDO2.
          </p>

          <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 gap-2">
            <div>Operador Acompañante: <span className="text-white font-bold">{activeAvatar.name}</span></div>
            <div className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verificado por Google AI Studio Architecture</span>
            </div>
          </div>
        </div>

        {/* Final Actions */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onBackToModules}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Selector de Módulos</span>
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 hover:text-cyan-200 text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Certificado'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-2 cursor-pointer transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar PDF</span>
          </button>

          <button
            type="button"
            onClick={onRestartAll}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold font-mono text-xs tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.4)] cursor-pointer hover:scale-[1.02] transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar Simulación Completa</span>
          </button>
        </div>
      </div>
    </div>
  );
};
