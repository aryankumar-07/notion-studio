'use client';

import React, { useState } from 'react';
import { PRICING_TIERS } from '@/lib/data';
import { PricingTier } from '@/lib/types';
import { Check, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [selectedPlanModal, setSelectedPlanModal] = useState<PricingTier | null>(null);

  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-white/10 relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#D6FF62] uppercase tracking-widest mb-2">
            Pricing & Plans
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F1EB]">
            Predictable plans. Zero render queues.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A4A1A0]">
            Export locally on your GPU for free, or upgrade for cloud collaboration, 4K/8K master renders, and custom shader pipelines.
          </p>

          {/* Billing Interval Toggle (Monthly vs Annual) */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-[#141416] border border-white/15">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors cursor-pointer ${
                !isAnnual
                  ? 'bg-[#D6FF62] text-black font-bold shadow-sm'
                  : 'text-[#A4A1A0] hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors flex items-center gap-2 cursor-pointer ${
                isAnnual
                  ? 'bg-[#D6FF62] text-black font-bold shadow-sm'
                  : 'text-[#A4A1A0] hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 text-black font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {PRICING_TIERS.map((tier) => {
            const displayPrice = isAnnual ? tier.annualPriceMonthly : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-200 relative ${
                  tier.featured
                    ? 'bg-[#18181C] border-[#D6FF62] shadow-[0_0_35px_rgba(214,255,98,0.15)] ring-1 ring-[#D6FF62]/30'
                    : 'bg-[#141416] border-white/10 hover:border-white/20'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#D6FF62] text-black text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#F4F1EB]">{tier.name}</h3>
                  </div>

                  <p className="text-xs text-[#A4A1A0] min-h-[36px] leading-relaxed mb-6">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-[#F4F1EB] font-mono">
                        ${displayPrice}
                      </span>
                      <span className="text-xs font-mono text-[#A4A1A0]">
                        / month
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#6E6D70] block mt-1">
                      {isAnnual ? 'Billed annually' : 'Billed monthly'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono text-[#D6FF62] uppercase tracking-wider block font-semibold">
                      Included Capabilities:
                    </span>
                    {tier.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs text-[#F4F1EB]">
                        <Check className="w-4 h-4 text-[#D6FF62] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant={tier.featured ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full text-xs font-mono"
                    onClick={() => setSelectedPlanModal(tier)}
                  >
                    Select {tier.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix Table */}
        <div className="rounded-2xl border border-white/15 bg-[#141416] p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-[#F4F1EB] mb-6">
            Detailed Technical Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-[#A4A1A0]">
                  <th className="py-3 pr-4">SPECIFICATION</th>
                  <th className="py-3 px-4">EXPLORER</th>
                  <th className="py-3 px-4 text-[#D6FF62]">CREATOR PRO</th>
                  <th className="py-3 px-4">STUDIO</th>
                  <th className="py-3 pl-4">ENTERPRISE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#F4F1EB]">
                <tr>
                  <td className="py-3 pr-4 text-[#A4A1A0]">Max Resolution</td>
                  <td className="py-3 px-4">1080p FHD</td>
                  <td className="py-3 px-4 text-[#D6FF62]">4K UHD 60fps</td>
                  <td className="py-3 px-4">8K Cinema Master</td>
                  <td className="py-3 pl-4">Uncapped / RAW</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-[#A4A1A0]">Export Engine</td>
                  <td className="py-3 px-4">Client GPU 1x</td>
                  <td className="py-3 px-4 text-[#D6FF62]">Accelerated 3.5x</td>
                  <td className="py-3 px-4">Cloud Cluster 10x</td>
                  <td className="py-3 pl-4">Dedicated Nodes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-[#A4A1A0]">Block Access</td>
                  <td className="py-3 px-4">25 Core Blocks</td>
                  <td className="py-3 px-4 text-[#D6FF62]">All 140+ Blocks</td>
                  <td className="py-3 px-4">Unlimited + Custom</td>
                  <td className="py-3 pl-4">Bespoke Library</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-[#A4A1A0]">Custom Shaders</td>
                  <td className="py-3 px-4 text-red-400">No</td>
                  <td className="py-3 px-4 text-[#D6FF62]">Yes (GLSL)</td>
                  <td className="py-3 px-4">Yes (GLSL + WGSL)</td>
                  <td className="py-3 pl-4">Yes + Custom Pass</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-[#A4A1A0]">Seats Included</td>
                  <td className="py-3 px-4">1 Solo</td>
                  <td className="py-3 px-4 text-[#D6FF62]">1 Pro</td>
                  <td className="py-3 px-4">5 Studio Seats</td>
                  <td className="py-3 pl-4">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Plan Selection Confirmation Modal (Honest local demonstration note) */}
      {selectedPlanModal && (
        <Modal
          isOpen={!!selectedPlanModal}
          onClose={() => setSelectedPlanModal(null)}
          title={`Plan Setup: ${selectedPlanModal.name}`}
        >
          <div className="space-y-4 text-sm text-[#A4A1A0] leading-relaxed">
            <div className="p-4 bg-[#1C1C20] rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#D6FF62] block">SELECTED TIER</span>
                <span className="text-lg font-bold text-white">{selectedPlanModal.name}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-[#D6FF62] font-mono">
                  ${isAnnual ? selectedPlanModal.annualPriceMonthly : selectedPlanModal.monthlyPrice}
                </span>
                <span className="text-xs font-mono text-[#A4A1A0] block">/mo ({isAnnual ? 'annual' : 'monthly'})</span>
              </div>
            </div>

            <p>
              You are activating the <strong className="text-[#F4F1EB]">{selectedPlanModal.name}</strong> tier with {selectedPlanModal.specs.resolution} export capabilities and {selectedPlanModal.specs.reusableBlocks} access.
            </p>

            <div className="p-3 bg-[#18181C] rounded-lg border border-white/10 flex items-center gap-2.5 text-xs text-[#F4F1EB]">
              <ShieldCheck className="w-4 h-4 text-[#D6FF62] shrink-0" />
              <span>
                <strong>Demonstration Mode:</strong> No real payment gateway is integrated. Your selected tier permissions are stored locally in your browser session.
              </span>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={() => setSelectedPlanModal(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="/templates"
                onClick={() => setSelectedPlanModal(null)}
              >
                Proceed to Studio
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
