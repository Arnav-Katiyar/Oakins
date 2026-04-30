'use client';

import { motion, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE_SHARP = [0.76, 0, 0.24, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

interface PreloaderProps { onComplete: () => void; }

export function Preloader({ onComplete }: PreloaderProps) {
  const [scope, animate] = useAnimate();
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    const run = async () => {
      // ── Phase 1: Vertical lines scale into existence ────────────────
      await animate(
        '.pre-line',
        { opacity: 1, scaleY: 1 },
        { duration: 0.55, ease: EASE_OUT }
      );

      await wait(120);

      // ── Phase 2: "IIT MADRAS" fades up between the lines ───────────
      await animate(
        '.pre-iit',
        { opacity: 1, y: 0, letterSpacing: '0.28em' },
        { duration: 0.55, ease: EASE_OUT }
      );

      await wait(620);

      // ── Phase 3: Both lines rotate 90° (vertical → horizontal) ─────
      await animate(
        '.pre-line',
        { rotate: 90 },
        { duration: 0.65, ease: EASE_SHARP }
      );

      await wait(40);

      // ── Phase 4: Lines expand (scaleY in rotated space = visual scaleX)
      //             + text fades / scales out simultaneously ────────────
      animate(
        '.pre-iit',
        { opacity: 0, scale: 0.92 },
        { duration: 0.3, ease: 'easeOut' }
      );

      await animate(
        '.pre-line',
        { scaleY: 140 },          // after rotate(90), scaleY = horizontal spread
        { duration: 0.55, ease: EASE_SHARP }
      );

      // ── Collapse lines out ──────────────────────────────────────────
      await animate(
        '.pre-line',
        { opacity: 0, scaleX: 0 },
        { duration: 0.3, ease: EASE_SHARP }
      );

      // ── Phase 5: Final identity reveal ─────────────────────────────
      setShowFinal(true);
      await wait(60); // let React flush

      await animate(
        '.pre-name',
        { opacity: 1, y: 0 },
        { duration: 0.65, ease: EASE_OUT }
      );
      await animate(
        '.pre-role',
        { opacity: 1, y: 0 },
        { duration: 0.5, ease: EASE_OUT }
      );
      await animate(
        '.pre-tag',
        { opacity: 1, y: 0 },
        { duration: 0.5, ease: EASE_OUT }
      );

      await wait(900);

      // ── Exit ────────────────────────────────────────────────────────
      await animate(
        scope.current,
        { opacity: 0, display: 'none' },
        { duration: 0.5, ease: 'easeInOut' }
      );

      onComplete();
    };

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={scope}
      className="fixed inset-0 z-[9998] bg-[#030303] flex items-center justify-center overflow-hidden"
    >
      {/* ── Lines + IIT MADRAS ── */}
      {!showFinal && (
        <div className="relative flex items-center gap-9">
          {/* Left vertical line */}
          <motion.div
            className="pre-line bg-white"
            initial={{ opacity: 0, scaleY: 0 }}
            style={{ width: 2, height: 76, transformOrigin: 'center' }}
          />

          {/* IIT MADRAS */}
          <motion.p
            className="pre-iit font-heading font-bold text-white text-xl md:text-2xl"
            initial={{ opacity: 0, y: 10, letterSpacing: '0.04em' }}
            style={{ letterSpacing: '0.04em' }}
          >
            IIT MADRAS
          </motion.p>

          {/* Right vertical line */}
          <motion.div
            className="pre-line bg-white"
            initial={{ opacity: 0, scaleY: 0 }}
            style={{ width: 2, height: 76, transformOrigin: 'center' }}
          />
        </div>
      )}

      {/* ── Final reveal ── */}
      {showFinal && (
        <div className="text-center px-6">
          <motion.h1
            className="pre-name font-heading font-bold text-white tracking-tight leading-[1]"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
            initial={{ opacity: 0, y: 28 }}
          >
            Anadi Sharma
          </motion.h1>

          <motion.p
            className="pre-role font-mono text-accent uppercase tracking-[0.22em] mt-4"
            style={{ fontSize: 'clamp(0.65rem, 2vw, 0.8rem)' }}
            initial={{ opacity: 0, y: 18 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            className="pre-tag font-sans text-muted mt-3 tracking-wider"
            style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)' }}
            initial={{ opacity: 0, y: 14 }}
          >
            Building legacy products.
          </motion.p>
        </div>
      )}
    </div>
  );
}
