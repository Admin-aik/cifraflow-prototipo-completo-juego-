import React from 'react';
import { X, AlertTriangle, ShieldCheck, ArrowRight, ShieldAlert } from 'lucide-react';

interface MythVsRealityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MythVsRealityDrawer: React.FC<MythVsRealityDrawerProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const comparisons = [
    {
      mythTitle: "Mito 1: Contraseñas Complejas",
      mythDesc: "La creencia de que exigir mayúsculas, números y cambios forzados cada mes protege el acceso de los empleados.",
      realityTitle: "Defensa de Identidad & Passkeys FIDO2",
      realityDesc: "El 80% de ataques son phishing o malware infostealer que roban la contraseña sin importar su complejidad. La ciberseguridad real utiliza MFA resistente a phishing (FIDO2), biometría y evaluación de contexto continuo.",
      accent: "#00f3ff"
    },
    {
      mythTitle: "Mito 2: Antivirus de Escritorio",
      mythDesc: "La creencia de que si un ejecutable o fichero pasa el análisis de firmas del antivirus, el equipo es invulnerable.",
      realityTitle: "Ingeniería de Detección & SBOM",
      realityDesc: "Los ciberdelincuentes modernos usan técnicas Living-off-the-Land (LOLBins) con ejecutables legítimos del sistema y envenenan paquetes en la cadena de suministro de software donde el antivirus no tiene visibilidad.",
      accent: "#34d399"
    },
    {
      mythTitle: "Mito 3: Firewall Perimetral de Red",
      mythDesc: "La creencia de que una frontera dura exterior y una VPN para empleados garantizan la seguridad de la intranet.",
      realityTitle: "Acceso Zero Trust & Seguridad Cloud CNAPP",
      realityDesc: "Una vez que un atacante compromete un equipo remoto en la VPN, se mueve libremente por toda la red interna. Zero Trust asume la red comprometida y microsegmenta cada servicio individual.",
      accent: "#ff007f"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,243,255,0.2)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cyan-500/20 bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/40">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-['Chakra_Petch'] font-bold text-base text-white">
                Mito de la Columna Básica vs. Ciberseguridad Real
              </h2>
              <p className="text-xs text-slate-400">
                Por qué las herramientas tradicionales ya no son una defensa suficiente
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparisons list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {comparisons.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              {/* Myth */}
              <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-red-400 uppercase font-mono mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  {item.mythTitle}
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {item.mythDesc}
                </p>
              </div>

              <div className="flex justify-center -my-1 text-slate-500">
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Reality */}
              <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-cyan-400 uppercase font-mono mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  {item.realityTitle}
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {item.realityDesc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-900/90 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-['Chakra_Petch'] text-xs transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
