'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { OakinsLogo, BrandChevrons } from './OakinsLogo';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E1F1B] text-[#F6EBDD] pt-16 pb-12 border-t border-[#EBD7B7]/10 relative overflow-hidden">
      {/* Decorative Brand Chevrons */}
      <div className="absolute top-10 right-8 opacity-10 pointer-events-none hidden sm:block" aria-hidden="true">
        <BrandChevrons count={6} size={24} color="#E3A23C" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F6EBDD]/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <OakinsLogo variant="light" iconSize={36} className="mb-4" />
            <p className="text-base font-heading font-medium text-[#EBD7B7] mb-3">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#F6EBDD]/70 max-w-sm leading-relaxed mb-6">
              Practical digital solutions for growing businesses. Helping shops, clinics, and independent professionals organise operations, build an online presence, and reduce manual work.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#EBD7B7]">
              <MapPin className="w-3.5 h-3.5 text-[#E3A23C]" />
              <span>{SITE_CONFIG.contact.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E3A23C] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#F6EBDD]/80 hover:text-[#E3A23C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E3A23C] block mb-4">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F6EBDD]/80 hover:text-[#E3A23C] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: {SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 text-[#F6EBDD]/80 hover:text-[#E3A23C] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E3A23C]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="flex items-center gap-2.5 text-[#F6EBDD]/80 hover:text-[#E3A23C] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E3A23C]" />
                <span>{SITE_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#FAF4EB]/5 border border-[#F6EBDD]/10">
              <span className="text-[11px] font-mono text-[#E3A23C] block mb-1">
                Client Availability
              </span>
              <p className="text-xs text-[#EBD7B7]">
                {SITE_CONFIG.capacityStatement}. We partner with 2 businesses at a time to ensure dedicated attention.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line: Copyright & Discreet Toolkit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6EBDD]/50">
          <p>© {currentYear} Oakins. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Engineered with Next.js, TypeScript & modern web standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
