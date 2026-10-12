import React from 'react';
import { Terminal, Cpu, Compass, Layers } from 'lucide-react';

export function Philosophy() {
  const tenets = [
    {
      num: '01',
      title: 'Primitives Over Presets',
      desc: 'Presets constrain creative expression to the imagination of their author. Atomic primitives give you building blocks to engineer entirely new visual languages.',
      icon: <Layers className="w-5 h-5 text-[#D6FF62]" />,
    },
    {
      num: '02',
      title: 'Client-Side Autonomy',
      desc: 'Video tools should not require a 20-minute cloud queue to render an 8-second subtitle. Modern browsers and GPUs can composite 4K frames natively in real time.',
      icon: <Cpu className="w-5 h-5 text-[#D6FF62]" />,
    },
    {
      num: '03',
      title: 'Non-Destructive Exploration',
      desc: 'The best creative work emerges from accidents. Every parameter, transform, and shader in MOTIONFORM remains completely reversible at any point in the timeline.',
      icon: <Compass className="w-5 h-5 text-[#D6FF62]" />,
    },
    {
      num: '04',
      title: 'Code Meets Direct Manipulation',
      desc: 'Visual sliders give intuitive tactile feedback; code affords programmatic scale. We unite direct UI interaction with typed parameter schemas for uncompromising precision.',
      icon: <Terminal className="w-5 h-5 text-[#D6FF62]" />,
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] relative overflow-hidden" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Manifesto Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Studio Manifesto
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB] leading-tight">
            Tools should expand what you can imagine.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A4A1A0] leading-relaxed">
            For decades, video editors were built around a tape-recorder metaphor designed in the 1990s. We reimagined motion graphics from the perspective of modern software architecture: modular blocks, deterministic state, and instantaneous GPU feedback.
          </p>
        </div>

        {/* 4 Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tenets.map((tenet) => (
            <div
              key={tenet.num}
              className="p-8 rounded-2xl bg-[#141416] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {tenet.icon}
                  </div>
                  <span className="font-mono text-sm text-[#D6FF62] font-semibold">
                    TENET {tenet.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F4F1EB] mb-2">
                  {tenet.title}
                </h3>
                <p className="text-sm text-[#A4A1A0] leading-relaxed">
                  {tenet.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Architecture Callout Box */}
        <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#18181C] to-[#121214] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6FF62]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-wider">
              Designed For Next-Generation Creative Studios
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              &ldquo;Nothing simply appears. Everything transforms.&rdquo;
            </h3>
            <p className="text-sm text-[#A4A1A0] leading-relaxed">
              Every element on this platform is engineered with purpose. When you modify an easing curve or shift an accent color, you aren&apos;t just styling a card—you are configuring an interconnected creative instrument.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
