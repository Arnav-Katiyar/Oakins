'use client';

/**
 * Preloader is deprecated in favor of immediate SSR/HTML rendering
 * to guarantee that search crawlers and visitors never experience blank screens.
 */
export function Preloader({ onComplete }: { onComplete?: () => void }) {
  if (onComplete) {
    onComplete();
  }
  return null;
}
