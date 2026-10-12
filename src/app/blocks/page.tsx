'use client';

import React, { useState, useMemo } from 'react';
import { CREATIVE_BLOCKS } from '@/lib/data';
import { CreativeBlock } from '@/lib/types';
import { Search, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';

export default function BlocksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeBlockModal, setActiveBlockModal] = useState<CreativeBlock | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Primitives' },
    { id: 'typography', label: 'Kinetic Type' },
    { id: 'fx', label: 'Atmospheric FX' },
    { id: 'geometry', label: '3D & Geometry' },
    { id: 'distortion', label: 'Distortion & Warp' },
    { id: 'audio', label: 'Audio Reactive' },
  ];

  const filteredBlocks = useMemo(() => {
    return CREATIVE_BLOCKS.filter((block) => {
      const matchCat = selectedCategory === 'all' || block.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        block.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        block.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        block.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const copyCodeSnippet = (block: CreativeBlock) => {
    const snippet = `// MOTIONFORM Block Configuration: ${block.name}\nimport { ${block.name.replace(/\s+/g, '')} } from '@motionform/blocks';\n\nconst block = new ${block.name.replace(/\s+/g, '')}({\n  ${block.parameters.map(p => `${p.key}: ${JSON.stringify(p.default)}`).join(',\n  ')}\n});`;
    navigator.clipboard?.writeText(snippet);
    setCopiedId(block.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0B] text-[#F4F1EB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
              Modular Component Library
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Creative Blocks.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#A4A1A0] max-w-xl">
              Inspect our repository of reusable motion primitives. Drop them directly into your timeline or configure them with typed parameters.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A4A1A0] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search blocks by name, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141416] border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#F4F1EB] placeholder-[#6E6D70] focus-visible:outline-2 focus-visible:outline-[#D6FF62]"
              aria-label="Search blocks"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#D6FF62] text-black font-semibold shadow-sm'
                  : 'bg-[#141416] text-[#A4A1A0] border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlocks.map((block) => (
            <div
              key={block.id}
              className="rounded-2xl border border-white/10 bg-[#141416] p-6 flex flex-col justify-between hover:border-white/25 transition-all shadow-lg hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="accent" size="sm">
                    {block.complexity}
                  </Badge>
                  <span className="text-[11px] font-mono text-[#A4A1A0] uppercase">
                    {block.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#F4F1EB] mb-2">
                  {block.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#A4A1A0] leading-relaxed mb-6">
                  {block.description}
                </p>

                {/* Parameters Preview Box */}
                <div className="p-3 bg-[#0A0A0C] rounded-xl border border-white/10 space-y-2 mb-6">
                  <div className="text-[10px] font-mono text-[#D6FF62] uppercase tracking-wider flex items-center justify-between">
                    <span>Exposed Parameters:</span>
                    <span>{block.parameters.length} props</span>
                  </div>
                  {block.parameters.map((param) => (
                    <div
                      key={param.key}
                      className="flex items-center justify-between text-xs font-mono text-[#A4A1A0]"
                    >
                      <span>{param.name}:</span>
                      <span className="text-white font-semibold">
                        {String(param.default)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => copyCodeSnippet(block)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#A4A1A0] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedId === block.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D6FF62]" />
                      <span className="text-[#D6FF62]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>

                <Button
                  size="sm"
                  variant="secondary"
                  className="text-xs"
                  onClick={() => setActiveBlockModal(block)}
                >
                  Inspect Block
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Block Inspection Modal */}
      {activeBlockModal && (
        <Modal
          isOpen={!!activeBlockModal}
          onClose={() => setActiveBlockModal(null)}
          title={`Block Inspector: ${activeBlockModal.name}`}
        >
          <div className="space-y-6">
            <div className="p-4 bg-[#0A0A0C] rounded-xl border border-white/10 text-xs font-mono text-[#D6FF62]">
              BLOCK_ID: {activeBlockModal.id} · CLASSIFICATION: {activeBlockModal.complexity}
            </div>

            <p className="text-sm text-[#A4A1A0] leading-relaxed">
              {activeBlockModal.description}
            </p>

            <div>
              <h4 className="text-xs font-mono uppercase text-[#F4F1EB] mb-3">
                Parameter Schema & Default Values:
              </h4>
              <div className="space-y-2">
                {activeBlockModal.parameters.map((param) => (
                  <div
                    key={param.key}
                    className="p-3 bg-[#1C1C20] rounded-lg border border-white/10 flex items-center justify-between text-xs font-mono"
                  >
                    <div>
                      <span className="text-white font-bold block">{param.name}</span>
                      <span className="text-[#A4A1A0]">Key: &ldquo;{param.key}&rdquo; (type: {param.type})</span>
                    </div>
                    <span className="px-2 py-1 rounded bg-black/40 text-[#D6FF62] border border-white/10">
                      Default: {String(param.default)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <Button
                variant="primary"
                size="md"
                href="/#playground"
                onClick={() => setActiveBlockModal(null)}
              >
                Test in Live Playground
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
