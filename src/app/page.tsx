import { Hero } from '@/components/home/Hero';
import { CredibilityStrip } from '@/components/home/CredibilityStrip';
import { ProductThesis } from '@/components/home/ProductThesis';
import { Playground } from '@/components/home/Playground';
import { TimelineSection } from '@/components/home/TimelineSection';
import { CreateModes } from '@/components/home/CreateModes';
import { TemplateGallery } from '@/components/home/TemplateGallery';
import { AdvancedEffects } from '@/components/home/AdvancedEffects';
import { BrandSystem } from '@/components/home/BrandSystem';
import { Philosophy } from '@/components/home/Philosophy';
import { PricingSection } from '@/components/home/PricingSection';
import { FinalCta } from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CredibilityStrip />
      <ProductThesis />
      <Playground />
      <TimelineSection />
      <CreateModes />
      <TemplateGallery />
      <AdvancedEffects />
      <BrandSystem />
      <Philosophy />
      <PricingSection />
      <FinalCta />
    </div>
  );
}
