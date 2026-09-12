import React, { useEffect, useRef, useState, useCallback } from 'react';
import { PILLARS_LIST } from '../data/pillars';
import { RotateCw, Eye, ShieldAlert, Sparkles, Compass } from 'lucide-react';

interface CyberSpaceCanvasProps {
  unlockedPillars: string[];
  activePillarId?: string;
  onSelectPillar?: (pillarId: string) => void;
  accentColor?: string;
  threatLevel: "Bajo" | "Moderado" | "Crítico";
}

export const CyberSpaceCanvas: React.FC<CyberSpaceCanvasProps> = ({
  unlockedPillars,
  activePillarId,
  onSelectPillar,
  accentColor = "#00f3ff",
  threatLevel
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'both' | 'real_tower' | 'basic_column'>('both');

  const rotationRef = useRef({ x: 0.28, y: -0.45 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  // Handle pointer drag for 3D orbital rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMousePosRef.current.x;
    const deltaY = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    rotationRef.current.y += deltaX * 0.008;
    rotationRef.current.x = Math.max(-0.4, Math.min(0.7, rotationRef.current.x + deltaY * 0.008));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2 + 30;

    ctx.clearRect(0, 0, width, height);

    // Deep Cyber-Space background gradient
    const bgGrad = ctx.createRadialGradient(centerX, centerY - 60, 50, centerX, centerY, Math.max(width, height) * 0.7);
    bgGrad.addColorStop(0, '#0a1024');
    bgGrad.addColorStop(0.5, '#050814');
    bgGrad.addColorStop(1, '#020308');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Perspective Projection helpers
    const rotX = rotationRef.current.x;
    const rotY = rotationRef.current.y;
    const fov = 420;

    const project3D = (x: number, y: number, z: number) => {
      // Rotate around Y axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Rotate around X axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const depth = z2 + 650;
      const scale = fov / Math.max(depth, 100);
      const projX = centerX + x1 * scale;
      const projY = centerY + y2 * scale;

      return { x: projX, y: projY, scale, depth };
    };

    // 1. Draw Cyber Grid Floor
    const gridSize = 10;
    const gridSpacing = 45;
    const gridY = 160;

    ctx.lineWidth = 1;
    for (let i = -gridSize; i <= gridSize; i++) {
      const p1 = project3D(i * gridSpacing, gridY, -gridSize * gridSpacing);
      const p2 = project3D(i * gridSpacing, gridY, gridSize * gridSpacing);

      ctx.strokeStyle = i === 0 ? 'rgba(0, 243, 255, 0.4)' : 'rgba(0, 243, 255, 0.08)';
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      const p3 = project3D(-gridSize * gridSpacing, gridY, i * gridSpacing);
      const p4 = project3D(gridSize * gridSpacing, gridY, i * gridSpacing);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }

    // Energy lines floating in the background
    const time = Date.now() * 0.0015;
    ctx.lineWidth = 1.5;
    for (let l = 0; l < 4; l++) {
      const angle = (l / 4) * Math.PI * 2 + time * 0.3;
      const r = 220 + Math.sin(time + l) * 20;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const topP = project3D(x, -240, z);
      const botP = project3D(x, 150, z);

      const conduitGrad = ctx.createLinearGradient(topP.x, topP.y, botP.x, botP.y);
      conduitGrad.addColorStop(0, 'rgba(0, 243, 255, 0)');
      conduitGrad.addColorStop(0.5, l % 2 === 0 ? 'rgba(255, 0, 127, 0.25)' : 'rgba(0, 243, 255, 0.25)');
      conduitGrad.addColorStop(1, 'rgba(0, 243, 255, 0)');
      ctx.strokeStyle = conduitGrad;
      ctx.beginPath();
      ctx.moveTo(topP.x, topP.y);
      ctx.lineTo(botP.x, botP.y);
      ctx.stroke();
    }

    // 2. LEFT SIDE: "Columna Básica" (Mito Común)
    if (viewMode === 'both' || viewMode === 'basic_column') {
      const colX = -180;
      const colZ = 0;
      const baseWidth = 55;
      const baseDepth = 55;

      // 3 Blocks: Contraseñas, Antivirus, Firewall
      const basicLayers = [
        { name: "3. Firewall", sub: "Muro perimetral estático", y: -60, color: "#ef4444" },
        { name: "2. Antivirus", sub: "Firmas locales de ficheros", y: 10, color: "#f97316" },
        { name: "1. Contraseñas", sub: "Cadenas de texto plano", y: 80, color: "#eab308" },
      ];

      // Draw cracked foundation
      const foundationP1 = project3D(colX - baseWidth, 140, colZ - baseDepth);
      const foundationP2 = project3D(colX + baseWidth, 140, colZ - baseDepth);
      const foundationP3 = project3D(colX + baseWidth, 140, colZ + baseDepth);
      const foundationP4 = project3D(colX - baseWidth, 140, colZ + baseDepth);

      ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(foundationP1.x, foundationP1.y);
      ctx.lineTo(foundationP2.x, foundationP2.y);
      ctx.lineTo(foundationP3.x, foundationP3.y);
      ctx.lineTo(foundationP4.x, foundationP4.y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Draw each basic block
      basicLayers.forEach((layer) => {
        const h = 45;
        const topY = layer.y - h;
        const botY = layer.y;

        const cornersTop = [
          project3D(colX - baseWidth * 0.8, topY, colZ - baseDepth * 0.8),
          project3D(colX + baseWidth * 0.8, topY, colZ - baseDepth * 0.8),
          project3D(colX + baseWidth * 0.8, topY, colZ + baseDepth * 0.8),
          project3D(colX - baseWidth * 0.8, topY, colZ + baseDepth * 0.8),
        ];

        const cornersBot = [
          project3D(colX - baseWidth * 0.8, botY, colZ - baseDepth * 0.8),
          project3D(colX + baseWidth * 0.8, botY, colZ - baseDepth * 0.8),
          project3D(colX + baseWidth * 0.8, botY, colZ + baseDepth * 0.8),
          project3D(colX - baseWidth * 0.8, botY, colZ + baseDepth * 0.8),
        ];

        // Draw block sides
        ctx.fillStyle = 'rgba(255, 70, 70, 0.12)';
        ctx.strokeStyle = 'rgba(255, 90, 90, 0.6)';
        ctx.lineWidth = 1;

        // Front Face
        ctx.beginPath();
        ctx.moveTo(cornersTop[2].x, cornersTop[2].y);
        ctx.lineTo(cornersTop[3].x, cornersTop[3].y);
        ctx.lineTo(cornersBot[3].x, cornersBot[3].y);
        ctx.lineTo(cornersBot[2].x, cornersBot[2].y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Right Face
        ctx.beginPath();
        ctx.moveTo(cornersTop[1].x, cornersTop[1].y);
        ctx.lineTo(cornersTop[2].x, cornersTop[2].y);
        ctx.lineTo(cornersBot[2].x, cornersBot[2].y);
        ctx.lineTo(cornersBot[1].x, cornersBot[1].y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Top Face
        ctx.fillStyle = 'rgba(255, 90, 90, 0.2)';
        ctx.beginPath();
        ctx.moveTo(cornersTop[0].x, cornersTop[0].y);
        ctx.lineTo(cornersTop[1].x, cornersTop[1].y);
        ctx.lineTo(cornersTop[2].x, cornersTop[2].y);
        ctx.lineTo(cornersTop[3].x, cornersTop[3].y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Cracks & Breaches simulation
        const crackP = cornersTop[2];
        ctx.strokeStyle = 'rgba(255, 230, 0, 0.8)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(crackP.x - 15, crackP.y + 10);
        ctx.lineTo(crackP.x - 5, crackP.y + 18);
        ctx.lineTo(crackP.x - 12, crackP.y + 28);
        ctx.stroke();

        // Label on block (3 niveles más grande para máxima legibilidad)
        ctx.font = '700 14px "Chakra Petch", sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
        ctx.shadowBlur = 6;
        ctx.fillText(layer.name, (cornersTop[2].x + cornersTop[3].x) / 2, (cornersTop[2].y + cornersBot[2].y) / 2 + 5);
        ctx.shadowBlur = 0;
      });

      // Header tag for Columna Básica (3 niveles más grande)
      const colHeadP = project3D(colX, -115, colZ);
      ctx.font = '700 16px "Chakra Petch", monospace';
      ctx.fillStyle = '#f87171';
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(239, 68, 68, 0.5)';
      ctx.shadowBlur = 10;
      ctx.fillText("COLUMNA BÁSICA", colHeadP.x, colHeadP.y);
      ctx.shadowBlur = 0;
      ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#fca5a5';
      ctx.fillText("(Mito común / 80% vulnerable)", colHeadP.x, colHeadP.y + 18);
    }

    // 3. RIGHT SIDE: "Torre de Defensa Real" (10 Pilares Avanzados)
    if (viewMode === 'both' || viewMode === 'real_tower') {
      const towerX = viewMode === 'real_tower' ? 0 : 160;
      const towerZ = 0;

      // 10 tiers from bottom to top
      const numPillars = PILLARS_LIST.length;
      const layerHeight = 26;
      const startY = 130;

      // Center core conduit
      const baseCenter = project3D(towerX, startY + 15, towerZ);
      const topCenter = project3D(towerX, startY - numPillars * layerHeight - 20, towerZ);

      const coreGrad = ctx.createLinearGradient(baseCenter.x, baseCenter.y, topCenter.x, topCenter.y);
      coreGrad.addColorStop(0, 'rgba(0, 243, 255, 0.4)');
      coreGrad.addColorStop(0.5, 'rgba(255, 0, 127, 0.6)');
      coreGrad.addColorStop(1, 'rgba(251, 191, 36, 0.8)');
      ctx.strokeStyle = coreGrad;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(baseCenter.x, baseCenter.y);
      ctx.lineTo(topCenter.x, topCenter.y);
      ctx.stroke();

      // Render each of the 10 layers
      PILLARS_LIST.forEach((pillar, idx) => {
        const isUnlocked = unlockedPillars.includes(pillar.id) || unlockedPillars.includes(pillar.name);
        const isActive = activePillarId === pillar.id;
        const isHovered = hoveredLayer === pillar.id;
        const layerY = startY - idx * layerHeight;

        const radius = 70 - idx * 2.2;
        const numSegments = 16;

        // Color coding
        const pillarColor = pillar.color;
        const ringAlpha = isUnlocked ? 0.85 : isHovered ? 0.45 : 0.15;

        // Calculate points of the cyber-polygon ring
        const ringPoints: { x: number; y: number; depth: number }[] = [];
        for (let s = 0; s < numSegments; s++) {
          const angle = (s / numSegments) * Math.PI * 2 + (isUnlocked ? time * 0.4 : 0);
          const px = towerX + Math.cos(angle) * radius;
          const pz = towerZ + Math.sin(angle) * radius;
          ringPoints.push(project3D(px, layerY, pz));
        }

        // Draw ring face
        ctx.beginPath();
        ringPoints.forEach((pt, sIdx) => {
          if (sIdx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();

        if (isUnlocked) {
          ctx.fillStyle = `${pillarColor}22`;
          ctx.strokeStyle = pillarColor;
          ctx.lineWidth = isActive ? 3 : 2;
          ctx.shadowColor = pillarColor;
          ctx.shadowBlur = isActive ? 16 : 8;
        } else {
          ctx.fillStyle = 'rgba(30, 41, 59, 0.2)';
          ctx.strokeStyle = isHovered ? 'rgba(0, 243, 255, 0.5)' : 'rgba(100, 116, 139, 0.3)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Energy pulses for unlocked pillars
        if (isUnlocked) {
          const pulseIdx = Math.floor((time * 4 + idx) % numSegments);
          const pulsePt = ringPoints[pulseIdx];
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(pulsePt.x, pulsePt.y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Side indicators & Level text (3 niveles más grande para máxima legibilidad)
        const labelPoint = project3D(towerX + radius + 15, layerY, towerZ);
        ctx.font = isUnlocked ? '700 14px "Chakra Petch", sans-serif' : '600 13px "Chakra Petch", sans-serif';
        ctx.fillStyle = isUnlocked ? (pillarColor === '#ffffff' ? '#38bdf8' : pillarColor) : '#94a3b8';
        ctx.textAlign = 'left';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
        ctx.shadowBlur = 6;

        const labelText = `${pillar.number}. ${pillar.name.length > 22 ? pillar.name.slice(0, 21) + '…' : pillar.name}`;
        ctx.fillText(labelText, labelPoint.x, labelPoint.y + 4);

        if (isUnlocked) {
          ctx.fillStyle = '#34d399';
          ctx.font = '700 11px "JetBrains Mono", monospace';
          ctx.shadowColor = 'rgba(52, 211, 153, 0.6)';
          ctx.shadowBlur = 6;
          ctx.fillText(" [ACTIVO]", labelPoint.x + ctx.measureText(labelText).width + 5, labelPoint.y + 4);
        }
        ctx.shadowBlur = 0;
      });

      // Header tag for Torre de Defensa Real (3 niveles más grande)
      const towerHeadP = project3D(towerX, startY - numPillars * layerHeight - 38, towerZ);
      ctx.font = '700 16px "Chakra Petch", monospace';
      ctx.fillStyle = accentColor;
      ctx.textAlign = 'center';
      ctx.shadowColor = accentColor;
      ctx.shadowBlur = 10;
      ctx.fillText("TORRE DE DEFENSA REAL", towerHeadP.x, towerHeadP.y);
      ctx.shadowBlur = 0;
      ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#93c5fd';
      ctx.fillText(`${unlockedPillars.length}/10 Capas Activas`, towerHeadP.x, towerHeadP.y + 18);
    }

    // Draw HUD Corner Brackets and Matrix Watermark
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.25)';
    ctx.lineWidth = 1.5;
    const pad = 14;
    const len = 20;

    // Top-left
    ctx.beginPath();
    ctx.moveTo(pad, pad + len);
    ctx.lineTo(pad, pad);
    ctx.lineTo(pad + len, pad);
    ctx.stroke();

    // Top-right
    ctx.beginPath();
    ctx.moveTo(width - pad - len, pad);
    ctx.lineTo(width - pad, pad);
    ctx.lineTo(width - pad, pad + len);
    ctx.stroke();

    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(pad, height - pad - len);
    ctx.lineTo(pad, height - pad);
    ctx.lineTo(pad + len, height - pad);
    ctx.stroke();

    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(width - pad - len, height - pad);
    ctx.lineTo(width - pad, height - pad);
    ctx.lineTo(width - pad, height - pad - len);
    ctx.stroke();

    // Telemetry stamp (3 niveles más grande)
    ctx.font = '600 12px "JetBrains Mono", monospace';
    ctx.fillStyle = 'rgba(0, 243, 255, 0.55)';
    ctx.textAlign = 'left';
    ctx.fillText(`3D_GRID // FOV:420 // THREAT:${threatLevel.toUpperCase()} // UNLOCKED:${unlockedPillars.length}/10`, pad + 6, height - pad - 6);
  }, [unlockedPillars, activePillarId, hoveredLayer, viewMode, accentColor, threatLevel]);

  // Main animation loop
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvasRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width;
        canvasRef.current.height = rect.height;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      if (autoRotate && !isDraggingRef.current) {
        rotationRef.current.y += 0.003;
      }
      drawScene();
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [autoRotate, drawScene]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 sm:h-96 md:h-[440px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950/80 shadow-[0_0_30px_rgba(0,243,255,0.08)] backdrop-blur-md select-none"
    >
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Floating 3D Navigation Controls */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-cyan-500/40 text-sm shadow-xl z-20">
        <button
          type="button"
          onClick={() => setViewMode('both')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all font-mono font-bold cursor-pointer ${
            viewMode === 'both' ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,243,255,0.4)]' : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          title="Vista comparativa de ambas estructuras"
        >
          Ambas
        </button>
        <button
          type="button"
          onClick={() => setViewMode('real_tower')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all font-mono font-bold cursor-pointer ${
            viewMode === 'real_tower' ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(0,243,255,0.2)]' : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          title="Solo Torre de Defensa Real"
        >
          Torre Real (10)
        </button>
        <button
          type="button"
          onClick={() => setViewMode('basic_column')}
          className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm transition-all font-mono font-bold cursor-pointer ${
            viewMode === 'basic_column' ? 'bg-red-500/25 text-red-300 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
          title="Solo Columna Básica"
        >
          Columna Mito
        </button>
        <div className="w-px h-5 bg-slate-700 mx-0.5" />
        <button
          type="button"
          onClick={() => setAutoRotate(prev => !prev)}
          className={`p-2 rounded-xl transition-all cursor-pointer ${
            autoRotate ? 'text-cyan-400 bg-cyan-950/60 border border-cyan-500/40' : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
          title={autoRotate ? "Pausar rotación automática" : "Activar rotación automática"}
        >
          <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
        </button>
      </div>

      {/* Floating Bottom Legend HUD */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-20">
        <div className="flex items-center gap-3 bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700 text-xs text-slate-200 pointer-events-auto shadow-xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse inline-block" />
            <span className="font-bold text-red-300 font-mono">Columna Básica:</span>
            <span className="hidden sm:inline text-slate-300 font-medium">Firewall + Antivirus + Contraseñas (80% Vulnerable)</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f3ff] inline-block" />
            <span className="font-bold text-cyan-300 font-mono">Torre de Defensa Real:</span>
            <span className="hidden sm:inline text-slate-300 font-medium">10 Pilares Avanzados</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-700 shadow-lg">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-mono">Arrastra con el ratón para rotar el espacio 3D</span>
        </div>
      </div>
    </div>
  );
};
