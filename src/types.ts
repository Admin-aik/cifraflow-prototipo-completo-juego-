export type SystemPhase = 
  | "LOGIN" 
  | "AVATAR_SELECTION" 
  | "MODULE_SELECTION" 
  | "GAMEPLAY" 
  | "GAME_OVER_LEVEL" 
  | "FIN_DE_LA_MISION";

export interface StudentProfile {
  student_name: string;
  student_id: string;
  institution: string;
  section: string;
}

// User profile returned by the NestJS auth backend (`/api/auth/...`).
export interface AuthUser {
  id: string;
  email: string;
  firebaseUid?: string;
  firstName?: string | null;
  lastName?: string | null;
  displayName?: string | null;
  roles?: string[];
  isActive?: boolean;
  emailVerified?: boolean;
  avatarUrl?: string | null;
  [key: string]: unknown;
}

export interface AuthSession {
  token: string;
  refreshToken?: string;
  user: AuthUser;
}

export interface AvatarStats {
  logica: number;
  auditoria: number;
  respuesta: number;
  criptografia: number;
}

export interface Avatar {
  id: string;
  name: string;
  title: string;
  perk: string;
  theme_color: string;
  accent_glow: string;
  audio_quote: string;
  role_focus: string;
  description: string;
  stats: AvatarStats;
  image_url?: string;
  multiplier?: number; // e.g., 1.15 for Jorge/Ircar, 1.20 for Carlos, 1.25 for Iván
  specialty_modules?: string[];
}

export interface MissionOption {
  id: number;
  text: string;
  feedback_immediate: string;
  points_delta: number; // Positive (e.g. +100) or Negative (e.g. -25)
  reward?: {
    puntos: number;
    insignia?: string;
  };
}

export interface GameplayMission {
  id: number;
  module_id: string;
  module_name: string;
  level_number: number;
  level_title: string;
  title: string;
  source_text: string;
  question: string;
  options: MissionOption[];
  correct_option_id: number;
  bonus_avatar_id?: string;
  bonus_tag?: string;
  bcv_rate_context?: string;
}

export interface ModuleDefinition {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  theme_color: string;
  icon_name: string;
  total_levels: number;
  missions: GameplayMission[];
}

export interface RightHudPanelState {
  visible: boolean;
  position: "TOP_RIGHT";
  student_info: string;
  student_id: string;
  institution: string;
  active_avatar: string;
  avatar_theme: string;
  puntos_totales_acumulados: number;
  puntos_nivel_actual: number;
  penalizaciones_nivel_actual: number;
  racha_aciertos: number;
  nivel_actual: string;
  bcv_rate_active: string;
}

export interface LevelCompletionData {
  trigger_game_over: boolean;
  banner_title: string;
  module_name: string;
  completed_level_number: number;
  score_summary: {
    puntos_ganados_nivel: number;
    penalizaciones_nivel: number;
    puntos_totales_acumulados: number;
    racha_maxima: number;
  };
  next_level_unlocked: string;
  next_module_id?: string;
  action_button: string;
}

export interface MissionFinalCompletionData {
  trigger_fin_mision: boolean;
  banner_title: string;
  final_score_card: {
    puntuacion_general: number;
    rango_alcanzado: string;
    precision_respuestas: string;
    total_aciertos: number;
    total_fallos: number;
    modulos_completados: number;
  };
  medals: Array<{
    id: string;
    name: string;
    description: string;
    color: string;
    unlocked: boolean;
  }>;
}

export interface MasterSystemState {
  system_phase: SystemPhase;
  audio_narration: string;
  login_screen: {
    show_login: boolean;
    fields: string[];
    student_profile?: StudentProfile;
  };
  avatar_selection_screen: {
    show_selection: boolean;
    avatars: Avatar[];
  };
  right_hud_panel: RightHudPanelState;
  main_gameplay_modal: {
    title: string;
    module_context: string;
    source_text: string;
    question: string;
    options: MissionOption[];
  } | null;
  level_completion_screen: LevelCompletionData;
  mission_final_completion: MissionFinalCompletionData;
}

export interface Mission {
  id: number;
  pilar_id?: string;
  pilar_name?: string;
  pillar_id?: string;
  title: string;
  description?: string;
  security_layer?: string;
  myth_vs_reality?: {
    creencia_popular: string;
    realidad_avanzada: string;
  };
  source_text?: string;
  challenge_type?: string;
  telemetry_snippet?: string;
  question: string;
  options: Array<{
    id: number;
    text: string;
    is_correct?: boolean;
    points_delta?: number;
    feedback_immediate: string;
    reward?: {
      puntos: number;
      insignia?: string;
    };
    [key: string]: any;
  }>;
  correct_option_id: number;
  bonus_avatar_id?: string;
  bonus_points?: number;
  [key: string]: any;
}

export interface GameEngineState {
  player: {
    alias: string;
    avatar: Avatar;
    puntos_defensa: number;
    racha_aciertos: number;
  };
  metrics: {
    respuestas_afirmativas: number;
    respuestas_negativas: number;
    precision_porcentaje: number;
  };
  world_state: {
    amenaza_global: string;
    pilares_desbloqueados: string[];
    threat_level: string;
    eventos_recientes: string[];
  };
}

