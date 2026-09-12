import React, { useState } from 'react';
import { GameEngineState } from '../types';
import { Terminal, Copy, Check, X, FileJson, Sparkles } from 'lucide-react';

interface JsonEngineModalProps {
  isOpen: boolean;
  onClose: () => void;
  engineState: GameEngineState;
}

export const JsonEngineModal: React.FC<JsonEngineModalProps> = ({
  isOpen,
  onClose,
  engineState
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(engineState, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,243,255,0.25)] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-cyan-500/20 bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Chakra_Petch'] font-bold text-sm sm:text-base text-white">
                  Motor Lógico // Salida JSON Estricta
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {engineState.screen_type}
                </span>
              </div>
              <p className="text-[11px] font-mono text-slate-400">
                Estado sincrónico del protocolo del juego educativo Cifra Flow
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all border ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                  : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar JSON'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Audio Narration Quick View */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-900/40 border-b border-slate-800 flex items-start gap-2 text-xs">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-slate-300 leading-snug">
            <span className="text-amber-300 font-bold font-mono">audio_narration (TTS Español Latino): </span>
            <span className="italic opacity-90">&ldquo;{engineState.audio_narration}&rdquo;</span>
          </div>
        </div>

        {/* JSON Code Viewer */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950/90 font-['JetBrains_Mono'] text-xs">
          <pre className="text-cyan-300 leading-relaxed overflow-x-auto selection:bg-cyan-900">
            {jsonString}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Schema: STRICT_JSON_EDTECH_V2</span>
          <span>Tokens: ~{Math.round(jsonString.length / 4)}</span>
        </div>
      </div>
    </div>
  );
};
