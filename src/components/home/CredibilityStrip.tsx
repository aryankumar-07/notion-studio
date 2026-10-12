import React from 'react';

const CREATIVE_PARTNERS = [
  { name: 'KINETIC LABS', tag: 'Motion Studio · Tokyo' },
  { name: 'STUDIO VELOCITY', tag: 'Creative Engineering · Berlin' },
  { name: 'VECTOR FORM', tag: 'Brand Architecture · London' },
  { name: 'CHROMA DISPATCH', tag: 'Visual Effects · New York' },
  { name: 'NTH LEVEL', tag: 'Design Systems · Stockholm' },
  { name: 'AXIS MOTION', tag: 'Cinematic Direction · Seoul' },
  { name: 'STRATA DYNAMICS', tag: 'Spatial Computing · San Francisco' },
];

export function CredibilityStrip() {
  return (
    <section className="relative py-12 border-y border-white/10 bg-[#0D0D0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs font-mono text-[#A4A1A0] uppercase tracking-widest text-center">
          Trusted by pioneering motion designers, independent creators, and global creative studios
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0D0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0D0F] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {/* Primary list */}
          {CREATIVE_PARTNERS.map((partner, index) => (
            <div
              key={`partner-1-${index}`}
              className="flex items-center gap-3 shrink-0 text-[#F4F1EB] opacity-70 hover:opacity-100 transition-opacity select-none group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#D6FF62]/40 group-hover:bg-[#D6FF62] transition-colors" />
              <div className="flex flex-col">
                <span className="font-mono font-bold tracking-tight text-sm">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-[#A4A1A0]">
                  {partner.tag}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicated list for continuous seamless loop */}
          {CREATIVE_PARTNERS.map((partner, index) => (
            <div
              key={`partner-2-${index}`}
              className="flex items-center gap-3 shrink-0 text-[#F4F1EB] opacity-70 hover:opacity-100 transition-opacity select-none group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#D6FF62]/40 group-hover:bg-[#D6FF62] transition-colors" />
              <div className="flex flex-col">
                <span className="font-mono font-bold tracking-tight text-sm">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-[#A4A1A0]">
                  {partner.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
