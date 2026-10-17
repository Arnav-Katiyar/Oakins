/**
 * =====================================================================
 * GLOBAL STUDIO CONFIGURATION
 * =====================================================================
 * MakeWay — Early-stage website & software development studio.
 */

export const COMPANY = {
  // Studio Name
  name: "MakeWay",
  shortName: "MakeWay",

  // Stylized logo pieces for Navbar animation
  logo: {
    firstWordLead: "M",
    firstWordRest: "AKE",
    secondWordLead: "W",
    secondWordRest: "AY",
    dot: ".",
  },

  // Taglines & Hero Copy
  tagline: "Good ideas deserve better websites.",
  subTagline: "We design and build modern websites and digital experiences that help businesses establish their online presence and turn ideas into reality.",

  // Status badge on the hero section
  statusText: "Available for new projects",

  // Hero headline words (word-by-word animated reveal)
  heroHeadline: ["Good", "ideas", "deserve", "better", "websites."],

  // Services offered (honest, practical capabilities)
  services: [
    {
      title: "Business Websites",
      description: "Modern, responsive websites that help businesses showcase their services, build credibility, and connect with potential customers.",
      items: ["Responsive Layouts", "Next.js & React", "Clean Typography", "SEO Basics", "Contact Forms", "Fast Page Speeds"],
    },
    {
      title: "Web Applications",
      description: "Interactive web experiences, internal tools, and dashboards designed around real workflows and user needs.",
      items: ["Full-Stack Next.js", "React & TypeScript", "Custom Dashboards", "State Management", "Tailwind CSS", "Interactive UIs"],
    },
    {
      title: "Backend & Integrations",
      description: "APIs, databases, and third-party integrations that connect the pieces behind your digital product.",
      items: ["REST APIs", "Node.js", "Database Setup", "Third-Party APIs", "Authentication", "Cloud Deployment"],
    },
    {
      title: "UI/UX & Landing Pages",
      description: "Clear page structures, thoughtful interfaces, and focused landing pages designed to communicate your value.",
      items: ["Figma Wireframes", "Landing Page Design", "Clear Navigation", "Visual Hierarchy", "Design Systems", "Prototyping"],
    },
  ],

  // Working process
  process: [
    {
      title: "Discovery & Planning",
      detail: "We understand your business, audience, requirements, and goals before defining the scope.",
    },
    {
      title: "Design & Structure",
      detail: "We plan the user experience, page structure, and visual direction before moving into development.",
    },
    {
      title: "Build & Refine",
      detail: "We develop the solution, review feedback, and improve the details together.",
    },
    {
      title: "Testing & Launch",
      detail: "We check responsiveness, functionality, and essential quality requirements before delivery.",
    },
  ],
};

export const COMPANY_NAME = COMPANY.name;
