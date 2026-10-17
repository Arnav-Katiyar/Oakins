'use client';

import { useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const handlePreloaderDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <CustomCursor />

      {/* Preloader — renders on top, then exits */}
      <Preloader onComplete={handlePreloaderDone} />

      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
        style={{ scaleX: progressScaleX }}
      />

      <Navbar />

      {/* Main content fades in after preloader */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            key="main"
            className="min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Hero />
            <Marquee items={["BUSINESS WEBSITES", "WEB APPLICATIONS", "LANDING PAGES", "UI/UX DESIGN", "PROTOTYPES", "DIGITAL SOLUTIONS"]} />
            <About />
            <div className="divider-line" />
            <Projects />
            <Skills />
            <Philosophy />
            <div className="divider-line" />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
