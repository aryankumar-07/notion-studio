import { Metadata } from 'next';
import { Layers, Cpu, Sparkles, Sliders, Palette, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Engine Features — MOTIONFORM',
  description: 'Explore the modular architecture, GPU shader pipeline, and client-side rendering capabilities of MOTIONFORM.',
};

export default function FeaturesPage() {
  const featuresList = [
    {
      icon: <Layers className="w-6 h-6 text-[#D6FF62]" />,
      title: 'Modular Creative Block Graph',
      tag: 'ARCHITECTURE',
      description: 'Deconstruct complex animations into atomic visual components. Every block has typed parameters, exposed easing curves, and clean composability.',
      details: [
        'Over 140+ motion primitives out of the box',
        'Custom block builder with parameter schema validation',
        'Spring physics and cubic-bezier interpolation',
        'Zero code required for visual tweaking',
      ],
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#4E95FF]" />,
      title: 'Local GPU Acceleration Engine',
      tag: 'PERFORMANCE',
      description: 'Render and composite 4K 60fps frames entirely on your local machine using modern WebGL 2.0 and WebGPU APIs.',
      details: [
        'Zero cloud queue wait times',
        'Direct MP4, WebM, and ProRes master exports',
        'Memory-optimized canvas pipeline with frame caching',
        'Alpha channel transparency support',
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF5E3A]" />,
      title: 'Hardware Shader Pipeline',
      tag: 'VISUAL EFFECTS',
      description: 'Filmic chromatic aberration, analog 35mm grain, volumetric glow fields, and slit-scan displacement shaders running at native monitor refresh rates.',
      details: [
        'Custom GLSL fragment shader injection',
        'Real-time multi-pass post-processing',
        'SVG displacement and matrix rasters',
        'Non-destructive effect stacking',
      ],
    },
    {
      icon: <Sliders className="w-6 h-6 text-[#D6FF62]" />,
      title: 'Non-Destructive Layered Timeline',
      tag: 'WORKFLOW',
      description: 'Multi-track timeline with instant scrubbing, independent layer muting, keyframe snapping, and synchronized audio waveform stems.',
      details: [
        'Sub-frame playhead precision',
        'Visual track grouping and nesting',
        'Real-time clip speed ramping',
        'Dynamic parameter automation curves',
      ],
    },
    {
      icon: <Palette className="w-6 h-6 text-[#00F0FF]" />,
      title: 'Synchronized Brand Kit Engine',
      tag: 'DESIGN TOKENS',
      description: 'Tie your entire video production to centralized CSS custom properties and colorway tokens. Shift brand palettes across all scenes in a single click.',
      details: [
        'Synchronized typography scales and weights',
        'Instant multi-channel social aspect ratio re-framing',
        'Reusable studio asset libraries',
        'Hex, HSL, and OKLCH color governance',
      ],
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FFDF00]" />,
      title: 'Headless Scripting & Automation',
      tag: 'DEVELOPER API',
      description: 'Generate dynamic video variations programmatically. Pass JSON payloads to render hundreds of personalized campaign outputs.',
      details: [
        'Typed JavaScript/TypeScript parameter interface',
        'CLI rendering daemon for CI/CD pipelines',
        'Dynamic text, image, and color injection',
        'WebAssembly video encoding backend',
      ],
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0B] text-[#F4F1EB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-3">
            System Architecture
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            Engineered for creative precision.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#A4A1A0] leading-relaxed">
            Discover the six core pillars that make MOTIONFORM the fastest, most flexible platform for digital motion design.
          </p>
        </div>

        {/* Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuresList.map((feat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#141416] p-7 flex flex-col justify-between hover:border-white/20 transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A4A1A0]">
                    {feat.tag}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#F4F1EB] mb-2">
                  {feat.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A4A1A0] leading-relaxed mb-6">
                  {feat.description}
                </p>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  {feat.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6FF62]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance & Local Privacy Callout Banner */}
        <div className="rounded-2xl border border-white/15 bg-gradient-to-r from-[#18181C] via-[#141416] to-[#18181C] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D6FF62]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% PRIVATE CLIENT-SIDE ENGINE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              No cloud queue. No footage telemetry.
            </h3>
            <p className="text-sm text-[#A4A1A0] leading-relaxed">
              Your assets and project timelines remain exclusively within your browser session. Test the complete experience with zero signups or credit cards required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <Button href="/templates" variant="primary" size="lg">
              Launch Studio
            </Button>
            <Button href="/blocks" variant="secondary" size="lg">
              Inspect Block Catalog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
