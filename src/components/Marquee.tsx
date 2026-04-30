'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const content = items.join(' — ');
  const repeated = Array(4).fill(content).join(' — ') + ' — ';

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Moves the text leftwards as the user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  return (
    <div ref={containerRef} className="relative overflow-hidden py-6 border-y border-white/[0.03]">
      <motion.div
        className="whitespace-nowrap flex"
        style={{ x }}
      >
        <span className="text-7xl md:text-9xl font-heading font-bold text-white/[0.03] tracking-tighter select-none">
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}
