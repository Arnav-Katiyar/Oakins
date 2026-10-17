'use client';

interface OakinsLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'cream';
  iconSize?: number;
  showText?: boolean;
}

/**
 * Oakins Brand Logo
 * Matches the official business card reference:
 * - Circular leaf emblem for the "O" (stylized oak leaf with vein structure)
 * - Clean, bold "AKINS" letterforms
 */
export function OakinsLogo({
  className = '',
  variant = 'dark',
  iconSize = 34,
  showText = true,
}: OakinsLogoProps) {
  // Color mappings
  const iconBg = variant === 'light' ? '#E3A23C' : '#2E1F1B';
  const iconFill = variant === 'light' ? '#2E1F1B' : '#F6EBDD';
  const textColor = variant === 'light' ? '#F6EBDD' : variant === 'cream' ? '#F6EBDD' : '#2E1F1B';
  const leafColor = variant === 'light' ? '#2E1F1B' : '#E3A23C';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Oakins Leaf "O" Emblem */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Outer Circular Ring */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke={iconBg}
          strokeWidth="10"
          className="transition-colors duration-300"
        />

        {/* Stylized Oak Leaf Motif */}
        <path
          d="M32 66 C32 46, 44 32, 66 32 C66 52, 54 66, 32 66 Z"
          fill={leafColor}
        />
        {/* Central Leaf Spine / Vein */}
        <path
          d="M36 62 Q50 49 63 35"
          stroke={iconFill}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Top Lateral Vein */}
        <path
          d="M48 48 Q55 44 58 41"
          stroke={iconFill}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Bottom Lateral Vein */}
        <path
          d="M42 55 Q48 52 52 50"
          stroke={iconFill}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>

      {/* "AKINS" Text */}
      {showText && (
        <span
          className="font-heading font-extrabold tracking-wider uppercase text-2xl md:text-[26px] leading-none transition-colors duration-300"
          style={{ color: textColor }}
        >
          AKINS
        </span>
      )}
    </div>
  );
}

/**
 * Geometric Brand Arrow Chevron Motif (`>>>>>>`)
 * Directly referenced from the business card bottom right.
 */
export function BrandChevrons({ count = 6, size = 16, color = '#E3A23C', className = '' }: {
  count?: number;
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Geometric Pill Trio Motif
 * Directly referenced from the business card top right (3 rounded vertical pills).
 */
export function BrandPillTrio({ className = '', height = 48, pillColor = '#EBD7B7' }: {
  className?: string;
  height?: number;
  pillColor?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      <div
        className="w-5 rounded-full"
        style={{ height: height * 0.75, backgroundColor: pillColor }}
      />
      <div
        className="w-5 rounded-full"
        style={{ height: height, backgroundColor: pillColor }}
      />
      <div
        className="w-5 rounded-full"
        style={{ height: height * 0.85, backgroundColor: pillColor }}
      />
    </div>
  );
}
