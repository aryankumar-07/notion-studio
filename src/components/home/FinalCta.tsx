'use client';

import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="py-28 bg-[#0A0A0B] relative overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D6FF62]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D6FF62] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Next Wave of Motion Graphics</span>
        </div>

        {/* Transformed Return of Hero Typography Motif (Signature Moment 10) */}
        <div className="relative my-8">
          <div className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#F4F1EB] select-none leading-none">
            EVERYTHING
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6FF62] via-white to-[#D6FF62]">
              TRANSFORMS.
            </span>
          </div>

          <p className="mt-8 text-base sm:text-xl text-[#A4A1A0] max-w-2xl mx-auto leading-relaxed">
            Stop waiting for slow renders. Jump into the browser, stack creative blocks, and build your next video composition today.
          </p>
        </div>

        {/* Closing CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/templates"
            size="lg"
            variant="primary"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Launch Free Studio
          </Button>
          <Button
            href="/pricing"
            size="lg"
            variant="secondary"
          >
            Compare Studio Plans
          </Button>
        </div>

        {/* Operational badge */}
        <div className="mt-12 text-xs font-mono text-[#6E6D70] flex items-center justify-center gap-4">
          <span>WebGL 2.0 / WebGPU Ready</span>
          <span>·</span>
          <span>Zero Installation Required</span>
          <span>·</span>
          <span>100% Client-Side Private</span>
        </div>
      </div>
    </section>
  );
}
