'use client';
import { motion } from 'framer-motion';
import { TextScramble } from './TextScramble';
import { COMPANY } from '@/lib/company';

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: '100%', transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.8 } },
};

const wordVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.3 + i * 0.08,
    },
  }),
};

const heroWords = COMPANY.heroHeadline;

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Accent orb */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="absolute top-1/4 right-[15%] w-[400px] h-[400px] bg-accent/[0.07] blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <TextScramble
            text={COMPANY.statusText}
            className="text-sm font-mono text-muted tracking-wide"
            delay={1400}
            speed={25}
          />
        </motion.div>

        {/* Main headline — word by word reveal */}
        <h1 className="text-[clamp(3rem,8vw,8rem)] font-heading font-bold tracking-tighter leading-[0.9] mb-8">
          {heroWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
              <motion.span
                className={`inline-block ${i >= 4 ? 'text-accent' : 'text-white'}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Divider line animation */}
        <motion.div
          className="h-px bg-white/10 mb-8"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Bottom row — description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="text-lg md:text-xl text-muted max-w-lg font-light leading-relaxed">
            Software agency & digital product studio.
            <br />
            <span className="text-white/70">High-performance web apps, mobile solutions, and scalable cloud systems.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              data-hover
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-deep-black font-semibold rounded-full overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">Explore solutions</span>
              <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-10 font-semibold">Explore solutions</span>
            </a>
            <a
              href="#contact"
              data-hover
              className="px-6 py-3 md:px-8 md:py-4 text-muted font-medium rounded-full border border-white/10 hover:border-accent/50 hover:text-white transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
