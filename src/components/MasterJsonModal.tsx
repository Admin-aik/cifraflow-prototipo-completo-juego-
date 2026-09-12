import React, { useState } from 'react';
import { MasterSystemState } from '../types';
import { Terminal, Copy, Check, X, FileJson, Sparkles } from 'lucide-react';
import { ttsAudio } from '../services/ttsAudio';

interface MasterJsonModalProps {
  isOpen: boolean;
  onClose: () => void;
  systemState: MasterSystemState;
}

export const MasterJsonModal: React.FC<MasterJsonModalProps> = ({
  isOpen,
  onClose,
  systemState
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(systemState, null, 2);

  const handleCopy = () => {
    ttsAudio.playSound('click');
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-slate-950 border-2 border-cyan-500/50 shadow-[0_0_60px_rgba(0,243,255,0.2)] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileJson className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-mono">
                  JSON Estricto Maestro — Google AI Studio
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono">
                  {systemState.system_phase}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Estructura compatible con System Prompt Maestro & Gemini 1.5 Pro
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,243,255,0.3)]"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-950" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '¡Copiado!' : 'Copiar JSON'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* JSON Code Box */}
        <div className="flex-1 p-4 overflow-y-auto bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed">
          <pre className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-cyan-200 overflow-x-auto whitespace-pre">
            {jsonString}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>audio_narration sincronizado en Español Latino</span>
          </div>
          <span>Schema: Strict Output JSON</span>
        </div>
      </div>
    </div>
  );
};
