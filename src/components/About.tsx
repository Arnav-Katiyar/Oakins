'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CountUp } from './CountUp';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stats = [
  { value: 15, suffix: '', label: 'Engineers led' },
  { value: 40, suffix: '%', label: 'Faster loads' },
  { value: 100, suffix: '+', label: 'Total users' },
  { value: 4, suffix: 'x', label: 'Hackathon winner' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-gap relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-accent/60 tracking-wide mb-16"
        >
          // about
        </motion.p>

        {/* Stats row — big numbers */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.03] rounded-2xl overflow-hidden mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeSlide}
              className="bg-deep-black p-8 md:p-10 flex flex-col items-center text-center group"
            >
              <p className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tabular-nums">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
              </p>
              <p className="text-xs text-muted/60 font-mono uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left — big statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-[1.1] mb-6">
              I think in
              <br />
              <span className="text-white/50">systems.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Not just features, tickets, or sprints — but the architecture underneath.
              How data flows. Where things break. What scales.
            </p>
          </motion.div>

          {/* Right — experience + education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Experience */}
            <div className="bg-surface border border-white/[0.04] rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white font-heading">Frontend Lead</h3>
                <span className="text-xs font-mono text-accent/60">IET DAVV — 2024→now</span>
              </div>
              <ul className="space-y-4 text-[15px] text-muted leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-accent/40 mt-0.5 shrink-0 text-lg leading-none">›</span>
                  Leading a 15-person team building the institute's official web portal
                </li>
                <li className="flex gap-3">
                  <span className="text-accent/40 mt-0.5 shrink-0 text-lg leading-none">›</span>
                  Built a component system that cut load times by 40% across 100+ users
                </li>
                <li className="flex gap-3">
                  <span className="text-accent/40 mt-0.5 shrink-0 text-lg leading-none">›</span>
                  Shipping accessible, responsive React/Next.js interfaces daily
                </li>
              </ul>
            </div>

            {/* Education + Milestones — side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-surface border border-white/[0.04] rounded-xl p-6">
                <p className="text-xs font-mono text-muted/40 uppercase tracking-wider mb-4">Education</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white font-medium">B.E. Information Technology</p>
                    <p className="text-xs text-muted">IET DAVV • 2024–2028</p>
                  </div>
                  <div className="h-px bg-white/[0.03]" />
                  <div>
                    <p className="text-sm text-white font-medium">B.S. Data Science</p>
                    <p className="text-xs text-muted">IIT Madras • 2024–Present</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-white/[0.04] rounded-xl p-6">
                <p className="text-xs font-mono text-muted/40 uppercase tracking-wider mb-4">Hackathons</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white font-medium">Winner</p>
                    <p className="text-xs text-muted">4 Major Hackathons</p>
                  </div>
                  <div className="h-px bg-white/[0.03]" />
                  <div>
                    <p className="text-sm text-white font-medium">Top 30 / 187</p>
                    <p className="text-xs text-muted">Smart India Hackathon 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
