import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { User, CreditCard, School, ArrowRight, Sparkles, Shield, BookOpen, Landmark, TrendingUp, LineChart, ShieldAlert } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';
import { CifraFlowLogo } from './CifraFlowLogo';
import { AVATARS } from '../data/avatars';
import portadaImg from '../assets/images/portada_cifraflow_1789226672479.jpg';

interface Phase0LoginProps {
  onLogin: (profile: StudentProfile) => void;
  initialProfile?: StudentProfile;
}

export const Phase0Login: React.FC<Phase0LoginProps> = ({ onLogin, initialProfile }) => {
  const [studentName, setStudentName] = useState(initialProfile?.student_name || '');
  const [studentId, setStudentId] = useState(initialProfile?.student_id || '');
  const [institution, setInstitution] = useState(initialProfile?.institution || '');
  const [errorMsg, setErrorMsg] = useState('');

  const handleQuickFill = (name: string, id: string, inst: string) => {
    ttsAudio.playSound('switch');
    setStudentName(name);
    setStudentId(id);
    setInstitution(inst);
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setErrorMsg('Por favor ingresa el nombre del estudiante.');
      ttsAudio.playSound('alert');
      return;
    }
    if (!studentId.trim()) {
      setErrorMsg('Por favor ingresa la cédula de identidad del estudiante.');
      ttsAudio.playSound('alert');
      return;
    }
    if (!institution.trim()) {
      setErrorMsg('Por favor ingresa la institución educativa.');
      ttsAudio.playSound('alert');
      return;
    }

    ttsAudio.playSound('click');
    onLogin({
      student_name: studentName.trim(),
      student_id: studentId.trim(),
      institution: institution.trim(),
      section: initialProfile?.section || 'A'
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Hero Welcome Header */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          {/* Unified Single Image around CifraFlow Logo - Sin recuadros */}
          <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(0,243,255,0.25)] group">
            {/* Imagen única panorámica de los avatares integrados */}
            <img
              src={portadaImg}
              alt="Avatares CifraFlow: Jorge, Ircar, Iván y Carlos"
              className="w-full h-48 sm:h-60 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Máscara y viñeta sutil para fusión armónica */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/20 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/10 to-slate-950/50 pointer-events-none" />

            {/* Logotipo central de CifraFlow integrado en el centro */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none">
              <div className="pointer-events-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(0,243,255,0.7)]">
                <CifraFlowLogo size="xl" />
              </div>
            </div>

            {/* Identificación de los 4 avatares sin recuadros */}
            <div className="absolute bottom-2.5 inset-x-0 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 pointer-events-auto">
              <button
                type="button"
                onClick={() => ttsAudio.speakLatinSpanish("Operador Jorge: Operador táctico de accesos y nómina")}
                className="px-2.5 py-1 rounded-full bg-slate-950/80 hover:bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-[11px] sm:text-xs font-mono font-bold transition-all shadow cursor-pointer flex items-center gap-1.5"
                title="Clic para escuchar a Jorge"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Jorge
              </button>
              <button
                type="button"
                onClick={() => ttsAudio.speakLatinSpanish("Operadora Ircar: Especialista cloud y optimización financiera")}
                className="px-2.5 py-1 rounded-full bg-slate-950/80 hover:bg-pink-950/90 border border-pink-400/50 text-pink-300 text-[11px] sm:text-xs font-mono font-bold transition-all shadow cursor-pointer flex items-center gap-1.5"
                title="Clic para escuchar a Ircar"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                Ircar
              </button>
              <button
                type="button"
                onClick={() => ttsAudio.speakLatinSpanish("Operador Iván: Auditor forense digital y detective de contratos")}
                className="px-2.5 py-1 rounded-full bg-slate-950/80 hover:bg-emerald-950/90 border border-emerald-400/50 text-emerald-300 text-[11px] sm:text-xs font-mono font-bold transition-all shadow cursor-pointer flex items-center gap-1.5"
                title="Clic para escuchar a Iván"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Iván
              </button>
              <button
                type="button"
                onClick={() => ttsAudio.speakLatinSpanish("Operador Carlos: Estratega presupuestario y emprendimiento")}
                className="px-2.5 py-1 rounded-full bg-slate-950/80 hover:bg-amber-950/90 border border-amber-400/50 text-amber-300 text-[11px] sm:text-xs font-mono font-bold transition-all shadow cursor-pointer flex items-center gap-1.5"
                title="Clic para escuchar a Carlos"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Carlos
              </button>
            </div>
          </div>

          {/* Phase 0 Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wide shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>FASE 0 — REGISTRO E INGRESO AL ECOSISTEMA UNIFICADO</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            CifraFlow Financiero & Tech World
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Plataforma interactiva de simulación que integra Comprensión Lectora, Primera Cuenta Bancaria (BDV/Plaza/Tesoro), <span className="text-emerald-400 font-bold">Emprendimiento</span>, Bolsa de Valores de Caracas (BVC) y Ciberseguridad Real.
          </p>

          {/* Module Badges with Green Emprendimiento */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 text-[11px] font-mono">
              <BookOpen className="w-3 h-3 text-cyan-400" /> Lectura & Contratos
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
              <Landmark className="w-3 h-3 text-cyan-400" /> Banca Fintech
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/60 text-emerald-400 text-[11px] font-mono font-bold shadow-[0_0_12px_rgba(16,185,129,0.3)]">
              <TrendingUp className="w-3 h-3 text-emerald-400" /> Emprendimiento
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
              <LineChart className="w-3 h-3 text-amber-400" /> Bolsa BVC
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-fuchsia-500/30 text-fuchsia-300 text-[11px] font-mono">
              <ShieldAlert className="w-3 h-3 text-fuchsia-400" /> Ciberseguridad
            </span>
          </div>
        </div>
      </div>

      {/* Login Form Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Datos del Estudiante e Institución
              </h2>
              <p className="text-xs text-slate-400">
                Registra tu nombre, cédula de identidad y centro de estudios para inicializar tu sesión de CifraFlow.
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono uppercase">
            HUD 0 PTS
          </span>
        </div>

        {errorMsg && (
          <div className="mb-5 p-3 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nombre del Estudiante */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <User className="w-4 h-4 text-cyan-400" />
                <span>Nombre del Estudiante *</span>
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => {
                  setStudentName(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="Ej. Alejandro Mendoza"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 font-sans transition-all"
                required
                autoFocus
              />
            </div>

            {/* Cédula de Identidad */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-cyan-400" />
                <span>Cédula de Identidad *</span>
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => {
                  setStudentId(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="Ej. V-28.123.456"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 font-sans transition-all"
                required
              />
            </div>
          </div>

          {/* Institución Educativa */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
              <School className="w-4 h-4 text-cyan-400" />
              <span>Institución Educativa (Liceo, Colegio o Universidad) *</span>
            </label>
            <input
              type="text"
              value={institution}
              onChange={(e) => {
                setInstitution(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Ej. Liceo Bolivariano Gran Colombia / UCV / Complejo Los Próceres"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 font-sans transition-all"
              required
            />
          </div>

          {/* Quick Demo Fillers */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-400 text-[11px] font-mono">Autocompletar de prueba rápida:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleQuickFill('Ircar Rojas', 'V-29.412.873', 'Liceo Tecnológico Simón Bolívar')}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-pink-300 text-[11px] font-mono transition-colors cursor-pointer"
              >
                Ircar (Liceo)
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('Jorge Medina', 'V-28.951.204', 'Universidad Central de Venezuela (UCV)')}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-[11px] font-mono transition-colors cursor-pointer"
              >
                Jorge (UCV)
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('Iván Albornoz', 'V-30.145.890', 'Complejo Educativo Los Próceres')}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-300 text-[11px] font-mono transition-colors cursor-pointer"
              >
                Iván (C.E. Los Próceres)
              </button>
              <button
                type="button"
                onClick={() => handleQuickFill('Carlos Rivas', 'V-27.819.340', 'IUP Santiago Mariño')}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 text-[11px] font-mono transition-colors cursor-pointer"
              >
                Carlos (IUPSM)
              </button>
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full group py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold font-mono text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.6)] transform hover:scale-[1.01] transition-all cursor-pointer"
            >
              <span>Registrar Estudiante y Elegir Avatar</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
