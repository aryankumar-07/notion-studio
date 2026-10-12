'use client';

import React, { useState } from 'react';
import { Type, Sparkles, Grid3X3, Box, RotateCcw, Sliders, Check } from 'lucide-react';
import { Slider } from '../ui/Slider';
import { Button } from '../ui/Button';

interface KineticState {
  text: string;
  tracking: number;
  scale: number;
  intensity: number;
}

interface GlowState {
  intensity: number;
  radius: number;
  hue: number;
}

interface HalftoneState {
  density: number;
  contrast: number;
  scale: number;
}

interface DimensionalState {
  rotX: number;
  rotY: number;
  depth: number;
}

const DEFAULT_KINETIC: KineticState = { text: 'MOTIONFORM', tracking: 4, scale: 1.0, intensity: 50 };
const DEFAULT_GLOW: GlowState = { intensity: 85, radius: 60, hue: 74 };
const DEFAULT_HALFTONE: HalftoneState = { density: 16, contrast: 70, scale: 1.0 };
const DEFAULT_DIMENSIONAL: DimensionalState = { rotX: 25, rotY: 45, depth: 35 };

export function Playground() {
  const [activeTab, setActiveTab] = useState<'kinetic' | 'glow' | 'halftone' | 'dimensional'>('kinetic');

  // State objects
  const [kinetic, setKinetic] = useState<KineticState>({ ...DEFAULT_KINETIC });
  const [glow, setGlow] = useState<GlowState>({ ...DEFAULT_GLOW });
  const [halftone, setHalftone] = useState<HalftoneState>({ ...DEFAULT_HALFTONE });
  const [dimensional, setDimensional] = useState<DimensionalState>({ ...DEFAULT_DIMENSIONAL });

  const [activePreset, setActivePreset] = useState<string | null>(null);

  // Preset switchers
  const applyPreset = (presetName: string) => {
    setActivePreset(presetName);
    if (presetName === 'Cyberpunk Title') {
      setActiveTab('kinetic');
      setKinetic({ text: 'NEURO_PULSE', tracking: 14, scale: 1.3, intensity: 85 });
      setGlow({ intensity: 110, radius: 80, hue: 74 });
    } else if (presetName === 'Subtle Editorial') {
      setActiveTab('kinetic');
      setKinetic({ text: 'ATELIER 2026', tracking: 2, scale: 0.9, intensity: 30 });
      setGlow({ intensity: 40, radius: 40, hue: 45 });
    } else if (presetName === 'Brutalist Monolith') {
      setActiveTab('dimensional');
      setDimensional({ rotX: 35, rotY: 15, depth: 70 });
      setHalftone({ density: 24, contrast: 90, scale: 1.4 });
    }
  };

  const handleResetCurrent = () => {
    setActivePreset(null);
    if (activeTab === 'kinetic') setKinetic({ ...DEFAULT_KINETIC });
    if (activeTab === 'glow') setGlow({ ...DEFAULT_GLOW });
    if (activeTab === 'halftone') setHalftone({ ...DEFAULT_HALFTONE });
    if (activeTab === 'dimensional') setDimensional({ ...DEFAULT_DIMENSIONAL });
  };

  const handleResetAll = () => {
    setActivePreset(null);
    setKinetic({ ...DEFAULT_KINETIC });
    setGlow({ ...DEFAULT_GLOW });
    setHalftone({ ...DEFAULT_HALFTONE });
    setDimensional({ ...DEFAULT_DIMENSIONAL });
  };

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/10 relative overflow-hidden" id="playground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
              Interactive Lab
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EB]">
              Creative-Block Playground.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A4A1A0] max-w-xl">
              Tweak parameters, inspect spring dynamics, and test how individual motion primitives transform in real time.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#A4A1A0] mr-1">Presets:</span>
            {['Cyberpunk Title', 'Subtle Editorial', 'Brutalist Monolith'].map((preset) => (
              <button
                key={preset}
                onClick={() => applyPreset(preset)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                  activePreset === preset
                    ? 'bg-[#D6FF62] text-black border-[#D6FF62] font-semibold'
                    : 'bg-[#141416] text-[#A4A1A0] border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Component Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-white/10">
          {[
            { id: 'kinetic', label: '1. Kinetic Typography', icon: <Type className="w-4 h-4" /> },
            { id: 'glow', label: '2. Specular Glow Field', icon: <Sparkles className="w-4 h-4" /> },
            { id: 'halftone', label: '3. Quantum Halftone', icon: <Grid3X3 className="w-4 h-4" /> },
            { id: 'dimensional', label: '4. Dimensional 3D Object', icon: <Box className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as 'kinetic' | 'glow' | 'halftone' | 'dimensional');
                setActivePreset(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1C1C20] text-[#D6FF62] border border-[#D6FF62]/40 shadow-sm'
                  : 'text-[#A4A1A0] hover:text-[#F4F1EB] hover:bg-white/[0.04]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Main Playground Workspace (Left: Interactive Canvas, Right: Parameter Controls) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Canvas Viewport */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-[#141416] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative min-h-[380px] sm:min-h-[460px]">
            {/* Canvas Header bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D6FF62]" />
                <span className="text-xs font-mono text-[#F4F1EB] uppercase">
                  ACTIVE BLOCK PREVIEW · WEBGL / CSS ENGINE
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#A4A1A0]">
                RESOLUTION: 1080×1080 (1:1)
              </span>
            </div>

            {/* Central Live Canvas Area */}
            <div className="relative flex-1 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center overflow-hidden my-4 p-6">
              <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

              {/* 1. Kinetic Typography Mode */}
              {activeTab === 'kinetic' && (
                <div className="text-center z-10 transition-all duration-150">
                  <div
                    className="font-mono font-black uppercase text-3xl sm:text-5xl md:text-6xl text-[#F4F1EB] transition-all"
                    style={{
                      letterSpacing: `${kinetic.tracking}px`,
                      transform: `scale(${kinetic.scale})`,
                      filter: `drop-shadow(0 0 ${kinetic.intensity * 0.4}px rgba(214,255,98,0.5))`,
                    }}
                  >
                    {kinetic.text || 'MOTION'}
                  </div>
                  <div className="mt-4 text-xs font-mono text-[#A4A1A0]">
                    Spring Velocity: {kinetic.intensity}% · Interpolation: Cubic Bezier
                  </div>
                </div>
              )}

              {/* 2. Specular Glow Field Mode */}
              {activeTab === 'glow' && (
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="w-48 h-48 rounded-full transition-all duration-150 blur-3xl pointer-events-none"
                    style={{
                      background: `hsl(${glow.hue}, 95%, 60%)`,
                      opacity: glow.intensity / 100,
                      transform: `scale(${glow.radius / 50})`,
                    }}
                  />
                  <div
                    className="absolute w-24 h-24 rounded-full border border-white/40 flex items-center justify-center text-xs font-mono text-white font-bold bg-black/40 backdrop-blur-md"
                    style={{
                      boxShadow: `0 0 ${glow.radius}px hsl(${glow.hue}, 100%, 65%)`,
                    }}
                  >
                    HSL({glow.hue}°)
                  </div>
                </div>
              )}

              {/* 3. Quantum Halftone Mode */}
              {activeTab === 'halftone' && (
                <div
                  className="z-10 grid gap-2.5 transition-all duration-150 p-4"
                  style={{
                    gridTemplateColumns: `repeat(${Math.min(8, Math.max(4, Math.floor(halftone.density / 3)))}, minmax(0, 1fr))`,
                    transform: `scale(${halftone.scale})`,
                  }}
                >
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-[#D6FF62] transition-all"
                      style={{
                        width: `${Math.max(4, (halftone.contrast / 100) * 14)}px`,
                        height: `${Math.max(4, (halftone.contrast / 100) * 14)}px`,
                        opacity: (i % 2 === 0 ? 0.9 : 0.25) * (halftone.contrast / 100),
                      }}
                    />
                  ))}
                </div>
              )}

              {/* 4. Dimensional 3D Object Mode */}
              {activeTab === 'dimensional' && (
                <div className="z-10 flex items-center justify-center">
                  <div
                    className="w-28 h-28 sm:w-36 sm:h-36 border-2 border-[#D6FF62] bg-[#D6FF62]/10 transition-transform duration-150 flex items-center justify-center font-mono text-xs text-[#D6FF62] font-bold"
                    style={{
                      transform: `perspective(600px) rotateX(${dimensional.rotX}deg) rotateY(${dimensional.rotY}deg) translateZ(${dimensional.depth}px)`,
                      boxShadow: '0 0 35px rgba(214,255,98,0.25)',
                    }}
                  >
                    <span>3D PRISM</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between text-xs font-mono text-[#A4A1A0] pt-2">
              <span className="flex items-center gap-1.5 text-[#D6FF62]">
                <Check className="w-3.5 h-3.5" />
                <span>Deterministic Client State</span>
              </span>
              <span>Frame render latency: 1.2ms</span>
            </div>
          </div>

          {/* Configuration Controls Panel (Right) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-[#141416] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#D6FF62]" />
                  <h3 className="font-semibold text-sm text-[#F4F1EB] tracking-tight">
                    Parameter Controls
                  </h3>
                </div>
                <button
                  onClick={handleResetCurrent}
                  className="text-xs font-mono text-[#A4A1A0] hover:text-[#D6FF62] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Active</span>
                </button>
              </div>

              {/* 1. Kinetic Typography Controls */}
              {activeTab === 'kinetic' && (
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#A4A1A0]">Headline Text</label>
                    <input
                      type="text"
                      value={kinetic.text}
                      maxLength={18}
                      onChange={(e) => setKinetic({ ...kinetic, text: e.target.value.toUpperCase() })}
                      className="w-full bg-[#1C1C20] border border-white/15 rounded-lg px-3 py-2 text-sm text-white font-mono focus-visible:outline-2 focus-visible:outline-[#D6FF62]"
                      aria-label="Text content"
                    />
                  </div>

                  <Slider
                    label="Letter Spacing"
                    value={kinetic.tracking}
                    min={-4}
                    max={28}
                    step={1}
                    unit="px"
                    onChange={(val) => setKinetic({ ...kinetic, tracking: val })}
                  />

                  <Slider
                    label="Scale Factor"
                    value={kinetic.scale}
                    min={0.6}
                    max={1.6}
                    step={0.05}
                    unit="x"
                    onChange={(val) => setKinetic({ ...kinetic, scale: val })}
                  />

                  <Slider
                    label="Glow / Intensity"
                    value={kinetic.intensity}
                    min={0}
                    max={100}
                    step={5}
                    unit="%"
                    onChange={(val) => setKinetic({ ...kinetic, intensity: val })}
                  />
                </div>
              )}

              {/* 2. Glow Field Controls */}
              {activeTab === 'glow' && (
                <div className="space-y-5">
                  <Slider
                    label="Core Lux Intensity"
                    value={glow.intensity}
                    min={10}
                    max={150}
                    step={5}
                    unit="%"
                    onChange={(val) => setGlow({ ...glow, intensity: val })}
                  />

                  <Slider
                    label="Diffusion Radius"
                    value={glow.radius}
                    min={20}
                    max={120}
                    step={5}
                    unit="px"
                    onChange={(val) => setGlow({ ...glow, radius: val })}
                  />

                  <Slider
                    label="Chromatic Hue (Color)"
                    value={glow.hue}
                    min={0}
                    max={360}
                    step={2}
                    unit="°"
                    onChange={(val) => setGlow({ ...glow, hue: val })}
                  />
                </div>
              )}

              {/* 3. Halftone Controls */}
              {activeTab === 'halftone' && (
                <div className="space-y-5">
                  <Slider
                    label="Matrix Array Density"
                    value={halftone.density}
                    min={8}
                    max={32}
                    step={2}
                    unit=" cols"
                    onChange={(val) => setHalftone({ ...halftone, density: val })}
                  />

                  <Slider
                    label="Dot Contrast Threshold"
                    value={halftone.contrast}
                    min={20}
                    max={120}
                    step={5}
                    unit="%"
                    onChange={(val) => setHalftone({ ...halftone, contrast: val })}
                  />

                  <Slider
                    label="Raster Zoom Scale"
                    value={halftone.scale}
                    min={0.7}
                    max={1.6}
                    step={0.1}
                    unit="x"
                    onChange={(val) => setHalftone({ ...halftone, scale: val })}
                  />
                </div>
              )}

              {/* 4. Dimensional 3D Controls */}
              {activeTab === 'dimensional' && (
                <div className="space-y-5">
                  <Slider
                    label="Elevation (Rotation X)"
                    value={dimensional.rotX}
                    min={-60}
                    max={60}
                    step={1}
                    unit="°"
                    onChange={(val) => setDimensional({ ...dimensional, rotX: val })}
                  />

                  <Slider
                    label="Azimuth (Rotation Y)"
                    value={dimensional.rotY}
                    min={-180}
                    max={180}
                    step={2}
                    unit="°"
                    onChange={(val) => setDimensional({ ...dimensional, rotY: val })}
                  />

                  <Slider
                    label="Z-Depth Extrusion"
                    value={dimensional.depth}
                    min={0}
                    max={80}
                    step={5}
                    unit="px"
                    onChange={(val) => setDimensional({ ...dimensional, depth: val })}
                  />
                </div>
              )}
            </div>

            {/* Global Actions */}
            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetAll}
                className="text-xs"
              >
                Reset All Parameters
              </Button>
              <Button
                href="/blocks"
                variant="primary"
                size="sm"
                className="text-xs font-mono"
              >
                Inspect Block Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
