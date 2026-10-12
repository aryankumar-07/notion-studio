import { Metadata } from 'next';
import { Philosophy } from '@/components/home/Philosophy';
import { BrandSystem } from '@/components/home/BrandSystem';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Studio Philosophy & Workflow Story — MOTIONFORM',
  description: 'Explore the design philosophy, modular software architecture, and creative technology behind MOTIONFORM.',
};

export default function StudioPage() {
  const roadmapMilestones = [
    {
      quarter: 'v1.0 (Genesis)',
      title: 'Atomic Primitives & Non-Linear Timeline',
      desc: 'Launched the foundational WebGL compositing engine, allowing client-side rendering of kinetic typography and SVG rasters.',
    },
    {
      quarter: 'v2.0 (Shader Pipeline)',
      title: 'Real-time GLSL Post-Processing',
      desc: 'Introduced chromatic dispersion, volumetric glow fields, and custom fragment shaders at 60fps monitor refresh rates.',
    },
    {
      quarter: 'v2.4 (Current)',
      title: 'Brand Token Synchronization',
      desc: 'Centralized CSS variable mapping across video scenes, instant aspect-ratio reframing, and local WebCodecs video encoding.',
    },
    {
      quarter: 'v3.0 (Upcoming)',
      title: 'Spatial Audio & WebGPU Mesh Deformers',
      desc: 'Hardware-accelerated frequency envelopes, stereo field panning, and parametric 3D cloth simulations.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0B] text-[#F4F1EB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Studio Hero Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-3">
            The MOTIONFORM Story
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Creative technology at the speed of thought.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#A4A1A0] leading-relaxed">
            We built MOTIONFORM to eliminate the latency between an art director&apos;s idea and its visual manifestation. Here is the technical philosophy and architectural roadmap behind our platform.
          </p>
        </div>
      </div>

      {/* Embedded Studio Philosophy Manifesto */}
      <Philosophy />

      {/* Brand Design Kit Synchronizer */}
      <BrandSystem />

      {/* Engineering Roadmap Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-white/10 pt-20">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Architectural Milestones.
          </h2>
          <p className="mt-2 text-sm text-[#A4A1A0]">
            From atomic primitives to WebGPU master cinema rendering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141416] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#D6FF62] font-semibold block mb-2">
                  {milestone.quarter}
                </span>
                <h3 className="text-lg font-bold text-[#F4F1EB] mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[#A4A1A0] leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Action */}
        <div className="mt-16 text-center">
          <Button href="/templates" variant="primary" size="lg" iconRight={<ArrowRight className="w-4 h-4" />}>
            Experience the Studio Platform
          </Button>
        </div>
      </div>
    </div>
  );
}
