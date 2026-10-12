'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Play, Sparkles, Sliders, ArrowRight, CornerDownRight } from 'lucide-react';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeParam, setActiveParam] = useState<'tracking' | 'glow' | 'speed'>('tracking');
  const [paramValue, setParamValue] = useState(8);

  // Subtle pointer movement tracking (desktop only)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-[#0A0A0B] bg-grid-pattern">
      {/* Subtle radial ambient glow behind central composition */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none blur-[140px] opacity-40 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #D6FF62 0%, rgba(214,255,98,0.05) 50%, transparent 70%)',
          transform: `translate(calc(-50% + ${mousePos.x * 0.8}px), calc(-50% + ${mousePos.y * 0.8}px))`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="accent" size="sm">
            Creative Tools / Reimagined
          </Badge>
          <span className="text-xs font-mono text-[#A4A1A0] hidden sm:inline">
            · Modular Video Architecture v2.4
          </span>
        </div>

        {/* Headline with Masked Window Visual Reveal (Signature Moment 01) */}
        <div className="max-w-5xl mb-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-[#F4F1EB] uppercase">
            Make motion.
            <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#D6FF62] via-[#F4F1EB] to-[#D6FF62] select-none">
              Make it yours.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#A4A1A0] max-w-2xl leading-relaxed">
            Build expressive, high-framerate videos with reusable creative blocks, programmable shader effects, and an editable timeline designed for experimentation.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href="/templates"
              size="lg"
              variant="primary"
              iconRight={<ArrowRight className="w-4 h-4" />}
            >
              Explore the Studio
            </Button>
            <Button
              href="/blocks"
              size="lg"
              variant="secondary"
              icon={<Sparkles className="w-4 h-4 text-[#D6FF62]" />}
            >
              Discover Creative Blocks
            </Button>
          </div>
        </div>

        {/* Central Interactive Composition Preview (Miniature Live Canvas) */}
        <div
          className="mt-12 rounded-2xl border border-white/15 bg-[#141416]/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * 0.2}deg)`,
          }}
        >
          {/* Top Canvas Bar */}
          <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-[#1C1C20]/80">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-[#A4A1A0] pl-2 border-l border-white/10 hidden sm:inline">
                PROJECT: <strong className="text-[#F4F1EB]">HYPERION_GENESIS_4K.MFM</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D6FF62]/10 text-[#D6FF62] border border-[#D6FF62]/20">
                LIVE 60 FPS
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1 rounded bg-white/10 hover:bg-white/20 text-[#F4F1EB] transition-colors"
                aria-label={isPlaying ? 'Pause composition' : 'Play composition'}
              >
                <Play className={`w-3.5 h-3.5 ${isPlaying ? 'fill-[#D6FF62] text-[#D6FF62]' : ''}`} />
              </button>
            </div>
          </div>

          {/* Canvas Viewport */}
          <div className="relative h-64 sm:h-80 md:h-96 bg-[#08080A] flex items-center justify-center overflow-hidden">
            {/* Background animated grid lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-60" />

            {/* Live animated central typography graphic */}
            <div className="relative z-10 text-center select-none px-4">
              <div
                className="font-mono font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight transition-all duration-300"
                style={{
                  letterSpacing: `${paramValue}px`,
                  filter: activeParam === 'glow' ? `drop-shadow(0 0 ${paramValue * 2}px #D6FF62)` : 'none',
                }}
              >
                <span className="text-white">TRANS</span>
                <span className="text-[#D6FF62]">FORM</span>
              </div>
              <div className="text-xs sm:text-sm font-mono text-[#A4A1A0] mt-3 uppercase tracking-widest">
                Modular Creative Engine · Frame 0148 / 0360
              </div>
            </div>

            {/* Floating Contextual Block Pill Overlay (Liquid Glass Moment 07) */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md p-3 rounded-xl bg-[#141416]/85 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#D6FF62]" />
                <span className="font-mono text-[#A4A1A0]">Active Modifier:</span>
                <span className="font-mono text-[#F4F1EB] uppercase font-semibold">
                  {activeParam} ({paramValue})
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {(['tracking', 'glow', 'speed'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setActiveParam(p);
                      setParamValue(p === 'tracking' ? 12 : p === 'glow' ? 20 : 6);
                    }}
                    className={`px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      activeParam === p
                        ? 'bg-[#D6FF62] text-black font-bold'
                        : 'bg-white/10 text-[#A4A1A0] hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Timeline Strip representation */}
          <div className="px-5 py-2.5 bg-[#121214] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A4A1A0]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[#D6FF62]">
                <CornerDownRight className="w-3.5 h-3.5" />
                <span>Track 01: Typography_Kinetic</span>
              </div>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline">Track 02: Shader_Lumina_Glow</span>
            </div>
            <div className="text-[11px] text-[#A4A1A0]">
              TIMECODE: <span className="text-[#F4F1EB]">00:02.46</span> / 00:06.00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
