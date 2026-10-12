'use client';

import React, { useState, useMemo } from 'react';
import { TEMPLATES } from '@/lib/data';
import { TemplateItem } from '@/lib/types';
import { Search, Eye } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRatio, setSelectedRatio] = useState<string>('All');
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

  const aspectRatios = ['All', '16:9', '9:16', '1:1'];

  const filteredTemplates = useMemo(() => {
    return TEMPLATES.filter((tpl) => {
      const matchCat = selectedCategory === 'All' || tpl.category === selectedCategory;
      const matchRatio = selectedRatio === 'All' || tpl.aspectRatio === selectedRatio;
      const matchSearch =
        searchQuery.trim() === '' ||
        tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tpl.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchRatio && matchSearch;
    });
  }, [selectedCategory, selectedRatio, searchQuery]);

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0B] text-[#F4F1EB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
              Studio Template Discovery
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Master Compositions.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#A4A1A0] max-w-xl">
              Jumpstart your visual storytelling. Every project is crafted by digital art directors, completely modular, and ready for parameter tuning.
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

        {/* Filters Bar: Category + Aspect Ratio */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
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

          {/* Aspect Ratio Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-[#A4A1A0]">Aspect:</span>
            {aspectRatios.map((ratio) => (
              <button
                key={ratio}
                onClick={() => setSelectedRatio(ratio)}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border ${
                  selectedRatio === ratio
                    ? 'bg-white text-black font-bold border-white'
                    : 'bg-[#141416] text-[#A4A1A0] border-white/10 hover:text-white'
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>

        {/* Template Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => setActiveTemplateModal(template)}
                className="group rounded-2xl border border-white/10 bg-[#141416] overflow-hidden hover:border-white/25 transition-all duration-300 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Preview Box */}
                <div className="relative h-56 bg-[#09090B] border-b border-white/10 flex items-center justify-center overflow-hidden p-6">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Visual preview shapes */}
                  <div className="text-center z-10">
                    <span className="text-xs font-mono text-[#D6FF62] block mb-2">
                      {template.category}
                    </span>
                    <span className="font-mono font-black text-2xl uppercase tracking-tight text-white group-hover:text-[#D6FF62] transition-colors">
                      {template.title}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-white border border-white/15">
                      {template.aspectRatio}
                    </span>
                    <span className="text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-[#D6FF62] border border-white/15">
                      {template.duration}
                    </span>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Eye className="w-4 h-4 text-[#D6FF62]" />
                    <span>Open Template Inspector</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#A4A1A0] mb-2">
                      <span>{template.complexity}</span>
                      <span>{template.blocksCount} Blocks</span>
                    </div>

                    <h3 className="font-semibold text-lg text-[#F4F1EB] group-hover:text-[#D6FF62] transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A4A1A0] mt-2 leading-relaxed">
                      {template.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
                    {template.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-white/60 bg-white/5 px-2 py-0.5 rounded"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#141416] rounded-2xl border border-white/10 p-8">
            <p className="text-base text-white font-medium">No templates match current filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRatio('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal Inspector */}
      {activeTemplateModal && (
        <Modal
          isOpen={!!activeTemplateModal}
          onClose={() => setActiveTemplateModal(null)}
          title={activeTemplateModal.title}
        >
          <div className="space-y-6">
            <p className="text-sm text-[#A4A1A0] leading-relaxed">
              {activeTemplateModal.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">ASPECT</span>
                <span className="text-[#D6FF62] font-bold text-sm">{activeTemplateModal.aspectRatio}</span>
              </div>
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">DURATION</span>
                <span className="text-white font-bold text-sm">{activeTemplateModal.duration}</span>
              </div>
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">BLOCKS</span>
                <span className="text-white font-bold text-sm">{activeTemplateModal.blocksCount}</span>
              </div>
              <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10">
                <span className="text-[#A4A1A0] block">LEVEL</span>
                <span className="text-white font-bold text-sm">{activeTemplateModal.complexity}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <Button
                variant="primary"
                size="md"
                href="/#timeline"
                onClick={() => setActiveTemplateModal(null)}
              >
                Load into Studio Timeline
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
