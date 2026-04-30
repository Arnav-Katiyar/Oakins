'use client';

import { useEffect, useRef, useState } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TextScramble({ text, className = '', delay = 0, speed = 28 }: TextScrambleProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayed(
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      iteration += 0.6;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayed(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayed || '\u00A0'.repeat(text.length)}
    </span>
  );
}
