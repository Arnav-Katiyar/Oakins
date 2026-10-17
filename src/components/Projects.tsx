'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Sparkles, Layout, Smartphone, Database, Terminal, Maximize2, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

/* ─── Project Data (Real Client Work & Genuine Prototypes) ─── */
const screenshots = [
  {
    id: "homepage",
    title: "Homepage & Brand Identity",
    subtitle: "Hero showcase featuring the 2026 Atelier Collection and worldwide shipping banner.",
    url: "amazeglobalexports.com",
    src: "/projects/amaze-homepage.png",
    alt: "Amaze Global Exports homepage hero section showing brand identity and navigation",
  },
  {
    id: "catalog",
    title: "Curated Product Catalog",
    subtitle: "Responsive product grid highlighting women's ethnic and western collections with transparent pricing.",
    url: "amazeglobalexports.com/shop",
    src: "/projects/amaze-catalog.png",
    alt: "Amaze Global Exports product catalog and seasonal collections",
  },
  {
    id: "features",
    title: "Quality Standards & Export Logistics",
    subtitle: "Detailing premium craftsmanship, worldwide delivery to 100+ countries, and seamless exchanges.",
    url: "amazeglobalexports.com/#about",
    src: "/projects/amaze-features.png",
    alt: "Amaze Global Exports export services and company highlights",
  },
];

const featured = {
  title: "Amaze Global Exports",
  year: "2026",
  tagline: "A business website designed to present the company's products and services, strengthen its online presence, and help potential buyers discover the business.",
  description: "A business website designed to present the company's products and services, strengthen its online presence, and help potential buyers discover the business.",
  problem: "The business needed a dedicated digital presence to showcase its fashion catalog, establish credibility with new audiences, and provide clear inquiry channels for prospective clients.",
  approach: "Designed and built a responsive website focused on clear category navigation, curated collection galleries, and accessible contact points across all devices.",
  outcome: "A modern, functional online presence that clearly presents the brand's offerings and gives potential buyers a seamless way to connect.",
  features: [
    { title: "Responsive Layouts", label: "Mobile & Desktop", icon: Smartphone },
    { title: "Product Presentation", label: "Curated Collections", icon: Layout },
    { title: "Inquiry Pathways", label: "Buyer Discovery", icon: Globe },
  ],
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  github: "",
  live: "https://www.amazeglobalexports.com/",
  color: "#e11d48",
};

const projects = [
  {
    title: "Traffic Monitoring Dashboard",
    category: "Prototype",
    year: "2025",
    tagline: "Interactive data visualization prototype with dark-mode telemetry charts.",
    badge: "PROTOTYPE",
    badgeLabel: "Interactive Demo",
    problem: "Visualizing high-frequency geographic and time-series data without UI lag or visual clutter.",
    approach: "Built a Next.js dashboard prototype utilizing dynamic charts, filter controls, and streaming mock data feeds.",
    outcome: "Demonstrated responsive data presentation and smooth filter interactions under real-time state updates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
    github: "https://github.com/itsmeanadi/Merge-Conflicts/tree/main/traffic-frontend",
    live: "https://merge-conflicts-6k9l.vercel.app/",
    color: "#06b6d4",
  },
  {
    title: "Live Event Leaderboard",
    category: "Event Project",
    year: "2025",
    tagline: "Real-time competition scoreboard and standings application.",
    badge: "EVENT APP",
    badgeLabel: "Live Application",
    problem: "Competition participants required a clear, real-time standings display without manual page refreshes.",
    approach: "Developed a focused web application with polling endpoints, high-contrast scoreboards, and persistent rankings.",
    outcome: "An accessible, responsive scoreboard that reliably displayed live team standings during competitive events.",
    tech: ["TypeScript", "React", "Node.js", "REST APIs"],
    github: "https://github.com/itsmeanadi/Leaderboard-CloudStudyJam",
    live: "https://leaderboard-cloudstudyjam.vercel.app/",
    color: "#f59e0b",
  },
  {
    title: "CleanWeb DOM Utility",
    category: "Utility",
    year: "2025",
    tagline: "Client-side browser extension for dynamic content filtering on single-page apps.",
    badge: "UTILITY",
    badgeLabel: "Open Source Tool",
    problem: "Filtering dynamic DOM mutations within modern JavaScript frameworks without slowing down page rendering.",
    approach: "Implemented a lightweight Chrome extension leveraging the MutationObserver API to parse and sanitize dynamic content.",
    outcome: "A functional client-side utility operating with minimal CPU overhead across single-page web applications.",
    tech: ["JavaScript", "DOM API", "Chrome Extension"],
    github: "https://github.com/anadisharma5683/Extension_Moderator",
    live: "",
    color: "#10b981",
  },
];

