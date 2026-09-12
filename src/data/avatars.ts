import { Avatar } from '../types';
import kaelImg from '../assets/images/avatar_kael_cartoon_1788896525903.jpg';
import mayaImg from '../assets/images/avatar_maya_cartoon_1788896538427.jpg';
import danteImg from '../assets/images/avatar_dante_cartoon_1788896565859.jpg';
import carlosImg from '../assets/images/avatar_carlos_1789226649341.jpg';

export const AVATARS: Avatar[] = [
  {
    id: "kael_rivera",
    name: "Jorge",
    title: "Operador de Accesos & Nómina",
    perk: "+15% Efectividad en Operaciones (Finanzas & Validación de Identidades)",
    stats: { logica: 92, auditoria: 84, respuesta: 88, criptografia: 80 },
    theme_color: "#00f3ff",
    accent_glow: "rgba(0, 243, 255, 0.4)",
    audio_quote: "Iniciando sesión. Soy Jorge. Configuremos tus accesos y tu flujo financiero.",
    role_focus: "Operaciones Financieras, Control de Nómina y Autenticación FIDO2",
    description: "Operador táctico de alta precisión en transacciones bancarias y gobernanza de accesos. Jorge aplica un +15% de efectividad en operaciones financieras y blindaje de identidad.",
    multiplier: 1.15,
    specialty_modules: ["banca", "ciberseguridad"],
    image_url: kaelImg
  },
  {
    id: "maya_chen",
    name: "Ircar",
    title: "Especialista Cloud & Optimización Financiera",
    perk: "Radar Anti-Gastos & Escudo Cloud (Detección de Fugas Presupuestarias y Riesgos)",
    stats: { logica: 95, auditoria: 86, respuesta: 90, criptografia: 94 },
    theme_color: "#ff007f",
    accent_glow: "rgba(255, 0, 127, 0.4)",
    audio_quote: "Soy Ircar. Optimicemos recursos y blindemos nuestra infraestructura financiera.",
    role_focus: "Arquitectura Cloud, Eficiencia de Costos y Resiliencia Digital",
    description: "Estratega tecnológica y de finanzas digitales. Su radar anti-gastos neutraliza pérdidas monetarias y vectores de riesgo en cualquier plataforma.",
    multiplier: 1.15,
    specialty_modules: ["emprendimiento", "ciberseguridad"],
    image_url: mayaImg
  },
  {
    id: "dante_albornoz",
    name: "Iván",
    title: "Auditor Digital & Detective de Contratos",
    perk: "Monóculo Scanner (Doble Puntaje en Auditoría, Ciberseguridad & Letra Pequeña)",
    stats: { logica: 94, auditoria: 99, respuesta: 78, criptografia: 91 },
    theme_color: "#10b981",
    accent_glow: "rgba(16, 185, 129, 0.4)",
    audio_quote: "Iván en línea. Auditando contrato y matriz de riesgo. Ningún detalle se nos escapa.",
    role_focus: "Comprensión Crítica, Detección de Cláusulas Abusivas y SBOM Forense",
    description: "Auditor forense meticuloso e implacable. Su monóculo scanner detecta cláusulas bancarias abusivas, trampas en contratos y dependencias comprometidas.",
    multiplier: 1.25,
    specialty_modules: ["comprension", "banca", "ciberseguridad"],
    image_url: danteImg
  },
  {
    id: "valeria_montero",
    name: "Carlos",
    title: "Estratega Presupuestario & Emprendimiento",
    perk: "Reactor 50/30/20 (+20% Rendimiento en Inversiones & Bolsa)",
    stats: { logica: 90, auditoria: 88, respuesta: 96, criptografia: 85 },
    theme_color: "#fbbf24",
    accent_glow: "rgba(251, 191, 36, 0.4)",
    audio_quote: "Carlos al mando. El crecimiento exponencial requiere una estrategia rigurosa de presupuesto.",
    role_focus: "Planificación Presupuestaria 50/30/20, Portafolios BVC y Emprendimiento",
    description: "Estratega de élite en maximización de capital y asignación presupuestaria. Su reactor 50/30/20 incrementa en +20% los rendimientos en decisiones de inversión y bolsa.",
    multiplier: 1.20,
    specialty_modules: ["emprendimiento", "bvc"],
    image_url: carlosImg
  }
];
