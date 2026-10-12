import { Metadata } from 'next';
import { PricingSection } from '@/components/home/PricingSection';

export const metadata: Metadata = {
  title: 'Pricing & Plans — MOTIONFORM',
  description: 'Compare MOTIONFORM plans: Explorer, Creator Pro, Studio Collective, and Enterprise. Zero render queues and local GPU acceleration.',
};

export default function PricingPage() {
  const faqs = [
    {
      q: 'Do I need a high-end dedicated GPU to use MOTIONFORM?',
      a: 'No. Our WebGL and WebAssembly pipeline is engineered to run smoothly on modern integrated graphics (including Apple Silicon M-series chips and Intel Iris/Xe) as well as dedicated NVIDIA and AMD cards.',
    },
    {
      q: 'Can I export videos without watermarks on the free tier?',
      a: 'Yes. The Explorer tier allows 1080p 60fps exports completely watermark-free for personal and commercial usage.',
    },
    {
      q: 'How does local-first video rendering work?',
      a: 'Unlike traditional cloud editors that upload gigabytes of source footage to remote servers, MOTIONFORM computes and stitches frames directly in your local browser sandbox using WebGPU and WebCodecs.',
    },
    {
      q: 'Can I import my own custom fonts and 3D assets?',
      a: 'Yes. Creator Pro and Studio plans allow importing OTF/TTF/WOFF2 font families, custom SVG graphics, and GLTF/GLB 3D models directly into your timeline.',
    },
  ];

  return (
    <div className="pt-16 pb-24 bg-[#0A0A0B] text-[#F4F1EB] min-h-screen">
      <PricingSection />

      {/* Frequently Asked Questions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 border-t border-white/10 pt-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#141416] border border-white/10"
            >
              <h3 className="font-semibold text-base text-[#F4F1EB] mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A1A0] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
