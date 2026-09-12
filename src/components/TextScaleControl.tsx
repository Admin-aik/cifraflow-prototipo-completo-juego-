import React from 'react';
import { ZoomIn, ZoomOut, Type, RotateCcw } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';

export type TextScaleLevel = 'normal' | 'large' | 'xlarge';

interface TextScaleControlProps {
  scale: TextScaleLevel;
  onChangeScale: (newScale: TextScaleLevel) => void;
  variant?: 'compact' | 'full';
}

export const TextScaleControl: React.FC<TextScaleControlProps> = ({
  scale,
  onChangeScale,
  variant = 'compact'
}) => {
  const levels: { id: TextScaleLevel; label: string; pct: string; desc: string }[] = [
    { id: 'normal', label: 'A', pct: '100%', desc: 'Texto Estándar' },
    { id: 'large', label: 'A+', pct: '115%', desc: 'Texto Grande (Lectura Fácil)' },
    { id: 'xlarge', label: 'A++', pct: '130%', desc: 'Texto Muy Grande (Máxima Legibilidad)' },
  ];

  const handleSetScale = (newScale: TextScaleLevel) => {
    ttsAudio.playSound('switch');
    onChangeScale(newScale);
  };

  const handleStep = (direction: 'up' | 'down') => {
    ttsAudio.playSound('switch');
    if (direction === 'up') {
      if (scale === 'normal') onChangeScale('large');
      else if (scale === 'large') onChangeScale('xlarge');
    } else {
      if (scale === 'xlarge') onChangeScale('large');
      else if (scale === 'large') onChangeScale('normal');
    }
  };

  const currentLevel = levels.find(l => l.id === scale) || levels[0];

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
        <div className="flex items-center gap-1 px-1.5 text-slate-400" title="Tamaño de texto para lectura">
          <Type className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-[10px] font-mono hidden sm:inline text-slate-300">Lectura:</span>
        </div>

        <button
          type="button"
          onClick={() => handleStep('down')}
          disabled={scale === 'normal'}
          title="Reducir tamaño de letra"
          aria-label="Reducir tamaño de letra"
          className="p-1 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-300 hover:text-white transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <ZoomOut className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-0.5 px-1 font-mono text-xs">
          {levels.map((lvl) => {
            const isActive = scale === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => handleSetScale(lvl.id)}
                title={`${lvl.desc} (${lvl.pct})`}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(0,243,255,0.4)]'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800'
                }`}
              >
                {lvl.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => handleStep('up')}
          disabled={scale === 'xlarge'}
          title="Ampliar tamaño de letra para facilitar lectura"
          aria-label="Ampliar tamaño de letra"
          className="p-1 rounded-lg hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer disabled:cursor-not-allowed"
        >
          <ZoomIn className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  // Full Expanded Bar
  return (
    <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-lg">
      <div className="flex items-center gap-2 text-slate-200">
        <Type className="w-4 h-4 text-cyan-400" />
        <div>
          <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
            <span>Accesibilidad de Lectura</span>
            <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 text-[10px] border border-cyan-500/30">
              {currentLevel.pct}
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Ajusta el tamaño tipográfico de casos de estudio, enunciados y preguntas.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {levels.map((lvl) => {
          const isActive = scale === lvl.id;
          return (
            <button
              key={lvl.id}
              type="button"
              onClick={() => handleSetScale(lvl.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {lvl.label} {lvl.pct}
            </button>
          );
        })}
        {scale !== 'normal' && (
          <button
            type="button"
            onClick={() => handleSetScale('normal')}
            title="Restablecer tamaño normal"
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
