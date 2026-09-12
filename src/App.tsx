/**
 * Cifra Flow Financiero & Tech World
 * Master EdTech Simulation Architecture & Game Engine
 * Unifying Reading Comprehension, Banking (BDV/Plaza/Tesoro), Entrepreneurship, Caracas Stock Exchange (BVC) & Cybersecurity
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  SystemPhase,
  StudentProfile,
  Avatar,
  ModuleDefinition,
  GameplayMission,
  MasterSystemState,
  LevelCompletionData,
  MissionFinalCompletionData
} from './types';
import { AVATARS } from './data/avatars';
import { GAME_MODULES } from './data/gameModules';
import { ttsAudio } from './services/ttsAudio';
import { ArrowLeft } from 'lucide-react';
import { CifraFlowLogo } from './components/CifraFlowLogo';
import { TextScaleControl, TextScaleLevel } from './components/TextScaleControl';
import { BcvRateBadge } from './components/BcvRateBadge';
import { useBcvRate } from './services/bcvService';

// Visual Components
import { CyberSpaceCanvas } from './components/CyberSpaceCanvas';
import { Phase0Login } from './components/Phase0Login';
import { Phase1AvatarSelection } from './components/Phase1AvatarSelection';
import { Phase2ModuleSelection } from './components/Phase2ModuleSelection';
import { Phase3Gameplay } from './components/Phase3Gameplay';
import { Phase4GameOverLevel } from './components/Phase4GameOverLevel';
import { Phase5FinMision } from './components/Phase5FinMision';
import { RightHudPanel } from './components/RightHudPanel';
import { MasterJsonModal } from './components/MasterJsonModal';

export default function App() {
  const bcv = useBcvRate();

  // Navigation Phase
  const [phase, setPhase] = useState<SystemPhase>('LOGIN');

  // Student Profile
  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    student_name: '',
    student_id: '',
    institution: '',
    section: ''
  });

  // Active Avatar
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar>(AVATARS[0]);

  // Scoring Engine
  const [puntosTotalesAcumulados, setPuntosTotalesAcumulados] = useState<number>(0);
  const [puntosNivelActual, setPuntosNivelActual] = useState<number>(0);
  const [penalizacionesNivelActual, setPenalizacionesNivelActual] = useState<number>(0);
  const [rachaAciertos, setRachaAciertos] = useState<number>(0);
  const [rachaMaxima, setRachaMaxima] = useState<number>(0);
  const [totalAciertos, setTotalAciertos] = useState<number>(0);
  const [totalFallos, setTotalFallos] = useState<number>(0);

  // Active Module & Mission Tracking
  const [activeModule, setActiveModule] = useState<ModuleDefinition>(GAME_MODULES[0]);
  const [currentMissionIndex, setCurrentMissionIndex] = useState<number>(0);
  const [completedModuleIds, setCompletedModuleIds] = useState<string[]>([]);

  // Current Latin Spanish Audio Narration
  const [audioNarration, setAudioNarration] = useState<string>(
    'Bienvenido a CifraFlow: Flow Financiero y Tech World. Por favor ingresa tu institución educativa para inicializar tu sesión e ingresar al selector cinematográfico de avatares 3D.'
  );

  // Accessibility Font Size Scaling ('normal' 100%, 'large' 115%, 'xlarge' 130%)
  const [textScale, setTextScale] = useState<TextScaleLevel>('normal');

  const handleScaleChange = useCallback((newScale: TextScaleLevel) => {
    setTextScale(newScale);
    const msgs: Record<TextScaleLevel, string> = {
      normal: 'Tamaño de texto estándar restablecido al cien por ciento.',
      large: 'Tamaño de texto ampliado al ciento quince por ciento para facilitar la lectura.',
      xlarge: 'Tamaño de texto ampliado al ciento treinta por ciento para lectura de alta visibilidad.'
    };
    ttsAudio.speakLatinSpanish(msgs[newScale]);
  }, []);

  // Screen history for navigation and logo back action
  const [phaseHistory, setPhaseHistory] = useState<SystemPhase[]>([]);

  // Function to transition with history tracking
  const navigateToPhase = useCallback((targetPhase: SystemPhase) => {
    setPhaseHistory(prev => (prev[prev.length - 1] === phase ? prev : [...prev, phase]));
    setPhase(targetPhase);
  }, [phase]);

  // Handle touch/click on the logo to return to the previous screen
  const handleGoBack = useCallback(() => {
    if (phase === 'LOGIN') return;
    ttsAudio.playSound('click');

    if (phaseHistory.length > 0) {
      const prevPhase = phaseHistory[phaseHistory.length - 1];
      setPhaseHistory(prev => prev.slice(0, -1));
      setPhase(prevPhase);
      const narrationMap: Record<SystemPhase, string> = {
        LOGIN: 'Regresando al ingreso de institución educativa.',
        AVATAR_SELECTION: 'Regresando a la selección de avatares 3D.',
        MODULE_SELECTION: 'Regresando a la selección de módulos.',
        GAMEPLAY: 'Regresando a la misión activa.',
        GAME_OVER_LEVEL: 'Regresando al balance de nivel.',
        FIN_DE_LA_MISION: 'Regresando al panel de módulos.'
      };
      const msg = narrationMap[prevPhase] || 'Regresando a la pantalla anterior.';
      setAudioNarration(msg);
      ttsAudio.speakLatinSpanish(msg);
      return;
    }

    // Direct fallback hierarchy if history stack is empty
    let fallbackPhase: SystemPhase = 'LOGIN';
    if (phase === 'AVATAR_SELECTION') {
      fallbackPhase = 'LOGIN';
    } else if (phase === 'MODULE_SELECTION') {
      fallbackPhase = 'AVATAR_SELECTION';
    } else if (phase === 'GAMEPLAY') {
      fallbackPhase = 'MODULE_SELECTION';
    } else if (phase === 'GAME_OVER_LEVEL') {
      fallbackPhase = 'GAMEPLAY';
    } else if (phase === 'FIN_DE_LA_MISION') {
      fallbackPhase = 'MODULE_SELECTION';
    }

    setPhase(fallbackPhase);
    const narrationMap: Record<SystemPhase, string> = {
      LOGIN: 'Regresando al ingreso de institución educativa.',
      AVATAR_SELECTION: 'Regresando a la selección de avatares 3D.',
      MODULE_SELECTION: 'Regresando a la selección de módulos.',
      GAMEPLAY: 'Regresando a la misión activa.',
      GAME_OVER_LEVEL: 'Regresando al balance de nivel.',
      FIN_DE_LA_MISION: 'Regresando al panel de módulos.'
    };
    const msg = narrationMap[fallbackPhase] || 'Regresando a la pantalla anterior.';
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  }, [phase, phaseHistory]);

  // Modal for Strict JSON inspection
  const [isJsonModalOpen, setIsJsonModalOpen] = useState<boolean>(false);

  // Initial welcome greeting on load
  useEffect(() => {
    const timer = setTimeout(() => {
      ttsAudio.speakLatinSpanish(audioNarration);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Update racha máxima
  useEffect(() => {
    if (rachaAciertos > rachaMaxima) {
      setRachaMaxima(rachaAciertos);
    }
  }, [rachaAciertos, rachaMaxima]);

  // Current mission derived
  const currentMission: GameplayMission = useMemo(() => {
    if (activeModule && activeModule.missions[currentMissionIndex]) {
      return activeModule.missions[currentMissionIndex];
    }
    return GAME_MODULES[0].missions[0];
  }, [activeModule, currentMissionIndex]);

  // Handle Login completion (Phase 0 -> Phase 1)
  const handleStudentLogin = (profile: StudentProfile) => {
    setStudentProfile(profile);
    navigateToPhase('AVATAR_SELECTION');
    const msg = `Estudiante ${profile.student_name}, cédula ${profile.student_id}, de la institución ${profile.institution} registrado con éxito. Bienvenido a la Fase 1 de CifraFlow: Selector Cinematográfico de Avatares 3D. Elige a tu operador táctico.`;
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  };

  // Handle Avatar Confirmation (Phase 1 -> Phase 2)
  const handleConfirmAvatar = () => {
    ttsAudio.playSound('click');
    navigateToPhase('MODULE_SELECTION');
    const msg = `Operador ${selectedAvatar.name} listo en el puente de mando. Desplegando los 15 desafíos de aprendizaje de CifraFlow.`;
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  };

  // Handle Module Selection (Phase 2 -> Phase 3)
  const handleSelectModule = (module: ModuleDefinition) => {
    setActiveModule(module);
    setCurrentMissionIndex(0);
    setPuntosNivelActual(0);
    setPenalizacionesNivelActual(0);
    navigateToPhase('GAMEPLAY');

    const firstMission = module.missions[0];
    const msg = `Iniciando ${module.name}, ${firstMission.level_title}. Desafío: ${firstMission.title}. Analiza el caso práctico y toma la mejor decisión.`;
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  };

  // Handle solve attempt inside gameplay
  const handleSolveAttempt = (isCorrect: boolean, pointsDelta: number, feedback: string) => {
    if (isCorrect) {
      setPuntosTotalesAcumulados(prev => prev + pointsDelta);
      setPuntosNivelActual(prev => prev + pointsDelta);
      setRachaAciertos(prev => prev + 1);
      setTotalAciertos(prev => prev + 1);

      const msg = `¡Excelente! Decisión acertada. Sumaste ${pointsDelta} puntos. Tu racha subió a ${rachaAciertos + 1}.`;
      setAudioNarration(msg);
    } else {
      // Penalty: -25 points (permite restar y quedar en valor negativo si no hay puntos positivos)
      setPuntosTotalesAcumulados(prev => prev + pointsDelta);
      setPuntosNivelActual(prev => prev + pointsDelta);
      setPenalizacionesNivelActual(prev => prev + pointsDelta);
      setRachaAciertos(0);
      setTotalFallos(prev => prev + 1);

      const msg = `Respuesta incorrecta. Se han restado ${Math.abs(pointsDelta)} puntos. Revisa el caso con atención y reinténtalo.`;
      setAudioNarration(msg);
    }
  };

  // Advance from Gameplay to Level Completion (Phase 3 -> Phase 4)
  const handleAdvanceToGameOver = (mission: GameplayMission) => {
    ttsAudio.playSound('gameover');
    navigateToPhase('GAME_OVER_LEVEL');

    const isLastInModule = currentMissionIndex + 1 >= activeModule.missions.length;
    if (isLastInModule && !completedModuleIds.includes(activeModule.id)) {
      setCompletedModuleIds(prev => [...prev, activeModule.id]);
    }

    const msg = `¡GAME OVER! ${mission.level_title} completado con éxito. Has ganado ${puntosNivelActual} puntos en este nivel. Tus puntos acumulados son ${puntosTotalesAcumulados}.`;
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  };

  // Advance from Game Over to Next Level or Next Module (Phase 4 -> Phase 3 or Phase 2 or Phase 5)
  const handleNextLevelFromGameOver = () => {
    ttsAudio.playSound('click');
    const nextIdx = currentMissionIndex + 1;

    if (nextIdx < activeModule.missions.length) {
      // Next level in same module
      setCurrentMissionIndex(nextIdx);
      setPuntosNivelActual(0);
      setPenalizacionesNivelActual(0);
      navigateToPhase('GAMEPLAY');

      const nextMission = activeModule.missions[nextIdx];
      const msg = `Desplegando ${nextMission.level_title}: ${nextMission.title}. ¡Buena suerte!`;
      setAudioNarration(msg);
      ttsAudio.speakLatinSpanish(msg);
    } else {
      // Check if this was the 10 challenges campaign or all modules completed
      const updatedCompleted = completedModuleIds.includes(activeModule.id)
        ? completedModuleIds
        : [...completedModuleIds, activeModule.id];
      setCompletedModuleIds(updatedCompleted);

      if (activeModule.id === 'todos_los_10_desafios' || updatedCompleted.length >= GAME_MODULES.length) {
        handleTriggerFinalEvaluation();
      } else {
        navigateToPhase('MODULE_SELECTION');
        const msg = `¡Módulo ${activeModule.name} concluido! Selecciona el siguiente vector para continuar acumulando puntos.`;
        setAudioNarration(msg);
        ttsAudio.speakLatinSpanish(msg);
      }
    }
  };

  // Trigger Phase 5: FIN DE LA MISIÓN
  const handleTriggerFinalEvaluation = () => {
    ttsAudio.playSound('fanfare');
    navigateToPhase('FIN_DE_LA_MISION');

    const accuracy = totalAciertos + totalFallos > 0
      ? Math.round((totalAciertos / (totalAciertos + totalFallos)) * 100)
      : 100;

    const msg = `¡FIN DE LA MISIÓN! Felicitaciones, ${studentProfile.institution || studentProfile.student_name || 'Estudiante'}. Has culminado la simulación integral con ${puntosTotalesAcumulados} puntos y una precisión del ${accuracy}%. Tu Certificado Digital ha sido emitido.`;
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  };

  // Restart everything to initial state
  const handleRestartAll = () => {
    ttsAudio.playSound('click');
    setPhaseHistory([]);
    setPhase('LOGIN');
    setPuntosTotalesAcumulados(0);
    setPuntosNivelActual(0);
    setPenalizacionesNivelActual(0);
    setRachaAciertos(0);
    setRachaMaxima(0);
    setTotalAciertos(0);
    setTotalFallos(0);
    setCurrentMissionIndex(0);
    setCompletedModuleIds([]);

    const msg = 'Simulación reinicializada. Ingresa tus credenciales para comenzar un nuevo ciclo de entrenamiento.';
    setAudioNarration(msg);
    ttsAudio.speakLatinSpanish(msg);
  };

  // Level Completion Data object
  const levelCompletionData: LevelCompletionData = useMemo(() => {
    const isLastInModule = currentMissionIndex + 1 >= activeModule.missions.length;
    const nextMissionTitle = !isLastInModule
      ? activeModule.missions[currentMissionIndex + 1].level_title
      : (activeModule.id === 'todos_los_10_desafios' ? 'Evaluación Final y Certificado de Honor' : 'Siguiente Módulo Formativo');

    return {
      trigger_game_over: phase === 'GAME_OVER_LEVEL',
      banner_title: 'GAME OVER - DESAFÍO COMPLETADO',
      module_name: activeModule.name,
      completed_level_number: currentMissionIndex + 1,
      score_summary: {
        puntos_ganados_nivel: puntosNivelActual,
        penalizaciones_nivel: penalizacionesNivelActual,
        puntos_totales_acumulados: puntosTotalesAcumulados,
        racha_maxima: rachaMaxima
      },
      next_level_unlocked: nextMissionTitle,
      action_button: isLastInModule ? 'Completar y Ver Certificado Final' : 'Avanzar al Siguiente Desafío'
    };
  }, [
    phase,
    activeModule,
    currentMissionIndex,
    puntosNivelActual,
    penalizacionesNivelActual,
    puntosTotalesAcumulados,
    rachaMaxima
  ]);

  // Final Completion Data object
  const missionFinalCompletionData: MissionFinalCompletionData = useMemo(() => {
    const totalDecisions = totalAciertos + totalFallos;
    const accuracy = totalDecisions > 0 ? `${Math.round((totalAciertos / totalDecisions) * 100)}%` : '100%';

    let rank = 'Operador Junior Cyber-Fintech';
    if (puntosTotalesAcumulados >= 1200) {
      rank = 'Master Cyber-Fintech Supremo';
    } else if (puntosTotalesAcumulados >= 800) {
      rank = 'Estratega Senior de Inversión & Seguridad';
    } else if (puntosTotalesAcumulados >= 400) {
      rank = 'Analista Avanzado de Finanzas & Datos';
    }

    return {
      trigger_fin_mision: phase === 'FIN_DE_LA_MISION',
      banner_title: 'FIN DE LA MISIÓN',
      final_score_card: {
        puntuacion_general: puntosTotalesAcumulados,
        rango_alcanzado: rank,
        precision_respuestas: accuracy,
        total_aciertos: totalAciertos,
        total_fallos: totalFallos,
        modulos_completados: completedModuleIds.length
      },
      medals: [
        {
          id: 'med_contratos',
          name: 'Detective de Contratos Digitales',
          description: 'Auditoría perfecta de términos y cláusulas abusivas sin caer en trampas.',
          color: '#34d399',
          unlocked: true
        },
        {
          id: 'med_banca',
          name: 'Sello de Blindaje Bancario BDV/Plaza',
          description: 'Apertura KYC exitosa y aplicación de tasa oficial BCV con Pago Móvil seguro.',
          color: '#00f3ff',
          unlocked: true
        },
        {
          id: 'med_flujo',
          name: 'Estratega Presupuestario 50/30/20',
          description: 'Dominio de costos fijos, punto de equilibrio y fondo de emergencia.',
          color: '#fbbf24',
          unlocked: true
        },
        {
          id: 'med_bvc_zero',
          name: 'Inversionista BVC & Guardián Zero Trust',
          description: 'Diversificación bursátil y neutralización de ataques de proxy AiTM con Passkeys FIDO2.',
          color: '#ff007f',
          unlocked: true
        }
      ]
    };
  }, [phase, puntosTotalesAcumulados, totalAciertos, totalFallos, completedModuleIds]);

  // Current level label for HUD
  const currentLevelLabel = useMemo(() => {
    if (phase === 'LOGIN') return 'Fase 0: Ingreso del Estudiante';
    if (phase === 'AVATAR_SELECTION') return 'Fase 1: Selector de Avatares 3D';
    if (phase === 'MODULE_SELECTION') return 'Fase 2: Selector de Módulos';
    if (phase === 'FIN_DE_LA_MISION') return 'Fase 5: FIN DE LA MISIÓN';
    return `${activeModule.name} — ${currentMission.level_title}`;
  }, [phase, activeModule, currentMission]);

  // Right HUD state object
  const rightHudPanelState = useMemo(() => ({
    visible: true,
    position: 'TOP_RIGHT' as const,
    student_info: studentProfile.student_name || 'Estudiante en Espera',
    student_id: studentProfile.student_id || 'PENDIENTE',
    institution: studentProfile.institution || 'Sin Institución',
    active_avatar: selectedAvatar.name,
    avatar_theme: selectedAvatar.theme_color,
    puntos_totales_acumulados: puntosTotalesAcumulados,
    puntos_nivel_actual: puntosNivelActual,
    penalizaciones_nivel_actual: penalizacionesNivelActual,
    racha_aciertos: rachaAciertos,
    nivel_actual: currentLevelLabel,
    bcv_rate_active: bcv.rateString
  }), [
    studentProfile,
    selectedAvatar,
    puntosTotalesAcumulados,
    puntosNivelActual,
    penalizacionesNivelActual,
    rachaAciertos,
    currentLevelLabel,
    bcv.rateString
  ]);

  // Master System State conforming to Gemini Strict Output JSON Schema
  const masterSystemState: MasterSystemState = useMemo(() => ({
    system_phase: phase,
    audio_narration: audioNarration,
    login_screen: {
      show_login: phase === 'LOGIN',
      fields: ['student_name', 'student_id', 'institution', 'section'],
      student_profile: studentProfile
    },
    avatar_selection_screen: {
      show_selection: phase === 'AVATAR_SELECTION',
      avatars: AVATARS
    },
    right_hud_panel: rightHudPanelState,
    main_gameplay_modal: phase === 'GAMEPLAY' ? {
      title: currentMission.title,
      module_context: currentMission.module_name,
      source_text: currentMission.source_text,
      question: currentMission.question,
      options: currentMission.options
    } : null,
    level_completion_screen: levelCompletionData,
    mission_final_completion: missionFinalCompletionData
  }), [
    phase,
    audioNarration,
    studentProfile,
    rightHudPanelState,
    currentMission,
    levelCompletionData,
    missionFinalCompletionData
  ]);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* 3D Cyber-Space Interactive Canvas (placed after login) */}
      {phase !== 'LOGIN' && (
        <div className="fixed inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
          <CyberSpaceCanvas
            unlockedPillars={completedModuleIds}
            accentColor={selectedAvatar.theme_color}
            threatLevel={puntosTotalesAcumulados >= 800 ? 'Bajo' : puntosTotalesAcumulados >= 400 ? 'Moderado' : 'Crítico'}
          />
        </div>
      )}

      {/* Persistent Top Navigation Bar */}
      <header className="sticky top-0 z-30 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-2xl px-4 sm:px-6 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Touch logo to return to previous screen */}
          <button
            type="button"
            onClick={handleGoBack}
            disabled={phase === 'LOGIN'}
            title={phase !== 'LOGIN' ? 'Toca el logotipo de CifraFlow para regresar a la pantalla anterior' : 'CifraFlow'}
            aria-label={phase !== 'LOGIN' ? 'Regresar a la pantalla anterior' : 'CifraFlow Inicio'}
            className={`group flex items-center gap-3.5 text-left transition-all ${
              phase !== 'LOGIN'
                ? 'cursor-pointer hover:opacity-90 active:scale-[0.99]'
                : 'cursor-default'
            }`}
          >
            <div className="relative">
              <CifraFlowLogo size="md" />
              {phase !== 'LOGIN' && (
                <div
                  className="absolute -bottom-1 -right-1 p-1 rounded-full bg-slate-900 border border-cyan-400 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 shadow-md transition-all"
                  title="Tocar para regresar"
                >
                  <ArrowLeft className="w-3 h-3 animate-pulse" />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-extrabold text-white font-mono flex items-center gap-2 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300">
                  CifraFlow
                </span>
                <span className="text-slate-300 font-semibold text-sm sm:text-base hidden md:inline">
                  Financiero & Tech World
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-lg text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                  v2.0
                </span>
                {phase !== 'LOGIN' && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Volver</span>
                  </span>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 hidden sm:block font-medium">
                EdTech 3D: Comprensión Lectora • Banca BDV • <span className="text-emerald-400 font-bold">Emprendimiento</span> • Bolsa BVC • Ciberseguridad Zero Trust
              </p>
            </div>
          </button>

          <div className="flex items-center gap-3">
            {/* Live BCV Rate Badge with dynamic update and audio */}
            <BcvRateBadge compact={true} showTime={true} />

            {/* Accessibility Text Scale Control - Readability enhancement */}
            <TextScaleControl scale={textScale} onChangeScale={handleScaleChange} />

            {/* Phase Indicator Navigation Menu - Increased font size */}
            <nav className="hidden xl:flex items-center gap-2 text-sm sm:text-base font-mono font-bold" aria-label="Menú de Navegación de Fases">
              <span className={`px-3 py-1.5 rounded-xl transition-all ${phase === 'LOGIN' ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(0,243,255,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}>
                0. Login
              </span>
              <span className="text-slate-600 font-bold">›</span>
              <span className={`px-3 py-1.5 rounded-xl transition-all ${phase === 'AVATAR_SELECTION' ? 'bg-fuchsia-500 text-slate-950 font-black shadow-[0_0_15px_rgba(255,0,127,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}>
                1. Avatares
              </span>
              <span className="text-slate-600 font-bold">›</span>
              <span className={`px-3 py-1.5 rounded-xl transition-all ${phase === 'MODULE_SELECTION' ? 'bg-amber-400 text-slate-950 font-black shadow-[0_0_15px_rgba(251,191,36,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}>
                2. Módulos
              </span>
              <span className="text-slate-600 font-bold">›</span>
              <span className={`px-3 py-1.5 rounded-xl transition-all ${phase === 'GAMEPLAY' ? 'bg-emerald-400 text-slate-950 font-black shadow-[0_0_15px_rgba(52,211,153,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}>
                3. Gameplay
              </span>
              <span className="text-slate-600 font-bold">›</span>
              <span className={`px-3 py-1.5 rounded-xl transition-all ${phase === 'GAME_OVER_LEVEL' ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_15px_rgba(0,243,255,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}>
                4. Game Over
              </span>
              <span className="text-slate-600 font-bold">›</span>
              <span className={`px-3 py-1.5 rounded-xl transition-all ${phase === 'FIN_DE_LA_MISION' ? 'bg-amber-400 text-slate-950 font-black shadow-[0_0_15px_rgba(251,191,36,0.4)]' : 'text-slate-400 hover:text-slate-200'}`}>
                5. Fin Misión
              </span>
            </nav>

            {/* Mobile/Compact Phase Badge */}
            <div className="xl:hidden px-3 py-1 rounded-xl bg-slate-900 border border-slate-700 text-sm font-mono font-bold text-cyan-300">
              {phase === 'LOGIN' && '0. Login'}
              {phase === 'AVATAR_SELECTION' && '1. Avatares'}
              {phase === 'MODULE_SELECTION' && '2. Módulos'}
              {phase === 'GAMEPLAY' && '3. Gameplay'}
              {phase === 'GAME_OVER_LEVEL' && '4. Game Over'}
              {phase === 'FIN_DE_LA_MISION' && '5. Fin Misión'}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container Layout with Right HUD Panel and Dynamic Text Scaling */}
      <main className={`flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col xl:flex-row gap-6 relative z-10 ${
        textScale === 'large' ? 'app-scale-large' : textScale === 'xlarge' ? 'app-scale-xlarge' : ''
      }`}>
        {/* Primary Interactive Stage */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          {/* Phase 0: Login */}
          {phase === 'LOGIN' && (
            <Phase0Login
              initialProfile={studentProfile}
              onLogin={handleStudentLogin}
            />
          )}

          {/* Phase 1: Avatar Selection (Placed after login) */}
          {phase === 'AVATAR_SELECTION' && (
            <Phase1AvatarSelection
              studentProfile={studentProfile}
              selectedAvatar={selectedAvatar}
              onSelectAvatar={setSelectedAvatar}
              onConfirmSelection={handleConfirmAvatar}
              onBackToLogin={handleGoBack}
              completedModuleIds={completedModuleIds}
              threatLevel={rightHudPanelState.threat_level}
            />
          )}

          {/* Phase 2: Module Selection */}
          {phase === 'MODULE_SELECTION' && (
            <Phase2ModuleSelection
              studentProfile={studentProfile}
              activeAvatar={selectedAvatar}
              completedModuleIds={completedModuleIds}
              onSelectModule={handleSelectModule}
              onBackToAvatars={handleGoBack}
              onTriggerFinalEvaluation={handleTriggerFinalEvaluation}
            />
          )}

          {/* Phase 3: Gameplay */}
          {phase === 'GAMEPLAY' && (
            <Phase3Gameplay
              mission={currentMission}
              activeAvatar={selectedAvatar}
              studentProfile={studentProfile}
              rachaAciertos={rachaAciertos}
              missionIndex={currentMissionIndex}
              totalMissions={activeModule.missions.length}
              onSolveAttempt={handleSolveAttempt}
              onAdvanceToGameOver={handleAdvanceToGameOver}
              onBackToModules={handleGoBack}
            />
          )}

          {/* Phase 4: Game Over Level */}
          {phase === 'GAME_OVER_LEVEL' && (
            <Phase4GameOverLevel
              levelData={levelCompletionData}
              activeAvatar={selectedAvatar}
              studentProfile={studentProfile}
              onNextLevel={handleNextLevelFromGameOver}
              onBackToModules={handleGoBack}
              onGoToFinalEvaluation={handleTriggerFinalEvaluation}
              isLastLevelOverall={
                currentMissionIndex + 1 >= activeModule.missions.length ||
                completedModuleIds.length >= GAME_MODULES.length
              }
            />
          )}

          {/* Phase 5: Fin de la Misión */}
          {phase === 'FIN_DE_LA_MISION' && (
            <Phase5FinMision
              finalData={missionFinalCompletionData}
              activeAvatar={selectedAvatar}
              studentProfile={studentProfile}
              onRestartAll={handleRestartAll}
              onBackToModules={handleGoBack}
            />
          )}
        </div>

        {/* Right-side Persistent HUD Panel */}
        <div className="shrink-0">
          <RightHudPanel
            hudState={rightHudPanelState}
            activeAvatar={selectedAvatar}
            studentProfile={studentProfile}
            currentNarration={audioNarration}
            onOpenJsonInspector={() => setIsJsonModalOpen(true)}
          />
        </div>
      </main>

      {/* Global Footer */}
      <footer className="w-full border-t border-slate-800/60 py-4 px-6 text-center text-xs sm:text-sm font-mono text-slate-400 bg-slate-950/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 CifraFlow Financiero & Tech World • Google AI Studio EdTech Engine</span>
          <div className="flex items-center gap-3">
            <BcvRateBadge compact={true} showTime={true} />
            <span>•</span>
            <span>Español Latino (TTS)</span>
          </div>
        </div>
      </footer>

      {/* Strict JSON Inspector Modal */}
      <MasterJsonModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        systemState={masterSystemState}
      />
    </div>
  );
}
