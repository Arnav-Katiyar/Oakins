'use client';

import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function SelectedWork() {
  const { featured, otherProjects } = SITE_CONFIG.selectedWork;
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <section id="work" className="section-wrapper bg-[#FAF4EB] border-t border-[#2E1F1B]/10 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3A23C] mb-3 block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-[#2E1F1B] leading-tight mb-4">
              Real projects. Honest outcomes.
            </h2>
            <p className="text-base sm:text-lg text-[#6A5B53] leading-relaxed">
              {SITE_CONFIG.selectedWork.subheading} We share actual delivered solutions with transparent explanations of what was built.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-mono text-[#9B8C83] uppercase tracking-wider">
              Verified Client & Prototype Work
            </span>
          </div>
        </div>

        {/* Featured Case Study: Amaze Global Exports */}
        <div className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-3xl p-6 sm:p-10 md:p-12 mb-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#2E1F1B]/10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#E3A23C]/15 text-[#2E1F1B] text-xs font-bold uppercase tracking-wider">
                  Featured Client Case Study
                </span>
                <span className="text-xs font-mono text-[#9B8C83]">
                  {featured.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-heading font-bold text-[#2E1F1B]">
                {featured.title}
              </h3>
              <p className="text-sm sm:text-base text-[#6A5B53] mt-1 max-w-2xl">
                {featured.tagline}
              </p>
            </div>

            {/* Visit Live Website Link */}
            <div>
              <a
                href={featured.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2E1F1B] hover:bg-[#E3A23C] text-[#F6EBDD] hover:text-[#2E1F1B] text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Screenshot Showcase with Tabs */}
          <div className="mb-10">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#2E1F1B]/10 bg-[#2E1F1B]/5 mb-4 shadow-inner">
              <Image
                src={featured.screenshots[activeScreenshot].src}
                alt={featured.screenshots[activeScreenshot].alt}
                fill
                className="object-cover object-top transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                priority
              />
            </div>

            {/* Screenshot navigation tabs */}
            <div className="flex flex-wrap gap-2">
              {featured.screenshots.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveScreenshot(idx)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    activeScreenshot === idx
                      ? 'bg-[#2E1F1B] text-[#F6EBDD]'
                      : 'bg-[#FAF4EB] text-[#6A5B53] hover:bg-[#EBD7B7]/50'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Breakdown (Challenge / What We Built / Outcome) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-[#2E1F1B]/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-1 bg-[#E3A23C] rounded-full" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E1F1B]">
                  The Challenge
                </h4>
              </div>
              <p className="text-sm text-[#6A5B53] leading-relaxed">
                {featured.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-1 bg-[#E3A23C] rounded-full" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E1F1B]">
                  What We Built
                </h4>
              </div>
              <p className="text-sm text-[#6A5B53] leading-relaxed">
                {featured.whatWeBuilt}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-1 bg-[#E3A23C] rounded-full" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E1F1B]">
                  The Outcome
                </h4>
              </div>
              <p className="text-sm text-[#2E1F1B] font-medium leading-relaxed">
                {featured.outcome}
              </p>
            </div>
          </div>

          {/* Secondary Technology Line */}
          <div className="pt-6 border-t border-[#2E1F1B]/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#9B8C83] mr-2">Built with:</span>
            {featured.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono text-[#6A5B53] bg-[#FAF4EB] border border-[#2E1F1B]/10 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Real Projects & Prototypes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {otherProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#2E1F1B]/10 rounded-2xl p-7 flex flex-col justify-between hover:border-[#E3A23C]/50 transition-all shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#E3A23C]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[#6A5B53] hover:text-[#2E1F1B] hover:bg-[#FAF4EB] transition-colors"
                        title="View Source Code"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Code2 className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-[#6A5B53] hover:text-[#2E1F1B] hover:bg-[#FAF4EB] transition-colors"
                        title="Visit Live Application"
                        aria-label={`Visit live ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-heading font-semibold text-[#2E1F1B] mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-[#6A5B53] mb-5 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="space-y-3 mb-6 bg-[#FAF4EB] p-4 rounded-xl">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#9B8C83] block">
                      The Challenge:
                    </span>
                    <p className="text-xs text-[#6A5B53] leading-relaxed mt-0.5">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#9B8C83] block">
                      What We Built:
                    </span>
                    <p className="text-xs text-[#6A5B53] leading-relaxed mt-0.5">
                      {project.whatWeBuilt}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#2E1F1B] block">
                      Outcome:
                    </span>
                    <p className="text-xs text-[#2E1F1B] font-medium leading-relaxed mt-0.5">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#2E1F1B]/10 flex flex-wrap gap-1.5">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-[#9B8C83] bg-[#FAF4EB] px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="text-center pt-6 border-t border-[#2E1F1B]/10">
          <p className="text-base sm:text-lg text-[#2E1F1B] font-semibold mb-4">
            Have a similar challenge? Let&apos;s discuss it.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#2E1F1B] hover:bg-[#E3A23C] text-[#F6EBDD] hover:text-[#2E1F1B] font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 shadow-sm"
          >
            <span>Start a project discussion</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
