'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const { items, heading, subheading } = SITE_CONFIG.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-wrapper bg-[#F6EBDD] border-t border-[#2E1F1B]/10 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 7 Questions Accordion List */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-semibold text-[#2E1F1B]">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF4EB] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#EBD7B7]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#2E1F1B]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-7 pt-1 text-sm sm:text-base text-[#6A5B53] leading-relaxed border-t border-[#2E1F1B]/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#6A5B53]">
            Have a question not listed here?{' '}
            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#2E1F1B] underline hover:text-[#E3A23C]"
            >
              Ask Anadi directly on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
