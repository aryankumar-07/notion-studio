'use client';

import React, { useState, useMemo } from 'react';
import { TEMPLATES } from '@/lib/data';
import { TemplateItem } from '@/lib/types';
import { Search, Filter, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

export function TemplateGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTemplateModal, setActiveTemplateModal] = useState<TemplateItem | null>(null);

  const categories = [
    'All',
    'Product Launch',
    'Kinetic Typography',
    'Fashion & Editorial',
    'Music Visuals',
    '3D & Geometric',
    'Social Campaign',
  ];

  // Real-time filtering
  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((tpl) => {
      const matchesCategory = selectedCategory === 'All' || tpl.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tpl.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/10 relative overflow-hidden" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
              Template Discovery
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB]">
              Start with momentum.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A4A1A0] max-w-xl">
              Curated, production-tested master compositions. Every template is completely modular and ready to customize.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A4A1A0] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search templates, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141416] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#F4F1EB] placeholder-[#6E6D70] focus-visible:outline-2 focus-visible:outline-[#D6FF62]"
              aria-label="Search templates"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <Filter className="w-3.5 h-3.5 text-[#A4A1A0] shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D6FF62] text-black font-semibold shadow-sm'
                  : 'bg-[#141416] text-[#A4A1A0] border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template Cards Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => setActiveTemplateModal(template)}
                className="group rounded-2xl border border-white/10 bg-[#141416] overflow-hidden hover:border-white/25 transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
              >
                {/* Template Visual Preview Canvas Box */}
                <div className="relative h-48 bg-[#09090B] border-b border-white/10 flex items-center justify-center overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Dynamic Abstract Preview Visuals based on previewType */}
                  {template.previewType === 'prism' && (
                    <div className="w-20 h-20 border-2 border-[#D6FF62] bg-[#D6FF62]/10 rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-[0_0_20px_rgba(214,255,98,0.2)]" />
                  )}
                  {template.previewType === 'kinetic' && (
                    <div className="text-center font-mono font-black text-2xl text-[#F4F1EB] tracking-tighter group-hover:tracking-widest transition-all duration-500">
                      MONO<span className="text-[#D6FF62]">LITH</span>
                    </div>
                  )}
                  {template.previewType === 'glow' && (
                    <div className="w-28 h-28 rounded-full blur-2xl bg-gradient-to-tr from-[#FF5E3A] to-[#D6FF62] opacity-70 group-hover:scale-125 transition-transform duration-500" />
                  )}
                  {template.previewType === 'audio' && (
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 70, 95, 60, 85, 50, 90, 65].map((h, idx) => (
                        <div
                          key={idx}
                          className="w-2 bg-[#4E95FF] rounded-t group-hover:bg-[#D6FF62] transition-colors"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  )}
                  {template.previewType === 'matrix' && (
                    <div className="grid grid-cols-4 gap-2">
                      {Array.from({ length: 16 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="w-2 h-2 rounded-full bg-[#00F0FF] group-hover:scale-150 transition-transform"
                        />
                      ))}
                    </div>
                  )}
                  {template.previewType === 'glitch' && (
                    <div className="font-mono text-xl font-black text-yellow-400 tracking-tight skew-x-12 group-hover:-skew-x-12 transition-transform">
                      FAST_CUT // REEL
                    </div>
                  )}
                  {template.previewType === 'film' && (
                    <div className="w-32 h-20 rounded border border-white/20 bg-white/5 flex items-center justify-center text-[10px] font-mono text-[#A4A1A0]">
                      STRATA_4K.RAW
                    </div>
                  )}
                  {template.previewType === 'editorial' && (
                    <div className="text-xl font-bold tracking-tight text-[#F4F1EB] group-hover:text-[#D6FF62] transition-colors">
                      MANIFESTO
                    </div>
                  )}

                  {/* Top Aspect ratio & Duration pill badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-white border border-white/10 backdrop-blur-sm">
                      {template.aspectRatio}
                    </span>
                    <span className="text-[10px] font-mono bg-black/70 px-2 py-0.5 rounded text-[#D6FF62] border border-white/10 backdrop-blur-sm">
                      {template.duration}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Eye className="w-4 h-4 text-[#D6FF62]" />
                    <span>Inspect Template</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A4A1A0] mb-1.5">
                      <span>{template.category}</span>
                      <span>{template.blocksCount} Blocks</span>
                    </div>
                    <h3 className="font-semibold text-[#F4F1EB] text-base group-hover:text-[#D6FF62] transition-colors line-clamp-1">
                      {template.title}
                    </h3>
                    <p className="text-xs text-[#A4A1A0] mt-2 line-clamp-2 leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                    {template.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-[#141416] rounded-2xl border border-white/10 p-8">
            <p className="text-base text-[#F4F1EB] font-medium">No templates match &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-[#A4A1A0] mt-1">Try searching for keywords like &ldquo;launch&rdquo;, &ldquo;kinetic&rdquo;, or &ldquo;editorial&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Template Detail Inspection Modal */}
      {activeTemplateModal && (
        <Modal
          isOpen={!!activeTemplateModal}
          onClose={() => setActiveTemplateModal(null)}
          title={activeTemplateModal.title}
        >
          <div className="space-y-6">
            <div className="h-44 rounded-xl bg-[#08080A] border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-50" />
              <div className="text-center z-10">
                <span className="text-xs font-mono text-[#D6FF62] block mb-1">
                  TEMPLATE ARCHITECTURE SPECIFICATION
                </span>
                <span className="text-2xl font-bold text-white uppercase">
                  {activeTemplateModal.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A4A1A0] leading-relaxed">
              {activeTemplateModal.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">ASPECT RATIO</span>
                <span className="text-[#D6FF62] font-bold text-sm">{activeTemplateModal.aspectRatio}</span>
              </div>
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">TIMECODE</span>
                <span className="text-white font-bold text-sm">{activeTemplateModal.duration}</span>
              </div>
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">BLOCKS ATTACHED</span>
                <span className="text-white font-bold text-sm">{activeTemplateModal.blocksCount} Blocks</span>
              </div>
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">TIER LEVEL</span>
                <span className="text-white font-bold text-sm">{activeTemplateModal.complexity}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#A4A1A0]">
                Pre-configured for GPU-accelerated local rendering.
              </div>
              <Button
                href="/templates"
                variant="primary"
                size="md"
                onClick={() => setActiveTemplateModal(null)}
              >
                Open in Studio Timeline
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
