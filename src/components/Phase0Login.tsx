import React, { useState, useRef, useEffect } from 'react';
import { AuthSession, StudentProfile } from '../types';
import {
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Shield,
  BookOpen,
  Landmark,
  TrendingUp,
  LineChart,
  ShieldAlert,
  Loader2,
  Chrome,
} from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';
import { CifraFlowLogo } from './CifraFlowLogo';
import {
  loginWithCredentials,
  loginWithGoogle,
  getGoogleClientId,
  ApiError,
} from '../services/api';
import portadaImg from '../assets/images/portada_cifraflow_1789226672479.jpg';

/**
 * Authentication via the NestJS backend (never Firebase directly).
 * - Email + password  → POST /api/auth/login-with-credentials
 * - Google            → obtains a Google ID token (Google Identity Services),
 *                       then POST /api/auth/login-with-google
 */
interface Phase0LoginProps {
  onAuthenticated: (session: AuthSession, profile: StudentProfile) => void;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: Record<string, unknown>) => void;
          renderButton: (
            parent: HTMLElement | null,
            options: Record<string, unknown>,
          ) => void;
        };
      };
    };
  }
}

function loadGsiScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.google?.accounts?.id) {
      resolve();
      return;
    }
    const existing = document.getElementById('gsi-script') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve());
      return;
    }
    const s = document.createElement('script');
    s.id = 'gsi-script';
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('No se pudo cargar Google Sign-In'));
    document.head.appendChild(s);
  });
}

const DEMO_ACCOUNTS = [
  { label: 'Demo (Liceo)', email: 'demo.liceo@cifraflow.app', password: 'cifra123' },
  { label: 'Demo (UCV)', email: 'demo.ucv@cifraflow.app', password: 'cifra123' },
  { label: 'Demo (Los Próceres)', email: 'demo.proceres@cifraflow.app', password: 'cifra123' },
  { label: 'Demo (IUPSM)', email: 'demo.iupsm@cifraflow.app', password: 'cifra123' },
];

export const Phase0Login: React.FC<Phase0LoginProps> = ({ onAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const googleBtnRef = useRef<HTMLDivElement>(null);
  const googleClientId = getGoogleClientId();

  const buildProfile = (session: AuthSession): StudentProfile => {
    const user = session.user;
    const fullName =
      user.displayName ||
      [user.firstName, user.lastName].filter(Boolean).join(' ').trim();
    return {
      student_name: fullName || user.email.split('@')[0] || 'Estudiante',
      student_id: user.email || user.firebaseUid || user.id,
      institution: 'Sin Institución',
      section: 'A',
    };
  };

  const finishAuth = (session: AuthSession) => {
    ttsAudio.playSound('success');
    onAuthenticated(session, buildProfile(session));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Por favor ingresa tu correo electrónico.');
      ttsAudio.playSound('alert');
      return;
    }
    if (!password) {
      setErrorMsg('Por favor ingresa tu contraseña.');
      ttsAudio.playSound('alert');
      return;
    }

    setErrorMsg('');
    setLoading(true);
    try {
      const session = await loginWithCredentials(email.trim(), password);
      finishAuth(session);
    } catch (err) {
      const message = err instanceof ApiError ? err.message : 'Error al iniciar sesión.';
      setErrorMsg(message);
      ttsAudio.playSound('alert');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleCredential = async (idToken: string) => {
    setLoading(true);
    setErrorMsg('');
    try {
      const session = await loginWithGoogle(idToken);
      finishAuth(session);
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'Error al ingresar con Google.';
      setErrorMsg(message);
      ttsAudio.playSound('alert');
    } finally {
      setLoading(false);
    }
  };

  // Initialize Google Sign-In button (only when a client ID is configured).
  useEffect(() => {
    if (!googleClientId || !googleBtnRef.current) return;
    let cancelled = false;
    loadGsiScript()
      .then(() => {
        if (cancelled) return;
        window.google?.accounts.id.initialize({
          client_id: googleClientId,
          callback: (resp: { credential?: string }) => {
            if (resp?.credential) void handleGoogleCredential(resp.credential);
          },
        });
        window.google?.accounts.id.renderButton(googleBtnRef.current, {
          theme: 'outline',
          size: 'large',
          shape: 'pill',
          width: 300,
        });
      })
      .catch((err: Error) => {
        if (!cancelled) setErrorMsg(err.message);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [googleClientId]);

  const fieldClass =
    'w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 font-sans transition-all';

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Hero Welcome Header */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(0,243,255,0.25)] group">
            <img
              src={portadaImg}
              alt="Avatares CifraFlow: Jorge, Ircar, Iván y Carlos"
              className="w-full h-48 sm:h-60 md:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/20 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-at-c from-transparent via-slate-950/10 to-slate-950/50 pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pointer-events-none">
              <div className="pointer-events-auto transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(0,243,255,0.7)]">
                <CifraFlowLogo size="xl" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wide shadow-[0_0_15px_rgba(0,243,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>FASE 0 — INGRESO AL ECOSISTEMA UNIFICADO</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            CifraFlow Financiero & Tech World
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Simulación interactiva que integra Comprensión Lectora, Primera Cuenta
            Bancaria (BDV/Plaza/Tesoro),{' '}
            <span className="text-emerald-400 font-bold">Emprendimiento</span>, Bolsa
            de Valores de Caracas (BVC) y Ciberseguridad Real.
          </p>

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
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Iniciar Sesión
              </h2>
              <p className="text-xs text-slate-400">
                Autentícate con tu correo y contraseña, o con Google, para iniciar tu
                sesión de CifraFlow.
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
            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Correo Electrónico *</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="juan.perez@correo.com"
                className={fieldClass}
                required
                autoFocus
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Contraseña *</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="••••••••"
                className={fieldClass}
                required
              />
            </div>
          </div>

          {/* Quick Demo Fillers */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-400 text-[11px] font-mono">Autocompletar demo:</span>
            <div className="flex flex-wrap gap-2">
              {DEMO_ACCOUNTS.map((acc) => (
                <button
                  key={acc.email}
                  type="button"
                  onClick={() => {
                    ttsAudio.playSound('switch');
                    setEmail(acc.email);
                    setPassword(acc.password);
                    setErrorMsg('');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-[11px] font-mono transition-colors cursor-pointer"
                >
                  {acc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full group py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold font-mono text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(0,243,255,0.6)] transform hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Autenticando…</span>
                </>
              ) : (
                <>
                  <span>Iniciar Sesión y Elegir Avatar</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Google Sign-In divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-800" />
          <span className="text-xs font-mono text-slate-500">O continúa con</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        {googleClientId ? (
          <div className="flex flex-col items-center">
            <div ref={googleBtnRef} className="min-h-[46px]" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              disabled
              title="Configura VITE_GOOGLE_CLIENT_ID para habilitar el inicio de sesión con Google"
              className="w-full max-w-xs inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-400 text-sm font-medium cursor-not-allowed opacity-70"
            >
              <Chrome className="w-4 h-4" />
              <span>Continuar con Google</span>
            </button>
            <span className="text-[11px] font-mono text-slate-500">
              Se habilitará al configurar VITE_GOOGLE_CLIENT_ID (Google Identity Services).
            </span>
          </div>
        )}
      </div>
    </div>
  );
};