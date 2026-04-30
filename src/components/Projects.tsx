'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code2, Zap, Clock, Shield } from 'lucide-react';
import { useRef, useState } from 'react';
import { CountUp } from './CountUp';

/* ─── Project Data ─── */
const featured = {
  title: "AI Content Moderation Engine",
  year: "2025",
  tagline: "Rewrites toxicity. Preserves meaning. In under 200ms.",
  description: "A real-time moderation pipeline that doesn't just block toxic content — it semantically rewrites it. Users never know their message was touched. Intent stays intact. UX stays clean.",
  problem: "Platforms either block toxic content entirely (losing context) or let it through (losing trust). Neither approach respects the user or the product.",
  approach: "Built a serverless pipeline on Vercel Edge Functions that routes user input through LLM-powered semantic analysis. Toxic segments are rewritten — not removed — preserving the original meaning while neutralizing harm.",
  outcome: "Sub-200ms end-to-end latency. Zero false positives in testing. Users don't even notice the sanitization happening.",
  metrics: [
    { value: 200, suffix: "ms", label: "Latency", icon: Clock },
    { value: 0, suffix: "", label: "False positives", icon: Shield },
    { value: 100, suffix: "%", label: "Intent preserved", icon: Zap },
  ],
  tech: ["JavaScript", "LLM APIs", "Vercel Edge", "Serverless"],
  github: "https://github.com/itsmeanadi/manitapii123",
  live: "https://manitapii123.vercel.app/",
  color: "#8b5cf6",
};

const projects = [
  {
    title: "Live Leaderboard System",
    year: "2025",
    tagline: "2,000 concurrent connections. Zero downtime.",
    metric: "2K+",
    metricLabel: "Concurrent users",
    problem: "A live GDGoC competition needed real-time scoring that wouldn't buckle under spike traffic.",
    approach: "Node.js backend with MongoDB persistence, 100ms polling cycles, and graceful degradation under load.",
    outcome: "Full event load handled without a single dropped connection or stale score.",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/itsmeanadi/Leaderboard-CloudStudyJam",
    live: "https://leaderboard-cloudstudyjam.vercel.app/",
    color: "#06b6d4",
  },
  {
    title: "Traffic Anomaly Dashboard",
    year: "2025",
    tagline: "10K data points. Sub-second refresh.",
    metric: "60×",
    metricLabel: "Faster detection",
    problem: "City traffic data was fragmented, delayed, and impossible to act on in real-time.",
    approach: "Python ETL pipeline processing 10,000+ data points with automated anomaly flagging, streamed to a Next.js dashboard via WebSockets.",
    outcome: "Anomalies surfaced 60× faster than manual review. Dashboard refreshes in under one second.",
    tech: ["Next.js", "Python", "WebSockets"],
    github: "https://github.com/itsmeanadi/Merge-Conflicts/tree/main/traffic-frontend",
    live: "https://merge-conflicts-6k9l.vercel.app/",
    color: "#f59e0b",
  },
  {
    title: "CleanWeb Extension",
    year: "2025",
    tagline: "Real-time DOM filtering. <5ms per mutation.",
    metric: "<5ms",
    metricLabel: "Per DOM mutation",
    problem: "Profanity filters fail on SPAs — they scan once on page load, then ignore all dynamic content.",
    approach: "MutationObserver API intercepting every DOM change with optimized regex patterns executing in under 5ms.",
    outcome: "Zero main-thread impact. Works on any website — including React, Vue, and Angular apps.",
    tech: ["JavaScript", "DOM API", "Chrome Extensions"],
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
              Things I've built
              <br />
              <span className="text-muted/30">that actually shipped.</span>
            </h2>
          </div>
          <p className="text-sm text-muted max-w-xs text-right hidden md:block">
            Each project includes real metrics, real outcomes, and real links. No mockups.
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

        <div className="relative bg-surface border border-white/[0.04] group-hover:border-accent/20 rounded-2xl p-8 md:p-14 overflow-hidden transition-colors duration-500">
          {/* Subtle glow orb */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ boxShadow: '0 0 200px 80px rgba(220, 38, 38, 0.03)' }}
          />

          <div className="relative z-10">
            {/* Top row — label + links */}
            <div className="flex items-start justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-mono font-medium tracking-wider uppercase">
                  Featured Project
                </span>
                <span className="text-xs font-mono text-muted/30">{featured.year}</span>
              </div>

              <div className="flex gap-2">
                <a href={featured.github} target="_blank" rel="noopener noreferrer" data-hover
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] text-muted text-xs font-mono hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Source
                </a>
                <a href={featured.live} target="_blank" rel="noopener noreferrer" data-hover
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-deep-black text-xs font-mono font-medium hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Live Demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Title + tagline */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 tracking-tight leading-[1.05] group-hover:text-accent transition-colors duration-500">
              {featured.title}
            </h3>
            <p className="text-xl text-muted font-light max-w-2xl mb-12">
              {featured.tagline}
            </p>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-4 mb-14">
              {featured.metrics.map((m, i) => (
                <div key={i} className="bg-deep-black/50 border border-white/[0.04] rounded-xl p-5 text-center hover:border-accent/20 transition-colors duration-300">
                  <m.icon className="w-4 h-4 text-accent/40 mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-heading font-bold text-white tabular-nums">
                    {m.value === 0 ? '0' : <CountUp end={m.value} suffix={m.suffix} duration={2} />}
                    {m.value === 0 && m.suffix}
                  </p>
                  <p className="text-[11px] font-mono text-muted/50 uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Case study — deep dive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {[
                { label: 'The Problem', text: featured.problem },
                { label: 'My Approach', text: featured.approach },
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
            {/* Top — metric callout */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold tracking-tight" style={{ color: project.color }}>
                  {project.metric}
                </p>
                <p className="text-[10px] font-mono text-muted/40 uppercase tracking-wider mt-1">{project.metricLabel}</p>
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
                  { label: 'Problem', text: project.problem },
                  { label: 'Approach', text: project.approach },
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
