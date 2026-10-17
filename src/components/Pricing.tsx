'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { Check, ArrowRight } from 'lucide-react';

export function Pricing() {
  const { packages, heading, subheading, note } = SITE_CONFIG.pricing;

  return (
    <section id="pricing" className="section-wrapper bg-[#FAF4EB] border-t border-[#2E1F1B]/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
            Pricing Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed mb-3">
            {subheading}
          </p>
          <p className="text-xs text-[#9B8C83] italic">
            * {note}
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.featured
                  ? 'bg-[#2E1F1B] text-[#F6EBDD] border-2 border-[#E3A23C] shadow-xl lg:-translate-y-2'
                  : 'bg-[#FFFFFF] text-[#2E1F1B] border border-[#2E1F1B]/10 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E3A23C] text-[#2E1F1B] font-bold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                  Most Popular for Small Businesses
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-heading font-bold ${pkg.featured ? 'text-[#F6EBDD]' : 'text-[#2E1F1B]'}`}>
                    {pkg.name}
                  </h3>
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${
                    pkg.featured ? 'bg-[#E3A23C]/20 text-[#E3A23C]' : 'bg-[#FAF4EB] text-[#6A5B53]'
                  }`}>
                    Package 0{idx + 1}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${pkg.featured ? 'text-[#EBD7B7]' : 'text-[#6A5B53]'}`}>
                  {pkg.tagline}
                </p>

                <div className={`p-3 rounded-xl mb-6 text-xs ${
                  pkg.featured ? 'bg-[#FFFFFF]/5 text-[#EBD7B7]' : 'bg-[#FAF4EB] text-[#6A5B53]'
                }`}>
                  <strong className="block font-semibold mb-0.5">Best For:</strong>
                  {pkg.idealFor}
                </div>

                <div className="mb-6 pb-6 border-b border-current/10">
                  <span className="text-2xl sm:text-3xl font-heading font-bold block">
                    {pkg.priceText}
                  </span>
                  <span className={`text-[11px] font-mono ${pkg.featured ? 'text-[#EBD7B7]/70' : 'text-[#9B8C83]'}`}>
                    Scope & requirements confirmed upfront
                  </span>
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <span className={`text-xs font-semibold uppercase tracking-wider block mb-3 ${
                    pkg.featured ? 'text-[#E3A23C]' : 'text-[#9B8C83]'
                  }`}>
                    Included Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.featured ? 'text-[#E3A23C]' : 'text-[#E3A23C]'}`} />
                        <span className={pkg.featured ? 'text-[#F6EBDD]/90' : 'text-[#2E1F1B]/85'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Package CTA */}
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 font-bold text-sm py-3.5 px-6 rounded-full transition-colors duration-200 ${
                  pkg.featured
                    ? 'bg-[#E3A23C] hover:bg-[#cb8f31] text-[#2E1F1B]'
                    : 'bg-[#2E1F1B] hover:bg-[#E3A23C] text-[#F6EBDD] hover:text-[#2E1F1B]'
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Transparency Note */}
        <div className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xs">
          <h4 className="text-base font-bold text-[#2E1F1B] mb-1">
            Need a specific feature or have an existing system?
          </h4>
          <p className="text-xs sm:text-sm text-[#6A5B53] mb-4">
            We adapt solutions to your current tools (Google Sheets, WhatsApp Business, Razorpay, custom databases). No need to start from zero if parts of your process already work.
          </p>
          <a
            href={SITE_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#2E1F1B] underline hover:text-[#E3A23C]"
          >
            Ask us on WhatsApp for a quick estimate →
          </a>
        </div>
      </div>
    </section>
  );
}
