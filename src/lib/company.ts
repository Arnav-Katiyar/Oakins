/**
 * =====================================================================
 * GLOBAL COMPANY CONFIGURATION
 * =====================================================================
 * Update your company details below. Any change here will smoothly
 * reflect everywhere across the website (preloader, hero, navbar,
 * about, services, metadata, etc.).
 */

export const COMPANY = {
  // Main Company Name — Update this anytime!
  name: "MakeWay",

  // Short name or acronym (e.g. for small tags or badges)
  shortName: "MakeWay",

  // Stylized logo pieces for Navbar animation
  logo: {
    firstWordLead: "M",
    firstWordRest: "AKE",
    secondWordLead: "W",
    secondWordRest: "AY",
    dot: ".",
  },

  // Primary taglines & elevator pitches
  tagline: "Software solutions engineered to scale.",
  subTagline: "We build bespoke websites, mobile apps, and high-performance digital systems.",

  // Status badge on the hero section
  statusText: "Accepting new client projects",

  // Hero Headline Words (each word is animated into view)
  heroHeadline: ["We", "build", "software", "that", "survives", "real", "traffic."],

  // Services provided (replaces individual tech stack)
  services: [
    {
      title: "Web Applications & Platforms",
      description: "Custom high-converting websites, web portals, SaaS platforms, and enterprise dashboards built on modern, lightning-fast frameworks.",
      items: ["Next.js & React", "TypeScript", "Tailwind CSS", "SaaS Architecture", "High-Speed Optimization", "SEO & Web Vitals"],
    },
    {
      title: "Mobile App Development",
      description: "Fluid iOS and Android applications designed for intuitive user engagement, native performance, and offline-first reliability.",
      items: ["React Native", "iOS & Android", "Cross-Platform", "App Store Deployment", "Push Notifications", "Biometrics & Device APIs"],
    },
    {
      title: "Cloud & Backend Infrastructure",
      description: "Robust, secure APIs and microservices capable of withstanding heavy real-world traffic with high uptime.",
      items: ["Node.js & Python", "PostgreSQL & MongoDB", "REST & GraphQL APIs", "Serverless Architecture", "Docker & CI/CD", "Security & Auth"],
    },
    {
      title: "UI/UX & Product Design",
      description: "Human-centric interface design systems that turn complex business workflows into simple, elegant digital interactions.",
      items: ["Design Systems", "Figma Prototyping", "Wireframing & User Flows", "Interactive Micro-Animations", "Design-to-Code Precision", "Usability Audits"],
    },
  ],

  // Working process (Discovery -> Architecture -> Sprint Build -> Launch)
  process: [
    {
      title: "Discovery & Strategy",
      detail: "We unpack your business goals, target audience, and technical requirements to define a watertight roadmap before writing code.",
    },
    {
      title: "Architecture & UX Design",
      detail: "We design database schemas, API contracts, and user journeys into interactive prototypes, eliminating guesswork upfront.",
    },
    {
      title: "Iterative Sprint Development",
      detail: "Clean, type-safe development delivered in weekly milestones. You get continuous access to preview environments to test real progress.",
    },
    {
      title: "Quality Assurance, Launch & Scale",
      detail: "Rigorous automated testing, security audits, and zero-downtime deployment, followed by proactive monitoring to ensure reliability.",
    },
  ],

  // Company key metrics
  stats: [
    { value: 40, suffix: "+", label: "Projects Delivered" },
    { value: 99, suffix: ".9%", label: "System Uptime" },
    { value: 250, suffix: "k+", label: "Active Users Served" },
    { value: 100, suffix: "%", label: "On-Time Delivery" },
  ],
};

// Shorthand export for fast imports
export const COMPANY_NAME = COMPANY.name;
