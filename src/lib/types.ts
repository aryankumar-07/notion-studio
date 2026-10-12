export interface CreativeBlock {
  id: string;
  name: string;
  category: 'typography' | 'fx' | 'geometry' | 'distortion' | 'audio';
  description: string;
  complexity: 'Atomic' | 'Composite' | 'System';
  tags: string[];
  parameters: {
    name: string;
    key: string;
    type: 'range' | 'text' | 'color' | 'select';
    default: string | number | boolean;
    min?: number;
    max?: number;
    step?: number;
    options?: string[];
  }[];
}

export interface TemplateItem {
  id: string;
  title: string;
  category: 'Product Launch' | 'Kinetic Typography' | 'Fashion & Editorial' | 'Music Visuals' | '3D & Geometric' | 'Social Campaign';
  description: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  duration: string;
  blocksCount: number;
  complexity: 'Beginner' | 'Advanced' | 'Studio Master';
  tags: string[];
  accentColor: string;
  previewType: 'kinetic' | 'glow' | 'matrix' | 'prism' | 'film' | 'editorial' | 'audio' | 'glitch';
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPriceMonthly: number;
  featured?: boolean;
  badge?: string;
  features: string[];
  specs: {
    resolution: string;
    exportSpeed: string;
    cloudStorage: string;
    reusableBlocks: string;
    teamSeats: string;
    customShaders: boolean;
  };
}

export interface TimelineClip {
  id: string;
  trackId: number;
  name: string;
  type: 'video' | 'text' | 'fx' | 'audio';
  startTime: number;
  duration: number;
  color: string;
  active?: boolean;
}
