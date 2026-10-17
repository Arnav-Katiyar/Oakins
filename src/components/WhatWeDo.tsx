'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { Globe, ShoppingBag, LayoutDashboard, Send, ArrowRight, Check } from 'lucide-react';

export function WhatWeDo() {
  const serviceIcons = [Globe, ShoppingBag, LayoutDashboard, Send];

  return (
    <section id="services" className="section-wrapper bg-[#F6EBDD] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-4">
              Practical digital tools, built for real business workflows.
            </h2>
            <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed">
              We focus on business outcomes rather than technical jargon. Here is how we help small businesses and independent professionals establish, run, and scale operations.
            </p>
          </div>
          <p className="text-xs text-[#9B8C83] max-w-xs md:text-right">
            * Exact scope is tailored to each project&apos;s actual requirements and workflow.
          </p>
        </div>

        {/* 4 Outcome-Driven Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONFIG.services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#E3A23C]/50 transition-all duration-300 shadow-xs hover:shadow-lg group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center text-[#2E1F1B] group-hover:bg-[#E3A23C] group-hover:text-[#2E1F1B] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#9B8C83] tracking-wider uppercase">
                      0{index + 1} {'//'} Service
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-semibold text-[#2E1F1B] mb-1">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E3A23C] block mb-4">
                    {service.subtitle}
                  </span>

                  <p className="text-sm sm:text-base text-[#6A5B53] leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="bg-[#FAF4EB] border-l-3 border-[#E3A23C] p-3.5 rounded-r-xl mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E1F1B] block mb-1">
                      Problem it solves:
                    </span>
                    <p className="text-xs sm:text-sm text-[#6A5B53]">
                      {service.problemSolved}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#9B8C83] block mb-3">
                      Typical Scope:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#2E1F1B]/85">
                          <Check className="w-4 h-4 text-[#E3A23C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Relevant CTA */}
                <div className="pt-6 border-t border-[#2E1F1B]/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2E1F1B] group-hover:text-[#E3A23C] transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#6A5B53]">
            Unsure which solution fits your current stage?{' '}
            <a href="#contact" className="font-semibold text-[#2E1F1B] underline hover:text-[#E3A23C]">
              We&apos;ll gladly review your workflow during a free 20-min business check-up.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
