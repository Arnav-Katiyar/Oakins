'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
}

export function CustomCursor() {
  const [pos, setPos] = useState<CursorState>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        setIsHovering(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseout', handleOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="cursor-dot"
      animate={{
        x: pos.x - 8,
        y: pos.y - 8,
        scale: isHovering ? 2 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  );
}
