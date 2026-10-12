'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { Menu, X, Sparkles, Layers } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '/features', label: 'Features' },
    { href: '/blocks', label: 'Blocks' },
    { href: '/templates', label: 'Templates' },
    { href: '/studio', label: 'Studio' },
    { href: '/pricing', label: 'Pricing' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#F4F1EB] group focus-visible:outline-2 focus-visible:outline-[#D6FF62] rounded-md"
            aria-label="MOTIONFORM Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1C1C20] border border-white/15 flex items-center justify-center text-[#D6FF62] group-hover:border-[#D6FF62]/50 group-hover:shadow-[0_0_15px_rgba(214,255,98,0.25)] transition-all">
              <Layers className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-tight text-sm text-[#F4F1EB] group-hover:text-white transition-colors">
                MOTION<span className="text-[#D6FF62]">FORM</span>
              </span>
              <span className="text-[9px] font-mono text-[#A4A1A0] tracking-widest uppercase">
                Creative Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#141416]/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'text-black font-semibold bg-[#D6FF62] shadow-[0_0_12px_rgba(214,255,98,0.3)]'
                      : 'text-[#A4A1A0] hover:text-[#F4F1EB] hover:bg-white/[0.06]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/blocks"
              size="sm"
              variant="secondary"
              className="hidden lg:inline-flex border-white/15 text-xs font-mono"
              icon={<Sparkles className="w-3.5 h-3.5 text-[#D6FF62]" />}
            >
              Explore Blocks
            </Button>
            <Button
              href="/templates"
              size="sm"
              variant="primary"
              className="text-xs"
            >
              Open Studio
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A4A1A0] hover:text-[#F4F1EB] hover:bg-white/10 md:hidden focus-visible:outline-2 focus-visible:outline-[#D6FF62] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0A0A0B]/98 backdrop-blur-xl md:hidden pt-24 px-6 pb-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="text-xs font-mono text-[#A4A1A0] uppercase tracking-widest border-b border-white/10 pb-2">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-semibold tracking-tight transition-colors py-1 ${
                      isActive ? 'text-[#D6FF62]' : 'text-[#F4F1EB] hover:text-[#D6FF62]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <Button href="/templates" variant="primary" size="lg" className="w-full">
              Launch Motion Studio
            </Button>
            <Button href="/pricing" variant="secondary" size="lg" className="w-full">
              View Plans & Pricing
            </Button>
            <div className="text-center pt-2 text-xs font-mono text-[#A4A1A0]">
              MOTIONFORM Engine v2.4 · 100% Client-Side Video Architecture
            </div>
          </div>
        </div>
      )}
    </>
  );
}
