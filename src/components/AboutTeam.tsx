'use client';

import { SITE_CONFIG } from '@/lib/siteConfig';
import { UserCheck, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';

export function AboutTeam() {
  const valueIcons = [UserCheck, HeartHandshake, ShieldCheck];

  return (
    <section id="about" className="section-wrapper bg-[#FAF4EB] border-t border-[#2E1F1B]/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Studio Profile */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
              About the Team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-6">
              {SITE_CONFIG.about.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed mb-6">
              {SITE_CONFIG.about.intro}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2E1F1B] bg-[#FFFFFF] border border-[#2E1F1B]/10 px-4 py-2 rounded-full mb-8 shadow-xs">
              <MapPin className="w-4 h-4 text-[#E3A23C]" />
              <span>Based in {SITE_CONFIG.contact.location}</span>
            </div>

            <div className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-6 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B8C83] block mb-2">
                Studio Leadership
              </span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2E1F1B] text-[#F6EBDD] flex items-center justify-center font-heading font-bold text-lg">
                  AS
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2E1F1B]">Anadi Sharma</h3>
                  <p className="text-xs text-[#6A5B53]">Founder & Lead Developer, Oakins</p>
                </div>
              </div>
              <p className="text-xs text-[#6A5B53] mt-3 leading-relaxed border-t border-[#2E1F1B]/5 pt-3">
                Personally reviews every project requirements brief, crafts the technical architecture, and ensures clean execution from initial scope to live deployment.
              </p>
            </div>
          </div>

          {/* Right Column: Values & Collaboration Principles */}
          <div className="lg:col-span-7 space-y-5">
            {SITE_CONFIG.about.values.map((val, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 hover:border-[#E3A23C]/50 transition-all shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center shrink-0 text-[#2E1F1B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-[#2E1F1B] mb-2">
                        {val.title}
                      </h3>
                      <p className="text-sm text-[#6A5B53] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Practical Promise Card */}
            <div className="bg-[#2E1F1B] text-[#F6EBDD] rounded-2xl p-7 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E3A23C] block mb-2">
                Our Guarantee of Transparency
              </span>
              <p className="text-sm sm:text-base text-[#EBD7B7] leading-relaxed">
                We never fabricate results, invent fake statistics, or promise unrealistic delivery deadlines. You get honest guidance, direct answers, and reliable code built to support your daily operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
