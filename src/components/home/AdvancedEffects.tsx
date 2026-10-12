'use client';

import React, { useState } from 'react';

export function AdvancedEffects() {
  const [selectedEffect, setSelectedEffect] = useState<'slit-scan' | 'chroma' | 'grain' | 'halftone' | 'depth'>('chroma');

  const effects = [
    {
      id: 'chroma',
      name: 'Chromatic Aberration',
      tagline: 'Dual-pass RGB split with radial edge diffusion',
      description: 'Separates RGB spectral channels along the perimeter, simulating vintage anamorphic cinema lenses.',
    },
    {
      id: 'slit-scan',
      name: 'Slit-Scan Displacement',
      tagline: 'Time-delay pixel slice cascading',
      description: 'Shifts vertical and horizontal scanlines across time intervals for hypnotic undulating distortions.',
    },
    {
      id: 'grain',
      name: 'Filmic Analog Grain',
      tagline: 'Perlin noise texture with variable grain density',
      description: 'Adds tactile organic warmth and breaks digital banding in dark gradients and shadows.',
    },
    {
      id: 'halftone',
      name: 'Luminance Halftone',
      tagline: 'Threshold-based geometric rasterization',
      description: 'Transforms video frames into parametric dot patterns suitable for bold print and editorial titles.',
    },
    {
      id: 'depth',
      name: 'Spatial Parallax Extrusion',
      tagline: 'Depth-map z-displacement with specular lighting',
      description: 'Extrudes 2D graphics into isometric space without loading heavyweight 3D polygon meshes.',
    },
  ];

  const current = effects.find((e) => e.id === selectedEffect)!;

  return (
    <section className="py-24 bg-[#0A0A0B] relative overflow-hidden" id="effects">
      {/* Background SVG Filter Definitions for real rendering */}
      <svg className="hidden">
        <defs>
          <filter id="grain-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" />
            <feComposite in2="SourceGraphic" in="glitch" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Experimental Shader Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB]">
            Advanced creative effects.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A4A1A0]">
            Take compositions beyond ordinary video editing. Audition hardware-accelerated shaders that warp space, scatter light, and introduce tactile digital artifacts.
          </p>
        </div>

        {/* Interactive Effect Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Effect Selector List (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {effects.map((effect) => {
              const isSelected = selectedEffect === effect.id;
              return (
                <div
                  key={effect.id}
                  onClick={() => setSelectedEffect(effect.id as 'slit-scan' | 'chroma' | 'grain' | 'halftone' | 'depth')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#141416] border-[#D6FF62] shadow-[0_0_15px_rgba(214,255,98,0.15)]'
                      : 'bg-[#101012] border-white/10 hover:border-white/20 hover:bg-[#141416]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm text-[#F4F1EB]">
                      {effect.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#D6FF62]">
                      {isSelected ? 'ACTIVE' : 'SELECT'}
                    </span>
                  </div>
                  <p className="text-xs text-[#A4A1A0] mt-1">
                    {effect.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Effect Live Renderer (Right) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#141416] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs font-mono">
              <span className="text-[#D6FF62] uppercase">SHADER: {current.name}</span>
              <span className="text-[#A4A1A0]">PASS 01 · 60 FPS GLSL</span>
            </div>

            {/* Interactive Visual Stage */}
            <div className="relative h-72 sm:h-80 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center overflow-hidden my-auto select-none">
              <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

              {/* 1. Chromatic Aberration visual */}
              {selectedEffect === 'chroma' && (
                <div className="relative text-center">
                  <div
                    className="text-5xl sm:text-7xl font-black uppercase tracking-tighter"
                    style={{
                      textShadow: '-4px 0 #FF0055, 4px 0 #00F0FF',
                    }}
                  >
                    <span className="text-white">ABERRATION</span>
                  </div>
                  <div className="mt-3 text-xs font-mono text-[#A4A1A0]">
                    RGB Dispersal: Red Offset (-4px) / Cyan Offset (+4px)
                  </div>
                </div>
              )}

              {/* 2. Slit-Scan visual */}
              {selectedEffect === 'slit-scan' && (
                <div className="space-y-1.5 w-full max-w-sm px-4">
                  {[-18, 12, -24, 18, -10, 22].map((shift, idx) => (
                    <div
                      key={idx}
                      className="h-7 bg-[#1C1C20] border border-white/20 flex items-center justify-center font-mono text-xs text-[#D6FF62] font-bold overflow-hidden transition-all duration-300"
                      style={{ transform: `translateX(${shift}px)` }}
                    >
                      SLIT_SCAN_SLICE_0{idx + 1}
                    </div>
                  ))}
                </div>
              )}

              {/* 3. Filmic Grain visual */}
              {selectedEffect === 'grain' && (
                <div className="relative w-full h-full flex items-center justify-center bg-radial-gradient">
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(circle, #D6FF62 10%, transparent 80%)`,
                      filter: 'url(#grain-filter)',
                    }}
                  />
                  <div className="text-center z-10">
                    <div className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
                      35MM ANALOG
                    </div>
                    <div className="text-xs font-mono text-[#A4A1A0] mt-2">
                      Organic Noise Envelope · Zero Artifacting
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Halftone visual */}
              {selectedEffect === 'halftone' && (
                <div className="grid grid-cols-7 gap-3 z-10">
                  {Array.from({ length: 28 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-3.5 h-3.5 rounded-full bg-[#D6FF62]"
                      style={{
                        transform: `scale(${idx % 3 === 0 ? 1.4 : idx % 2 === 0 ? 0.9 : 0.5})`,
                        opacity: idx % 3 === 0 ? 1 : 0.4,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* 5. Spatial Depth visual */}
              {selectedEffect === 'depth' && (
                <div className="z-10 text-center">
                  <div
                    className="text-4xl sm:text-6xl font-black text-[#F4F1EB] uppercase tracking-tighter"
                    style={{
                      transform: 'perspective(500px) rotateX(25deg) rotateY(-20deg)',
                      textShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(214,255,98,0.3)',
                    }}
                  >
                    PARALLAX
                  </div>
                  <div className="text-xs font-mono text-[#D6FF62] mt-3">
                    Z-DISPLACEMENT: +85px · SPECULAR PASS
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A4A1A0]">
              <span>{current.description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
