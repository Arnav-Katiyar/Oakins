'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const approachCards = [
  {
    title: "Business-First Thinking",
    description: "We understand your goals before deciding what to build.",
  },
  {
    title: "Design That Makes Sense",
    description: "Clear layouts, intuitive navigation, and consistent visual design.",
  },
  {
    title: "Built to Grow",
    description: "Practical solutions designed with maintainability and future improvements in mind.",
  },
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
          className="text-sm font-mono text-accent/60 tracking-wide mb-12"
        >
          // about us
        </motion.p>

        {/* Studio Positioning Statement (Replaces fabricated numbers) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-surface border border-white/[0.05] rounded-2xl p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/[0.04] blur-[90px] rounded-full pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-3">
              Studio Manifesto
            </span>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
              Small team. Big ambition.
            </h3>
            <p className="text-muted text-base md:text-lg font-light leading-relaxed">
              We focus on thoughtful design, clean development, and practical digital solutions built around your goals.
            </p>
          </div>
        </motion.div>

        {/* Content grid — Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left — statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-[1.1] mb-6">
              We think beyond
              <br />
              <span className="text-white/50">websites.</span>
            </h2>
            <p className="text-muted text-base md:text-lg font-light leading-relaxed">
              Every project starts with understanding the problem, choosing the right approach, and building something useful.
            </p>
          </motion.div>

          {/* Right — 3 Approach Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {approachCards.map((card, i) => (
              <div
                key={i}
                data-hover
                className="bg-surface border border-white/[0.04] hover:border-accent/30 rounded-xl p-6 md:p-8 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-accent/80 group-hover:text-accent transition-colors">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-white group-hover:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted font-light leading-relaxed pl-7">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
