import React, { useState } from 'react';
import logoImg from '../assets/images/cifraflow_logo_1789224845998.jpg';

interface CifraFlowLogoProps {
  variant?: 'emblem' | 'full' | 'hero';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const CifraFlowLogo: React.FC<CifraFlowLogoProps> = ({
  variant = 'emblem',
  size = 'md',
  className = '',
  showText = false,
}) => {
  const [imgError, setImgError] = useState(false);

  // Size configurations
  const sizeMap = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 sm:w-11 sm:h-11 rounded-xl',
    lg: 'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl',
    xl: 'w-24 h-24 sm:w-28 sm:h-28 rounded-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Infinity Circuit Emblem */}
      <div
        className={`relative overflow-hidden flex-shrink-0 bg-slate-950 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,243,255,0.25)] flex items-center justify-center ${sizeMap[size]}`}
      >
        {!imgError ? (
          <img
            src={logoImg}
            alt="Logotipo CifraFlow"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        ) : (
          /* High Fidelity Infinity Vector Fallback */
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full p-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cifraFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f3ff" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#e879f9" />
              </linearGradient>
            </defs>
            {/* Infinity loop path */}
            <path
              d="M30 15 C18 15 10 21 10 30 C10 39 18 45 30 45 C42 45 48 35 50 30 C52 35 58 45 70 45 C82 45 90 39 90 30 C90 21 82 15 70 15 C58 15 52 25 50 30 C48 25 42 15 30 15 Z"
              stroke="url(#cifraFlowGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Circuit Nodes */}
            <circle cx="20" cy="23" r="2" fill="#00f3ff" />
            <circle cx="20" cy="37" r="2" fill="#00f3ff" />
            <circle cx="80" cy="23" r="2" fill="#f472b6" />
            <circle cx="80" cy="37" r="2" fill="#f472b6" />
            <circle cx="50" cy="30" r="2.5" fill="#ffffff" />
          </svg>
        )}
      </div>

      {/* Optional Typography Component */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1 leading-none">
            <span className="font-['Chakra_Petch'] font-black tracking-wider text-lg sm:text-xl text-white">
              CIFRA
            </span>
            <span className="font-['Chakra_Petch'] font-black tracking-wider text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
              FLOW
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.25em] text-slate-300 uppercase mt-0.5">
            FINANCIERO
          </span>
        </div>
      )}
    </div>
  );
};
