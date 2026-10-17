'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { MessageSquareOff, FileSpreadsheet, SearchX, Clock, ArrowRight } from 'lucide-react';

export function SoundFamiliar() {
  const problems = [
    {
      icon: MessageSquareOff,
      title: "Orders lost in WhatsApp chats",
      detail:
        "Customer inquiries, order changes, and payment screenshots mixed together in personal messaging threads where details easily slip through.",
    },
    {
      icon: FileSpreadsheet,
      title: "Customer information scattered everywhere",
      detail:
        "Phone numbers in paper notebooks, addresses in spreadsheets, and pending follow-ups stored only in your head.",
    },
    {
      icon: SearchX,
      title: "Customers struggling to find you online",
      detail:
        "No clear website or catalog for people searching Google. Losing potential customers to competitors who are simply easier to find.",
    },
    {
      icon: Clock,
      title: "Too much time spent on repetitive tasks",
      detail:
        "Manually sending price lists, calculating bills, writing out routine messages, and copying data between different apps every single day.",
    },
  ];

  return (
    <section className="section-wrapper bg-[#FAF4EB] border-y border-[#2E1F1B]/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
            Sound Familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-5">
            {SITE_CONFIG.soundFamiliar.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed">
            {SITE_CONFIG.soundFamiliar.intro}
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 sm:p-8 hover:border-[#E3A23C]/50 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center shrink-0 text-[#2E1F1B]">
                    <Icon className="w-6 h-6 text-[#2E1F1B]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#2E1F1B] mb-2">
                      {prob.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6A5B53] leading-relaxed">
                      {prob.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottleneck Resolution Statement Banner */}
        <div className="bg-[#2E1F1B] text-[#F6EBDD] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E3A23C] block mb-2">
              The Oakins Approach
            </span>
            <p className="text-base sm:text-lg text-[#EBD7B7] font-normal leading-relaxed">
              {SITE_CONFIG.soundFamiliar.resolution}
            </p>
          </div>
          <a
            href="#services"
            className="shrink-0 inline-flex items-center gap-2 bg-[#E3A23C] hover:bg-[#cb8f31] text-[#2E1F1B] font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
          >
            <span>Explore our solutions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
