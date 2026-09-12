import { ModuleDefinition, GameplayMission } from '../types';
import { BCV_RATE_STRING } from './bcvServiceFallback';
import { COMPRENSION_15_CHALLENGES } from './challenges/comprension';
import { BANCA_15_CHALLENGES } from './challenges/banca';
import { EMPRENDIMIENTO_15_CHALLENGES } from './challenges/emprendimiento';
import { BVC_15_CHALLENGES } from './challenges/bvc';
import { CIBERSEGURIDAD_15_CHALLENGES } from './challenges/ciberseguridad';

export { BCV_RATE_STRING };
export { COMPRENSION_15_CHALLENGES };
export { BANCA_15_CHALLENGES };
export { EMPRENDIMIENTO_15_CHALLENGES };
export { BVC_15_CHALLENGES };
export { CIBERSEGURIDAD_15_CHALLENGES };

// Campaña maestra integrada de 15 desafíos (3 de cada vector temático)
export const ALL_15_CHALLENGES: GameplayMission[] = [
  // 1. Comprensión Lectora - Cláusulas Abusivas
  {
    ...COMPRENSION_15_CHALLENGES[0],
    level_number: 1,
    level_title: "Desafío 1 de 15: Detección de Cláusulas Abusivas"
  },
  // 2. Comprensión Lectora - Fake News
  {
    ...COMPRENSION_15_CHALLENGES[1],
    level_number: 2,
    level_title: "Desafío 2 de 15: Desinformación y Fake News Financieras"
  },
  // 3. Comprensión Lectora - Letra Pequeña
  {
    ...COMPRENSION_15_CHALLENGES[2],
    level_number: 3,
    level_title: "Desafío 3 de 15: Letra Pequeña y Costo Anual (CAT/TEA)"
  },
  // 4. Banca - Identidad KYC
  {
    ...BANCA_15_CHALLENGES[0],
    level_number: 4,
    level_title: "Desafío 4 de 15: Requisitos de Identidad y Biometría Facial"
  },
  // 5. Banca - Pago Móvil Seguro
  {
    ...BANCA_15_CHALLENGES[1],
    level_number: 5,
    level_title: "Desafío 5 de 15: Pago Móvil Seguro y Tasa Oficial BCV"
  },
  // 6. Banca - Conciliación e IGTF
  {
    ...BANCA_15_CHALLENGES[2],
    level_number: 6,
    level_title: "Desafío 6 de 15: Conciliación, IGTF y Límites SUDEBAN"
  },
  // 7. Emprendimiento - Punto de Equilibrio
  {
    ...EMPRENDIMIENTO_15_CHALLENGES[0],
    level_number: 7,
    level_title: "Desafío 7 de 15: Estructura de Costos y Punto de Equilibrio"
  },
  // 8. Emprendimiento - Regla 50/30/20
  {
    ...EMPRENDIMIENTO_15_CHALLENGES[1],
    level_number: 8,
    level_title: "Desafío 8 de 15: La Regla 50/30/20 y Fondo de Emergencia"
  },
  // 9. Emprendimiento - Optimización Cloud y SENIAT
  {
    ...EMPRENDIMIENTO_15_CHALLENGES[2],
    level_number: 9,
    level_title: "Desafío 9 de 15: Optimización de Costos Cloud & Fiscalidad"
  },
  // 10. BVC - Renta Variable
  {
    ...BVC_15_CHALLENGES[0],
    level_number: 10,
    level_title: "Desafío 10 de 15: Renta Variable y Acciones en la BVC"
  },
  // 11. BVC - Casas de Bolsa
  {
    ...BVC_15_CHALLENGES[1],
    level_number: 11,
    level_title: "Desafío 11 de 15: Casas de Bolsa y Diversificación"
  },
  // 12. BVC - Papeles Comerciales Indexados a Tasa BCV
  {
    ...BVC_15_CHALLENGES[2],
    level_number: 12,
    level_title: "Desafío 12 de 15: Papeles Comerciales Indexados a Tasa BCV"
  },
  // 13. Ciberseguridad - AiTM vs Passkeys
  {
    ...CIBERSEGURIDAD_15_CHALLENGES[0],
    level_number: 13,
    level_title: "Desafío 13 de 15: Ataques AiTM y Robo de Sesiones"
  },
  // 14. Ciberseguridad - Zero Trust
  {
    ...CIBERSEGURIDAD_15_CHALLENGES[1],
    level_number: 14,
    level_title: "Desafío 14 de 15: Arquitectura Zero Trust y Tokens Bancarios"
  },
  // 15. Ciberseguridad - Anti-Vishing con IA
  {
    ...CIBERSEGURIDAD_15_CHALLENGES[2],
    level_number: 15,
    level_title: "Desafío 15 de 15: Vishing, Deepfakes y Verificación Fuera de Banda"
  }
];

