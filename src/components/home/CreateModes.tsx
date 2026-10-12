'use client';

import React, { useState } from 'react';
import { RefreshCw, MessageSquareCode, Hammer, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export function CreateModes() {
  const [activeMode, setActiveMode] = useState<'remix' | 'describe' | 'build'>('remix');
  const [promptInput] = useState<string>('Cinematic 4K title sequence with chromatic aberration and slow drift');

  const modes = [
    {
      id: 'remix',
      title: '1. Remix',
      badge: 'Template Starting Point',
      icon: <RefreshCw className="w-4 h-4" />,
      tagline: 'Start from an award-winning composition and adjust its design tokens.',
      description: 'Never start from a blank slate. Choose any community or studio template, swap typography, hook your brand colors, and dial in custom animation curves.',
    },
    {
      id: 'describe',
      title: '2. Describe',
      badge: 'Natural Creative Intent',
      icon: <MessageSquareCode className="w-4 h-4" />,
      tagline: 'Translate intent into visual structure through intelligent block mapping.',
      description: 'Articulate your visual mood or campaign goal. The system maps your natural language prompt into modular block graphs, lighting envelopes, and timing curves.',
      notice: 'Illustrative client-side simulation. Generates deterministic block sequences.',
    },
    {
      id: 'build',
      title: '3. Build',
      badge: 'Precision Craft',
      icon: <Hammer className="w-4 h-4" />,
      tagline: 'Stack atomic primitives into bespoke master motion systems.',
      description: 'For creative technologists and art directors who demand total control. Wire custom parameters, write GLSL shaders, and compose multi-track sequences from scratch.',
    },
  ];

  const currentMode = modes.find((m) => m.id === activeMode)!;

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Multi-Modal Creation
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB]">
            Create however you think.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A4A1A0]">
            Whether you want to remix an existing master file, describe an aesthetic direction, or assemble atomic blocks from the ground up—MOTIONFORM adapts to your workflow.
          </p>

          {/* Segmented Control Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#141416] border border-white/15 shadow-inner">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id as 'remix' | 'describe' | 'build')}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeMode === mode.id
                    ? 'bg-[#D6FF62] text-black font-semibold shadow-md'
                    : 'text-[#A4A1A0] hover:text-white'
                }`}
              >
                {mode.icon}
                <span>{mode.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Mode Showcase */}
        <div className="rounded-2xl border border-white/15 bg-[#141416] p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Mode Narrative & Explanations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D6FF62]">
              {currentMode.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F4F1EB] leading-tight">
              {currentMode.tagline}
            </h3>

            <p className="text-sm sm:text-base text-[#A4A1A0] leading-relaxed">
              {currentMode.description}
            </p>

            {currentMode.notice && (
              <div className="p-3 bg-[#1C1C20] rounded-xl border border-white/10 text-xs font-mono text-[#A4A1A0] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D6FF62] shrink-0" />
                <span>{currentMode.notice}</span>
              </div>
            )}

            <div className="pt-2">
              <Button
                href={activeMode === 'remix' ? '/templates' : '/blocks'}
                variant="primary"
                size="md"
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Launch {activeMode.toUpperCase()} Mode
              </Button>
            </div>
          </div>

          {/* Right: Interactive Mode Preview Canvas */}
          <div className="lg:col-span-7 rounded-xl bg-[#08080A] border border-white/10 p-6 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            {/* Mode 1: Remix Canvas */}
            {activeMode === 'remix' && (
              <div className="relative z-10 space-y-6 my-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6FF62]/10 border border-[#D6FF62]/20 text-[11px] font-mono text-[#D6FF62]">
                  TEMPLATE #TPL-HYPERION · READY TO REMIX
                </div>
                <div className="text-4xl sm:text-5xl font-black uppercase text-[#F4F1EB] tracking-tighter">
                  HYPER<span className="text-[#D6FF62]">ION</span> 2026
                </div>
                <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto text-left">
                  <div className="p-2 bg-[#141416] rounded border border-white/10 text-[10px] font-mono">
                    <span className="text-[#A4A1A0] block">COLORWAY:</span>
                    <span className="text-[#D6FF62] font-bold">#D6FF62 CHARTREUSE</span>
                  </div>
                  <div className="p-2 bg-[#141416] rounded border border-white/10 text-[10px] font-mono">
                    <span className="text-[#A4A1A0] block">ASPECT:</span>
                    <span className="text-white font-bold">16:9 4K CINEMA</span>
                  </div>
                  <div className="p-2 bg-[#141416] rounded border border-white/10 text-[10px] font-mono">
                    <span className="text-[#A4A1A0] block">DURATION:</span>
                    <span className="text-white font-bold">0:32 SEC</span>
                  </div>
                </div>
              </div>
            )}

            {/* Mode 2: Describe Canvas */}
            {activeMode === 'describe' && (
              <div className="relative z-10 space-y-4 my-auto">
                <div className="text-xs font-mono text-[#A4A1A0] uppercase">
                  Simulated Natural Language Input:
                </div>
                <div className="p-3 bg-[#141416] rounded-xl border border-white/15 text-xs sm:text-sm font-mono text-[#F4F1EB] flex items-center justify-between">
                  <span>&ldquo;{promptInput}&rdquo;</span>
                  <span className="text-[10px] bg-[#D6FF62]/10 text-[#D6FF62] px-2 py-0.5 rounded">
                    MAPPED
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                  <div className="p-2.5 rounded bg-[#1C1C20] border border-white/10 text-xs font-mono">
                    <div className="text-[#D6FF62] text-[10px]">BLOCK RESOLVED:</div>
                    <div className="text-white font-semibold">Kinetic Glyphs</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1C1C20] border border-white/10 text-xs font-mono">
                    <div className="text-[#D6FF62] text-[10px]">SHADER ATTACHED:</div>
                    <div className="text-white font-semibold">Chroma Aberration</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#1C1C20] border border-white/10 text-xs font-mono col-span-2 sm:col-span-1">
                    <div className="text-[#D6FF62] text-[10px]">FPS TARGET:</div>
                    <div className="text-white font-semibold">60 FPS Native</div>
                  </div>
                </div>
              </div>
            )}

            {/* Mode 3: Build Canvas */}
            {activeMode === 'build' && (
              <div className="relative z-10 space-y-3 my-auto">
                <div className="text-xs font-mono text-[#A4A1A0] uppercase mb-2">
                  Atomic Component Stack (Bottom-Up Assembly):
                </div>
                <div className="p-2.5 bg-[#141416] rounded-lg border border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D6FF62]">[01] Root Canvas Engine</span>
                  <span className="text-[#A4A1A0]">WebGPU / WebGL 2.0</span>
                </div>
                <div className="p-2.5 bg-[#18181C] rounded-lg border border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#4E95FF]">[02] Specular Lumina Shader</span>
                  <span className="text-[#A4A1A0]">GLSL Fragment pass</span>
                </div>
                <div className="p-2.5 bg-[#1E1E24] rounded-lg border border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#FF5E3A]">[03] Kinetic Typography Node</span>
                  <span className="text-[#A4A1A0]">Spring Physics Engine</span>
                </div>
              </div>
            )}

            {/* Footer time */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#A4A1A0]">
              <span>MOTIONFORM PIPELINE ENGINE</span>
              <span className="text-[#D6FF62]">100% NON-DESTRUCTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
