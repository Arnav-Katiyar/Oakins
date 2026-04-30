'use client';
import { motion } from 'framer-motion';

const steps = [
  { 
    title: "Analyze the Constraints", 
    detail: "Every project has boundaries — time, tech, or logic. I map these out first. Knowing what you can't do defines what you can." 
  },
  { 
    title: "Build a Roadmap", 
    detail: "Architecture before code. I design the database schemas, component trees, and state management flow before writing a single line." 
  },
  { 
    title: "Learn Along the Way", 
    detail: "Tech moves fast. If a constraint requires a new tool, language, or paradigm, I dive into the docs and learn it on the fly." 
  },
  { 
    title: "Create, Test, Deploy", 
    detail: "Execution is everything. I build the system, write the tests that matter, and ship it to production. Rinse and repeat." 
  },
];

export function Philosophy() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-mono text-accent/60 tracking-wide mb-20"
        >
          // working process
        </motion.p>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-px bg-white/[0.05]" />
          
          <motion.div 
            className="absolute left-[19px] md:left-[27px] top-4 w-px bg-accent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                className="relative flex gap-5 md:gap-16 items-start group"
                data-hover
              >
                {/* Number Circle */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-surface border border-white/[0.08] group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shrink-0 mt-1 md:mt-0">
                  <span className="text-base md:text-xl font-heading font-bold text-white/[0.4] group-hover:text-accent transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed max-w-lg">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