/* ─── Main Section ─── */
export function Projects() {
  return (
    <section id="projects" className="section-gap relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20"
        >
          <div>
            <p className="text-sm font-mono text-accent/60 tracking-wide mb-4">// selected work</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              Selected Projects
              <br />
              <span className="text-muted/30">& prototypes.</span>
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs text-right hidden md:block">
            A look at client websites, working prototypes, and digital tools we've engineered.
          </p>
        </motion.div>

        {/* Featured Project — Full Width Hero */}
        <FeaturedProject />

        {/* Remaining projects — Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Project (Full-Width Spotlight) ─── */
function FeaturedProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className="mb-4"
    >
      <div className="group relative rounded-2xl overflow-hidden">
        {/* Glow border on hover */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: '0 0 30px rgba(220, 38, 38, 0.12), inset 0 0 30px rgba(220, 38, 38, 0.04)' }}
        />

        <div className="relative bg-surface border border-white/[0.04] group-hover:border-accent/20 rounded-2xl p-6 md:p-14 overflow-hidden transition-colors duration-500">
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ boxShadow: '0 0 200px 80px rgba(220, 38, 38, 0.03)' }}
          />

          <div className="relative z-10">
            {/* Top row — label + links */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 mb-8 md:mb-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-mono font-medium tracking-wider uppercase">
                  Featured Project
                </span>
                <span className="text-xs font-mono text-muted/30">{featured.year}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.github ? (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" data-hover
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-muted text-xs font-mono hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    Source
                  </a>
                ) : null}
                {featured.live ? (
                  <a href={featured.live} target="_blank" rel="noopener noreferrer" data-hover
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-deep-black text-xs font-mono font-medium hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    Visit Website
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-muted/50 text-[11px] font-mono">
                    Client Showcase
                  </span>
                )}
              </div>
            </div>

            {/* Title + tagline */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 tracking-tight leading-[1.05] group-hover:text-accent transition-colors duration-500">
              {featured.title}
            </h3>
            <p className="text-base md:text-lg text-muted font-light max-w-2xl mb-10 md:mb-12">
              {featured.tagline}
            </p>

            {/* Feature highlights row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
              {featured.features.map((f, i) => (
                <div key={i} className="bg-deep-black/50 border border-white/[0.04] rounded-xl p-4 md:p-5 text-center hover:border-accent/20 transition-colors duration-300">
                  <f.icon className="w-4 h-4 text-accent/60 mx-auto mb-2" />
                  <p className="text-base md:text-lg font-heading font-semibold text-white">
                    {f.title}
                  </p>
                  <p className="text-[11px] font-mono text-muted/50 uppercase tracking-wider mt-1">{f.label}</p>
                </div>
              ))}
            </div>

            {/* Case study — deep dive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
              {[
                { label: 'The Goal', text: featured.problem },
                { label: 'Our Approach', text: featured.approach },
                { label: 'The Outcome', text: featured.outcome },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-5 h-px bg-accent/30" />
                    <p className="text-[11px] font-mono text-accent/50 uppercase tracking-[0.15em]">{item.label}</p>
                  </div>
                  <p className={`text-sm leading-relaxed ${idx === 2 ? 'text-white/80 font-medium' : 'text-muted'}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.03]">
              <span className="text-[11px] font-mono text-muted/30 mr-2 uppercase tracking-wider">Built with</span>
              {featured.tech.map((t, i) => (
                <span key={i} className="text-[11px] font-mono text-muted/50 bg-white/[0.03] border border-white/[0.05] px-3 py-1.5 rounded-full hover:border-accent/20 hover:text-accent/70 transition-colors duration-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div
        className="group relative h-full rounded-2xl overflow-hidden cursor-default"
        data-hover
        onClick={() => setExpanded(!expanded)}
      >
        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: project.color }}
        />

        {/* Glow on hover */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ boxShadow: `0 0 25px ${project.color}15, 0 0 60px ${project.color}08` }}
        />

        <div className="relative bg-surface border border-white/[0.04] h-full rounded-2xl p-7 hover:border-white/[0.08] transition-all duration-500 flex flex-col">
          <div className="relative z-10 flex flex-col h-full">
            {/* Top — badge / category callout */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}30`,
                    backgroundColor: `${project.color}10`,
                  }}
                >
                  {project.badge}
                </span>
                <p className="text-[11px] font-mono text-muted/40 uppercase tracking-wider mt-2">{project.badgeLabel}</p>
              </div>
              <div className="flex gap-1.5">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" data-hover onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full border border-white/[0.06] text-muted hover:text-white transition-all duration-300 hover:bg-white/[0.03]"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" data-hover onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-full border border-white/[0.06] text-muted hover:text-white transition-all duration-300 hover:bg-white/[0.03]"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Title + tagline */}
            <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted/70 mb-6 font-light">{project.tagline}</p>

            {/* Expandable case study */}
            <motion.div
              initial={false}
              animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pb-4">
                {[
                  { label: 'The Goal', text: project.problem },
                  { label: 'Our Approach', text: project.approach },
                  { label: 'Outcome', text: project.outcome },
                ].map((item, idx) => (
                  <div key={idx}>
                    <p className="text-[10px] font-mono uppercase tracking-[0.15em] mb-1.5" style={{ color: `${project.color}80` }}>{item.label}</p>
                    <p className={`text-xs leading-relaxed ${idx === 2 ? 'text-white/70' : 'text-muted/60'}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Footer */}
            <div className="mt-auto pt-4 border-t border-white/[0.03] flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono text-muted/30 bg-white/[0.02] px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <span className="text-[10px] font-mono text-muted/30 group-hover:text-muted/60 transition-colors">
                {expanded ? '− Less' : '+ Details'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
