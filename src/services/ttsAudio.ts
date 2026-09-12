// TTS and Audio Engine in Latin American Spanish & Cyber SFX

type SoundType = 'click' | 'success' | 'alert' | 'gameover' | 'fanfare' | 'switch';

class TtsAudioEngine {
  private isMuted: boolean = false;
  private isSpeaking: boolean = false;
  private listeners: Array<(speaking: boolean) => void> = [];
  private mutedListeners: Array<(muted: boolean) => void> = [];
  private audioCtx: AudioContext | null = null;
  private cachedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.resolveLatinVoice();
      };
    }
  }

  private initAudioCtx() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopSpeaking();
    }
    this.mutedListeners.forEach(l => l(this.isMuted));
    return this.isMuted;
  }

  public subscribeSpeaking(callback: (speaking: boolean) => void): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  public subscribeMuted(callback: (muted: boolean) => void): () => void {
    this.mutedListeners.push(callback);
    return () => {
      this.mutedListeners = this.mutedListeners.filter(l => l !== callback);
    };
  }

  private setSpeaking(state: boolean) {
    this.isSpeaking = state;
    this.listeners.forEach(l => l(state));
  }

  private resolveLatinVoice(): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prioritize Latin American Spanish voices
    const latinMatch = voices.find(v => 
      (v.lang.toLowerCase().includes('es-419') ||
       v.lang.toLowerCase().includes('es-mx') ||
       v.lang.toLowerCase().includes('es-us') ||
       v.lang.toLowerCase().includes('es-ve') ||
       v.lang.toLowerCase().includes('es-co'))
    );
    if (latinMatch) {
      this.cachedVoice = latinMatch;
      return latinMatch;
    }

    // Fallback to any Spanish voice
    const genericSpanish = voices.find(v => v.lang.toLowerCase().startsWith('es'));
    if (genericSpanish) {
      this.cachedVoice = genericSpanish;
      return genericSpanish;
    }

    return null;
  }

  public stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.setSpeaking(false);
    }
  }

  public speakLatinSpanish(text: string, force: boolean = false) {
    if (this.isMuted && !force) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (!text || text.trim().length === 0) return;

    this.stopSpeaking();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = this.cachedVoice || this.resolveLatinVoice();
      if (voice) {
        utterance.voice = voice;
      }
      utterance.lang = 'es-419';
      utterance.rate = 1.02; // Cadencia pedagógica fluida
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        this.setSpeaking(true);
      };

      utterance.onend = () => {
        this.setSpeaking(false);
      };

      utterance.onerror = () => {
        this.setSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      this.setSpeaking(false);
    }
  }

  public playSound(type: SoundType) {
    if (this.isMuted) return;
    try {
      this.initAudioCtx();
      if (!this.audioCtx) return;

      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.04);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'switch') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(780, now + 0.08);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === 'success') {
        // Futuristic double chime
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + i * 0.08);
          gain.gain.setValueAtTime(0.1, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.26);
        });
      } else if (type === 'alert') {
        // Dissonant penalty zap
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.18);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.19);
      } else if (type === 'gameover') {
        // Level completion fanfare
        const notes = [440, 554.37, 659.25, 880];
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          gain.gain.setValueAtTime(0.14, now + idx * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.36);
        });
      } else if (type === 'fanfare') {
        // Grand victory chord sequence
        const chords = [
          [523.25, 659.25, 783.99],
          [587.33, 739.99, 880],
          [659.25, 830.61, 987.77],
          [1046.50, 1318.51, 1567.98]
        ];
        chords.forEach((chord, cIdx) => {
          chord.forEach(freq => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + cIdx * 0.2);
            gain.gain.setValueAtTime(0.12, now + cIdx * 0.2);
            gain.gain.exponentialRampToValueAtTime(0.001, now + cIdx * 0.2 + 0.45);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + cIdx * 0.2);
            osc.stop(now + cIdx * 0.2 + 0.46);
          });
        });
      }
    } catch {
      // AudioContext unavailable or blocked
    }
  }
}

export const ttsAudio = new TtsAudioEngine();
