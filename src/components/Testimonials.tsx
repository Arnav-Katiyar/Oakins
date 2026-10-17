'use client';

import { CheckCircle2 } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="section-wrapper bg-[#F6EBDD] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
            Client Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-4">
            Built around how you actually operate.
          </h2>
          <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed">
            We measure our success by how smoothly your business runs after launch. Our relationship is based on transparency, iterative feedback, and respect for your time.
          </p>
        </div>

        {/* 3 Pillars of Client Partnership */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center text-[#2E1F1B] mb-5">
              <span className="font-heading font-bold text-lg">01</span>
            </div>
            <h3 className="text-lg font-heading font-semibold text-[#2E1F1B] mb-2">
              Working Previews First
            </h3>
            <p className="text-sm text-[#6A5B53] leading-relaxed">
              We never ask you to imagine a website from static mockups. You get clickable, working previews on real devices to test early and provide input.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center text-[#2E1F1B] mb-5">
              <span className="font-heading font-bold text-lg">02</span>
            </div>
            <h3 className="text-lg font-heading font-semibold text-[#2E1F1B] mb-2">
              No Fabricated Endorsements
            </h3>
            <p className="text-sm text-[#6A5B53] leading-relaxed">
              We strictly adhere to honest trust signals. We only publish client testimonials with written authorization after live, working project delivery.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#EBD7B7]/40 flex items-center justify-center text-[#2E1F1B] mb-5">
              <span className="font-heading font-bold text-lg">03</span>
            </div>
            <h3 className="text-lg font-heading font-semibold text-[#2E1F1B] mb-2">
              Full Knowledge Handover
            </h3>
            <p className="text-sm text-[#6A5B53] leading-relaxed">
              You own your domain, code, and accounts completely. We guide you through managing updates so you are never locked into an agency contract.
            </p>
          </div>
        </div>

        {/* Client Collaboration Note */}
        <div className="bg-[#FAF4EB] border border-[#2E1F1B]/10 rounded-2xl p-6 sm:p-8 flex items-center gap-4 text-xs sm:text-sm text-[#6A5B53]">
          <CheckCircle2 className="w-5 h-5 text-[#E3A23C] shrink-0" />
          <p>
            Have you completed a project with Oakins? We welcome verified client feedback and review requests directly via{' '}
            <a href="mailto:anadi.sharma.contact@gmail.com" className="font-semibold text-[#2E1F1B] underline hover:text-[#E3A23C]">
              anadi.sharma.contact@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