// Alias de retrocompatibilidad
export const ALL_10_CHALLENGES = ALL_15_CHALLENGES;

export const MASTER_15_CHALLENGES_MODULE: ModuleDefinition = {
  id: "todos_los_15_desafios",
  name: "Los 15 Desafíos de CifraFlow",
  subtitle: "Simulación integral completa: 15 casos prácticos continuos de Lectura, Banca, Emprendimiento, Bolsa BVC y Ciberseguridad",
  badge: "15 Desafíos Integrados",
  theme_color: "#00f3ff",
  icon_name: "Sparkles",
  total_levels: 15,
  missions: ALL_15_CHALLENGES
};

export const MASTER_10_CHALLENGES_MODULE = MASTER_15_CHALLENGES_MODULE;

export const GAME_MODULES: ModuleDefinition[] = [
  MASTER_15_CHALLENGES_MODULE,
  {
    id: "comprension",
    name: "Comprensión Lectora & Contratos",
    subtitle: "Auditoría de letra pequeña, contratos SaaS, cláusulas abusivas, pagarés y fake news",
    badge: "Práctica 1 (15 Desafíos)",
    theme_color: "#34d399",
    icon_name: "BookOpen",
    total_levels: 15,
    missions: COMPRENSION_15_CHALLENGES
  },
  {
    id: "banca",
    name: "Primera Cuenta de Banco & Fintech",
    subtitle: "Apertura BDV/Plaza, Pago Móvil, Tasa Oficial BCV, EMV y conciliación",
    badge: "Práctica 2 (15 Desafíos)",
    theme_color: "#00f3ff",
    icon_name: "Landmark",
    total_levels: 15,
    missions: BANCA_15_CHALLENGES
  },
  {
    id: "emprendimiento",
    name: "Emprendimiento & Flujo de Caja",
    subtitle: "Punto de equilibrio, regla 50/30/20, pricing, costos cloud y SENIAT",
    badge: "Práctica 3 (15 Desafíos)",
    theme_color: "#10b981",
    icon_name: "TrendingUp",
    total_levels: 15,
    missions: EMPRENDIMIENTO_15_CHALLENGES
  },
  {
    id: "bvc",
    name: "Bolsa de Valores de Caracas (BVC)",
    subtitle: "Renta fija indexada a tasa BCV, acciones, casas de bolsa, CVV y SUNAVAL",
    badge: "Práctica 4 (15 Desafíos)",
    theme_color: "#fbbf24",
    icon_name: "LineChart",
    total_levels: 15,
    missions: BVC_15_CHALLENGES
  },
  {
    id: "ciberseguridad",
    name: "Ciberseguridad Real & Identidad",
    subtitle: "AiTM, Passkeys FIDO2, Zero Trust, anti-vishing IA, respaldos 3-2-1 y WAF",
    badge: "Práctica 5 (15 Desafíos)",
    theme_color: "#00f3ff",
    icon_name: "ShieldAlert",
    total_levels: 15,
    missions: CIBERSEGURIDAD_15_CHALLENGES
  }
];
