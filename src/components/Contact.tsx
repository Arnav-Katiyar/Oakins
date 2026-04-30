'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { label: "GitHub", href: "https://github.com/itsmeanadi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/anadi-sharma-b2ba0b32b/" },
  { label: "Email", href: "mailto:1anadi1sharma@gmail.com" },
];

export function Contact() {
  return (
    <footer id="contact" className="relative py-32 overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ boxShadow: '0 0 200px 100px rgba(220, 38, 38, 0.04)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-accent/60 tracking-wide mb-16"
        >
          // let's connect
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter leading-[0.95] mb-8">
              <span className="text-white">Got a project</span>
              <span className="text-accent">?</span>
              <br />
              <span className="text-white/40">Let's make it</span>
              <br />
              <span className="text-white/40">happen.</span>
            </h2>

            <a
              href="mailto:1anadi1sharma@gmail.com"
              data-hover
              className="group inline-flex items-center gap-3 text-xl md:text-2xl text-accent hover:text-white transition-colors duration-300"
            >
              <span className="font-mono">1anadi1sharma@gmail.com</span>
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
            </a>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="flex flex-col gap-0">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  data-hover
                  className="group flex items-center justify-between py-5 border-b border-white/[0.06] hover:border-accent/20 transition-all duration-300"
                >
                  <span className="text-muted group-hover:text-white transition-colors duration-300 text-sm">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted/40 group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted/40 font-mono tracking-wider">
            © {new Date().getFullYear()} ANADI SHARMA
          </p>
          <p className="text-[11px] text-muted/40 font-mono tracking-wider">
            DESIGNED & BUILT FROM SCRATCH
          </p>
        </div>
      </div>
    </footer>
  );
}
