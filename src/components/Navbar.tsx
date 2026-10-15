'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { COMPANY } from '@/lib/company';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000); // update every minute, not every second

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'py-3 bg-deep-black/80 backdrop-blur-xl border-b border-white/[0.04]'
          : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-baseline font-heading font-bold text-white text-2xl tracking-tighter transition-colors duration-300" data-hover>
          <span className="group-hover:text-accent transition-colors duration-300">{COMPANY.logo.firstWordLead}</span>
          <span className="text-white max-w-0 overflow-hidden opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            {COMPANY.logo.firstWordRest}&nbsp;
          </span>
          <span className="group-hover:text-accent transition-colors duration-300">{COMPANY.logo.secondWordLead}</span>
          <span className="text-white max-w-0 overflow-hidden opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            {COMPANY.logo.secondWordRest}
          </span>
          <span className="text-accent">{COMPANY.logo.dot}</span>
        </a>

        {/* Center Pill Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] rounded-full p-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-hover
              className="text-xs font-medium text-muted hover:text-white transition-all duration-300 px-5 py-2 rounded-full hover:bg-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {time && (
            <div className="hidden lg:flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              <span className="text-[11px] font-mono text-muted/50 tabular-nums tracking-widest uppercase">
                {time} IST
              </span>
            </div>
          )}
          <a
            href="mailto:11sharma@gmail.com"
            data-hover
            className="text-[11px] font-mono font-semibold tracking-wider px-6 py-2.5 rounded-full bg-white text-deep-black hover:bg-accent hover:text-white transition-colors duration-300 uppercase"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
