'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { BrandChevrons, BrandPillTrio } from './OakinsLogo';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F6EBDD]">
      {/* Decorative Warm Geometric Elements (inspired by the business card) */}
      <div className="absolute top-16 right-0 translate-x-12 opacity-40 pointer-events-none hidden lg:block" aria-hidden="true">
        <BrandPillTrio height={120} pillColor="#EBD7B7" />
      </div>

      <div className="absolute -bottom-10 left-10 opacity-20 pointer-events-none hidden sm:block" aria-hidden="true">
        <BrandChevrons count={8} size={28} color="#D2B07A" />
      </div>

      {/* Subtle organic warmth background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#EBD7B7]/40 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-full px-4 py-1.5 mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E3A23C]" />
            <span className="text-xs sm:text-sm font-semibold text-[#2E1F1B]/80 tracking-wide">
              {SITE_CONFIG.subLabel}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-normal tracking-tight text-[#2E1F1B] leading-[1.08] mb-6">
            Your business,{' '}
            <span className="relative inline-block text-[#2E1F1B] font-medium">
              <span className="relative z-10">organised</span>
              <span
                className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-[#EBD7B7] -z-0 rounded-sm opacity-80"
                aria-hidden="true"
              />
            </span>{' '}
            and running smoothly.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#6A5B53] font-normal leading-relaxed max-w-2xl mb-10">
            {SITE_CONFIG.shortDescription}
          </p>

          {/* CTAs and Capacity Notice */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            {/* Primary CTA: Book free 20-min check-up */}
            <a
              href={SITE_CONFIG.contact.bookingUrl}
              className="inline-flex items-center justify-center gap-3 bg-[#E3A23C] hover:bg-[#cb8f31] text-[#2E1F1B] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-[#2E1F1B]" />
              <span>Book a free 20-min business check-up</span>
              <ArrowRight className="w-4 h-4 text-[#2E1F1B]" />
            </a>

            {/* Secondary CTA: See how we help */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] hover:bg-[#FAF4EB] text-[#2E1F1B] border border-[#2E1F1B]/15 font-semibold text-base px-7 py-4 rounded-full transition-colors"
            >
              <span>See how we help</span>
              <ArrowRight className="w-4 h-4 text-[#6A5B53]" />
            </a>
          </div>

          {/* Capacity Status */}
          {SITE_CONFIG.isCapacityActive && (
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#6A5B53]">
              <CheckCircle2 className="w-4 h-4 text-[#E3A23C]" />
              <span>{SITE_CONFIG.capacityStatement} — no long queues, direct collaboration.</span>
            </div>
          )}
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-16 pt-8 border-t border-[#2E1F1B]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9B8C83]">Designed for</span>
            <span className="text-base font-semibold text-[#2E1F1B] mt-1">Shops, Clinics & Services</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9B8C83]">Direct Contact</span>
            <span className="text-base font-semibold text-[#2E1F1B] mt-1">No Account Managers</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9B8C83]">Clear Deliverables</span>
            <span className="text-base font-semibold text-[#2E1F1B] mt-1">Scope & Pricing Upfront</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9B8C83]">Headquartered</span>
            <span className="text-base font-semibold text-[#2E1F1B] mt-1">Indore, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
