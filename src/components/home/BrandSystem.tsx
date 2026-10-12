'use client';

import React, { useState } from 'react';
import { BRAND_PRESETS } from '@/lib/data';
import { Palette, RotateCcw, Check } from 'lucide-react';

export function BrandSystem() {
  const [selectedPreset, setSelectedPreset] = useState(BRAND_PRESETS[0]);
  const [activeTypeStyle, setActiveTypeStyle] = useState<'condensed' | 'expanded' | 'mono'>('condensed');

  const handleReset = () => {
    setSelectedPreset(BRAND_PRESETS[0]);
    setActiveTypeStyle('condensed');
  };

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/10 relative overflow-hidden" id="brand-kit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Design Tokens & Brand Systems
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB]">
            Unified creative tokens.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A4A1A0]">
            Change once, synchronize everywhere. Connect your colorways, typography curves, and visual identities directly into motion components for effortless brand governance.
          </p>
        </div>

        {/* Interactive Brand Engine Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Brand Presets & Token Selector (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#A4A1A0] mb-3">
                <span>SELECT BRAND PALETTE:</span>
                <button
                  onClick={handleReset}
                  className="hover:text-[#D6FF62] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Kit</span>
                </button>
              </div>

              {/* Palette Cards */}
              <div className="space-y-3">
                {BRAND_PRESETS.map((preset) => {
                  const isSelected = selectedPreset.id === preset.id;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => setSelectedPreset(preset)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#18181C] border-[#D6FF62] shadow-lg'
                          : 'bg-[#101012] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center shrink-0 shadow-sm"
                          style={{ backgroundColor: preset.accent }}
                        >
                          {isSelected && <Check className="w-4 h-4 text-black stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#F4F1EB]">
                            {preset.name}
                          </div>
                          <div className="text-[11px] font-mono text-[#A4A1A0]">
                            Accent: {preset.accent}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono text-[#A4A1A0] hidden sm:inline">
                        {preset.fontLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Typography Preset Picker */}
            <div className="p-5 rounded-xl bg-[#141416] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-[#A4A1A0] uppercase block">
                Typography Stems:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'condensed', label: 'Condensed' },
                  { id: 'expanded', label: 'Expanded' },
                  { id: 'mono', label: 'Monospace' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveTypeStyle(type.id as 'condensed' | 'expanded' | 'mono')}
                    className={`py-2 rounded-lg text-xs font-mono transition-colors border ${
                      activeTypeStyle === type.id
                        ? 'bg-[#D6FF62] text-black border-[#D6FF62] font-semibold'
                        : 'bg-[#1C1C20] text-[#A4A1A0] border-white/10 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Synchronized Live Composition Preview (Signature Moment 08: Palette Transformation) */}
          <div
            className="lg:col-span-7 rounded-2xl border p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300 min-h-[440px]"
            style={{
              backgroundColor: selectedPreset.bg,
              borderColor: selectedPreset.border,
              boxShadow: `0 0 40px ${selectedPreset.glow}`,
            }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" style={{ color: selectedPreset.accent }} />
                <span className="text-xs font-mono text-white uppercase font-bold">
                  {selectedPreset.name} · LIVE RENDER
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                TOKEN SYNC ACTIVE
              </span>
            </div>

            {/* Transformed Stage */}
            <div
              className="rounded-xl p-8 border flex flex-col items-center justify-center text-center my-auto transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: selectedPreset.surface,
                borderColor: selectedPreset.border,
              }}
            >
              {/* Radial glow background */}
              <div
                className="absolute inset-0 opacity-40 blur-2xl pointer-events-none transition-all duration-300"
                style={{
                  background: `radial-gradient(circle, ${selectedPreset.accent} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10 space-y-4">
                <div
                  className="text-4xl sm:text-6xl font-black uppercase tracking-tight transition-all duration-300"
                  style={{
                    letterSpacing: activeTypeStyle === 'expanded' ? '8px' : activeTypeStyle === 'condensed' ? '-1px' : '3px',
                    fontFamily: activeTypeStyle === 'mono' ? 'var(--font-geist-mono)' : 'var(--font-geist-sans)',
                    color: selectedPreset.accent,
                  }}
                >
                  AUTONOMY
                </div>

                <p className="text-xs sm:text-sm text-[#F4F1EB] max-w-md mx-auto leading-relaxed">
                  Design tokens seamlessly permeate every subtitle, lower third, 3D element, and color grade across your video project.
                </p>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <div
                    className="px-3 py-1 rounded text-xs font-mono font-bold"
                    style={{
                      backgroundColor: selectedPreset.accent,
                      color: '#000000',
                    }}
                  >
                    CTA ACCENT
                  </div>
                  <div className="px-3 py-1 rounded text-xs font-mono bg-white/10 text-white border border-white/10">
                    SECONDARY SURFACE
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A4A1A0]">
              <span>Vibe: {selectedPreset.vibe}</span>
              <span style={{ color: selectedPreset.accent }}>60fps Synchronized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
