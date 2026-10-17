'use client';

import { useState, useEffect } from 'react';
import { OakinsLogo } from './OakinsLogo';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6EBDD]/90 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(46,31,27,0.06)] border-b border-[#2E1F1B]/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center transition-opacity hover:opacity-90"
          aria-label="Oakins Home"
        >
          <OakinsLogo variant="dark" iconSize={36} />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[#FAF4EB]/80 border border-[#2E1F1B]/10 rounded-full px-3 py-1.5 shadow-sm backdrop-blur-sm"
          aria-label="Main Navigation"
        >
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-[#2E1F1B]/75 hover:text-[#2E1F1B] hover:bg-[#EBD7B7]/40 px-4 py-2 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Capacity pill */}
          {SITE_CONFIG.isCapacityActive && (
            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#2E1F1B]/70 bg-[#FAF4EB] border border-[#2E1F1B]/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E3A23C] animate-pulse" />
              <span>{SITE_CONFIG.capacityStatement}</span>
            </div>
          )}

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#2E1F1B] text-[#F6EBDD] hover:bg-[#E3A23C] hover:text-[#2E1F1B] px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-xs font-bold bg-[#2E1F1B] text-[#F6EBDD] px-3.5 py-2 rounded-full hover:bg-[#E3A23C] hover:text-[#2E1F1B] transition-colors"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2E1F1B] hover:bg-[#EBD7B7]/50 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF4EB] border-b border-[#2E1F1B]/10 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2E1F1B] py-2.5 border-b border-[#2E1F1B]/5 hover:text-[#E3A23C] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {SITE_CONFIG.isCapacityActive && (
                <div className="flex items-center gap-2 text-xs font-medium text-[#2E1F1B]/70 py-1">
                  <span className="w-2 h-2 rounded-full bg-[#E3A23C]" />
                  <span>{SITE_CONFIG.capacityStatement}</span>
                </div>
              )}
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#2E1F1B] bg-[#EBD7B7] py-3 rounded-xl hover:bg-[#D2B07A] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2E1F1B]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-bold bg-[#2E1F1B] text-[#F6EBDD] py-3 rounded-xl hover:bg-[#E3A23C] hover:text-[#2E1F1B] transition-colors"
              >
                <span>Book Free 20-Min Check-up</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
