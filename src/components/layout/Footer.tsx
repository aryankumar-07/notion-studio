'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Terminal, Shield, FileText } from 'lucide-react';
import { Modal } from '../ui/Modal';

export function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10 pt-16 pb-12 text-[#A4A1A0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-[#F4F1EB] group">
              <div className="w-8 h-8 rounded-lg bg-[#1C1C20] border border-white/15 flex items-center justify-center text-[#D6FF62]">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold tracking-tight text-base text-[#F4F1EB]">
                MOTION<span className="text-[#D6FF62]">FORM</span>
              </span>
            </Link>
            <p className="text-sm text-[#A4A1A0] max-w-sm leading-relaxed">
              The browser-based creative motion platform. Reusable blocks, programmable shader effects, and timeline composition designed for modern digital storytellers.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D6FF62] bg-[#141416] border border-white/10 px-3 py-1.5 rounded-md w-fit">
              <Terminal className="w-3.5 h-3.5" />
              <span>GPU Accelerated · Local Pipeline · No Cloud Queue</span>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F1EB]">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-[#F4F1EB] transition-colors">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="/blocks" className="hover:text-[#F4F1EB] transition-colors">
                  Creative Blocks
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-[#F4F1EB] transition-colors">
                  Template Library
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#F4F1EB] transition-colors">
                  Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Workflow & Studio */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F1EB]">Studio</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/studio" className="hover:text-[#F4F1EB] transition-colors">
                  Architecture Story
                </Link>
              </li>
              <li>
                <Link href="/blocks" className="hover:text-[#F4F1EB] transition-colors">
                  Component Graph
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-[#F4F1EB] transition-colors">
                  Showcase Reel
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#F4F1EB] transition-colors">
                  Creator Collective
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F1EB]">Transparency</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-[#F4F1EB] transition-colors text-left cursor-pointer"
                >
                  Privacy Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-[#F4F1EB] transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <Link href="/studio" className="hover:text-[#F4F1EB] transition-colors">
                  Open Standards
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6E6D70] gap-4">
          <div>
            © 2026 MOTIONFORM Systems. All rights reserved. Original creative software implementation.
          </div>
          <div className="flex items-center gap-4">
            <span>Client-side WebAssembly & Canvas Pipeline</span>
            <span>·</span>
            <span>Zero Tracking Telemetry</span>
          </div>
        </div>
      </div>

      {/* Legal Transparency Modals */}
      <Modal
        isOpen={legalModal === 'privacy'}
        onClose={() => setLegalModal(null)}
        title="Privacy Protocol & Local Data Handling"
      >
        <div className="space-y-4 text-sm text-[#A4A1A0] leading-relaxed">
          <p>
            MOTIONFORM operates on a strict <strong className="text-[#F4F1EB]">local-first creative computing model</strong>. Your project compositions, imported video clips, audio tracks, and custom shader configurations remain stored directly in your browser&apos;s local IndexedDB and OPFS storage.
          </p>
          <p>
            No video footage or proprietary assets are uploaded to remote servers during composition or export unless you deliberately choose to publish a cloud-hosted template link.
          </p>
          <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10 flex items-center gap-2.5 text-xs text-[#F4F1EB]">
            <Shield className="w-4 h-4 text-[#D6FF62] shrink-0" />
            <span>Telemetry is disabled by default across all tiers.</span>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={legalModal === 'terms'}
        onClose={() => setLegalModal(null)}
        title="Terms of Creative Software Use"
      >
        <div className="space-y-4 text-sm text-[#A4A1A0] leading-relaxed">
          <p>
            All video files, animations, and graphic compositions rendered using MOTIONFORM are 100% royalty-free and owned entirely by you, for commercial and personal usage across any media channel.
          </p>
          <p>
            Templates and creative blocks bundled with the Explorer, Creator, and Studio plans may be remixed and published freely without licensing fees or watermarks.
          </p>
          <div className="p-3 bg-[#1C1C20] rounded-lg border border-white/10 flex items-center gap-2.5 text-xs text-[#F4F1EB]">
            <FileText className="w-4 h-4 text-[#D6FF62] shrink-0" />
            <span>Commercial rights are retained across all exported media artifacts.</span>
          </div>
        </div>
      </Modal>
    </footer>
  );
}
