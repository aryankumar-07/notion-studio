'use client';

import React, { useState } from 'react';
import { Type, Sparkles, Grid3X3, Box, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ProductThesis() {
  const [selectedBlock, setSelectedBlock] = useState<number>(0);
  const [blockModifier, setBlockModifier] = useState<number>(50);

  const thesisBlocks = [
    {
      id: 'type',
      title: 'Kinetic Typography',
      category: 'Atomic Block',
      icon: <Type className="w-4 h-4 text-[#D6FF62]" />,
      desc: 'Fluid letter-by-letter spring physics that transforms plain titles into expressive brand moments.',
      paramLabel: 'Tracking & Baseline',
    },
    {
      id: 'glow',
      title: 'Specular Lighting',
      category: 'Shader Block',
      icon: <Sparkles className="w-4 h-4 text-[#D6FF62]" />,
      desc: 'Layered chromatic dispersion and soft glow envelopes computed on GPU for filmic texture.',
      paramLabel: 'Core Lux Intensity',
    },
    {
      id: 'halftone',
      title: 'Quantum Raster',
      category: 'Generative Block',
      icon: <Grid3X3 className="w-4 h-4 text-[#D6FF62]" />,
      desc: 'Parametric matrix and dot grids that react in real-time to video contrast thresholds.',
      paramLabel: 'Dot Array Density',
    },
    {
      id: 'prism',
      title: 'Dimensional Object',
      category: 'Spatial Block',
      icon: <Box className="w-4 h-4 text-[#D6FF62]" />,
      desc: 'Lightweight CSS 3D geometry with customizable extrusion depth and dynamic lighting.',
      paramLabel: 'Angular Rotation',
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Thesis Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-3">
            Core Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB] leading-tight">
            Your ideas deserve better building blocks.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A4A1A0] leading-relaxed">
            Conventional video tools lock you into static keyframes or rigid templates. MOTIONFORM deconstructs visual production into modular creative blocks—infinitely recombinable, parametrically controlled, and reactive to your narrative.
          </p>
        </div>

        {/* Interactive Modular Canvas (Left: Grid of 4 blocks, Right: Live Interactive Renderer) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Component Selection List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {thesisBlocks.map((block, index) => {
              const isSelected = selectedBlock === index;
              return (
                <div
                  key={block.id}
                  onClick={() => setSelectedBlock(index)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer select-none text-left ${
                    isSelected
                      ? 'bg-[#141416] border-[#D6FF62]/40 shadow-[0_0_20px_rgba(214,255,98,0.1)]'
                      : 'bg-[#101012] border-white/10 hover:border-white/20 hover:bg-[#141416]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-white/5 border border-white/10">
                        {block.icon}
                      </div>
                      <span className="font-semibold text-[#F4F1EB] text-sm">
                        {block.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A4A1A0]">
                      {block.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#A4A1A0] leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              );
            })}

            <div className="pt-2">
              <Link
                href="/blocks"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D6FF62] hover:underline"
              >
                <span>Browse the full 140+ Block Catalog</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Live Modular Canvas Renderer */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#141416] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D6FF62] animate-pulse" />
                <span className="text-xs font-mono text-[#F4F1EB] uppercase tracking-wider">
                  REAL-TIME PREVIEW: {thesisBlocks[selectedBlock].title}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#A4A1A0]">
                NON-DESTRUCTIVE PARAMETER GRAPH
              </span>
            </div>

            {/* Dynamic Visual Stage */}
            <div className="relative h-64 sm:h-72 rounded-xl bg-[#09090B] border border-white/10 flex items-center justify-center overflow-hidden my-auto">
              <div className="absolute inset-0 bg-grid-pattern opacity-50" />

              {/* Block 0: Kinetic Typography */}
              {selectedBlock === 0 && (
                <div className="text-center z-10 transition-all duration-200">
                  <div
                    className="text-4xl sm:text-6xl font-black uppercase text-[#F4F1EB] tracking-tighter"
                    style={{
                      letterSpacing: `${(blockModifier - 50) * 0.4}px`,
                      transform: `scale(${0.8 + (blockModifier / 100) * 0.4})`,
                    }}
                  >
                    VELOC<span className="text-[#D6FF62]">ITY</span>
                  </div>
                  <div className="text-xs font-mono text-[#A4A1A0] mt-3">
                    Spring Dampening: 0.85 · Inertia: Active
                  </div>
                </div>
              )}

              {/* Block 1: Specular Lighting */}
              {selectedBlock === 1 && (
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="w-36 h-36 rounded-full transition-all duration-200 blur-2xl"
                    style={{
                      background: `radial-gradient(circle, #D6FF62 0%, rgba(0, 240, 255, 0.4) 50%, transparent 70%)`,
                      opacity: blockModifier / 100,
                      transform: `scale(${0.6 + (blockModifier / 100) * 0.8})`,
                    }}
                  />
                  <div className="absolute font-mono text-xs text-[#F4F1EB] font-bold uppercase tracking-widest px-3 py-1 bg-black/60 rounded-full border border-white/15">
                    CHROMATIC FLUX {(blockModifier * 1.5).toFixed(0)} LX
                  </div>
                </div>
              )}

              {/* Block 2: Quantum Raster */}
              {selectedBlock === 2 && (
                <div className="z-10 grid grid-cols-6 gap-3 transition-all duration-200">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-[#D6FF62] transition-all"
                      style={{
                        width: `${Math.max(4, (blockModifier / 100) * 12)}px`,
                        height: `${Math.max(4, (blockModifier / 100) * 12)}px`,
                        opacity: (i % 3 === 0 ? 0.9 : 0.35) * (blockModifier / 100),
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Block 3: Dimensional 3D Object */}
              {selectedBlock === 3 && (
                <div
                  className="z-10 w-24 h-24 sm:w-28 sm:h-28 border-2 border-[#D6FF62] bg-[#D6FF62]/10 transition-transform duration-200 shadow-[0_0_30px_rgba(214,255,98,0.2)]"
                  style={{
                    transform: `perspective(600px) rotateX(${blockModifier * 0.7}deg) rotateY(${blockModifier * 1.2}deg)`,
                  }}
                />
              )}
            </div>

            {/* Bottom Parameter Tweaker */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-[#A4A1A0] mb-2">
                <span>PARAM: {thesisBlocks[selectedBlock].paramLabel}</span>
                <span className="text-[#D6FF62] font-semibold">{blockModifier}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={blockModifier}
                onChange={(e) => setBlockModifier(parseInt(e.target.value))}
                className="w-full accent-[#D6FF62]"
                aria-label={`Adjust ${thesisBlocks[selectedBlock].paramLabel}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
