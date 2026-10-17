import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SoundFamiliar } from "@/components/SoundFamiliar";
import { WhatWeDo } from "@/components/WhatWeDo";
import { SelectedWork } from "@/components/SelectedWork";
import { HowWeWork } from "@/components/HowWeWork";
import { AboutTeam } from "@/components/AboutTeam";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

/**
 * Oakins Website Main Page
 * Follows the exact 11-section structure requested in the implementation brief:
 * 1. Hero
 * 2. Sound Familiar?
 * 3. What We Do
 * 4. Selected Work
 * 5. How We Work
 * 6. About the Team
 * 7. Testimonials
 * 8. Pricing
 * 9. FAQ
 * 10. Final CTA and Contact
 * 11. Footer
 *
 * NOTE: Rendered directly in HTML without blocking client-side preloaders
 * or fragile scroll-triggered opacity states, guaranteeing full visibility
 * for crawlers, slow connections, and all devices.
 */
export default function OakinsWebsite() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="min-h-screen">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Sound Familiar? */}
        <SoundFamiliar />

        {/* 3. What We Do (Services) */}
        <WhatWeDo />

        {/* 4. Selected Work */}
        <SelectedWork />

        {/* 5. How We Work (Process) */}
        <HowWeWork />

        {/* 6. About the Team */}
        <AboutTeam />

        {/* 7. Testimonials / Collaboration */}
        <Testimonials />

        {/* 8. Pricing Packages */}
        <Pricing />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. Final CTA & Contact */}
        <FinalCTA />
      </main>

      {/* 11. Footer */}
      <Footer />
    </>
  );
}
