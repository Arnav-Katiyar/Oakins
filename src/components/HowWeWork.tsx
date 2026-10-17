'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { Compass, FileCheck, Layers, Rocket } from 'lucide-react';

export function HowWeWork() {
  const stepIcons = [Compass, FileCheck, Layers, Rocket];

  return (
    <section id="process" className="section-wrapper bg-[#F6EBDD] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-4">
            {SITE_CONFIG.process.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed mb-4">
            {SITE_CONFIG.process.subheading}
          </p>
          <p className="text-xs text-[#9B8C83] italic">
            * {SITE_CONFIG.process.disclaimer}
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.process.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.number}
                className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 flex flex-col justify-between hover:border-[#E3A23C]/50 transition-all shadow-xs hover:shadow-md relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-heading font-bold text-[#2E1F1B]/30">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center text-[#2E1F1B]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#E3A23C] bg-[#FAF4EB] px-2.5 py-1 rounded-md mb-3">
                    {step.timeline}
                  </span>

                  <h3 className="text-xl font-heading font-semibold text-[#2E1F1B] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#6A5B53] leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2E1F1B]/5">
                  <span className="text-[11px] font-mono text-[#9B8C83]">
                    Step {idx + 1} of 4
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
