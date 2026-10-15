'use client';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/company';

export function Skills() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-accent/60 tracking-wide mb-6"
        >
          // services & solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4">
            Bespoke software.
            <br />
            <span className="text-muted/40">From concept to production.</span>
          </h2>
          <p className="text-muted text-base md:text-lg font-light leading-relaxed">
            We provide full-stack software development services tailored to startups and established companies looking to ship fast, reliable digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {COMPANY.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface border border-white/[0.05] hover:border-accent/30 rounded-2xl p-8 md:p-10 flex flex-col justify-between group transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-accent/70 tracking-widest uppercase">
                    0{i + 1} // Service
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-300" />
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted text-sm md:text-[15px] leading-relaxed mb-8 font-light">
                  {service.description}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-mono text-muted/40 uppercase tracking-wider mb-3">Capabilities</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, j) => (
                    <span
                      key={j}
                      data-hover
                      className="px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs font-mono text-muted/80 group-hover:text-white group-hover:border-white/20 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
