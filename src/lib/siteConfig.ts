/**
 * Oakins Central Business Configuration
 * All business details, links, and contact channels are defined here
 * and can be overridden via environment variables.
 */

export const SITE_CONFIG = {
  name: "Oakins",
  legalName: "Oakins Digital",
  tagline: "Digital tools for real world businesses",
  shortDescription: "Oakins helps small businesses and individuals organise their operations, get online, and streamline daily work with tools built around how you actually operate.",
  headline: "Your business, organised and running smoothly.",
  subLabel: "Practical digital solutions for growing businesses",
  
  // Capacity statement (configurable)
  capacityStatement: "Taking on 2 new clients this month",
  isCapacityActive: true,

  // Verified Business Contact Details
  contact: {
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "anadi.sharma.contact@gmail.com",
    phoneDisplay: "+91 95751 45137",
    phoneRaw: "+919575145137",
    whatsappNumber: "919575145137",
    whatsappMessage: "Hi Oakins, I would like to discuss a digital solution for my business.",
    whatsappUrl: "https://wa.me/919575145137?text=Hi%20Oakins%2C%20I%20would%20like%20to%20discuss%20a%20digital%20solution%20for%20my%20business.",
    location: "Indore, Madhya Pradesh, India",
    // Booking URL: falls back to #contact form if unconfigured
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "#contact",
  },

  // Color tokens from the Brand Style Reference
  colors: {
    primaryDark: "#2E1F1B",   // Deep espresso brown
    background: "#F6EBDD",    // Warm cream
    accentBeige: "#D2B07A",   // Warm tan
    lightAccent: "#EBD7B7",   // Light beige
    mustard: "#E3A23C",       // Mustard / Amber Gold CTA
  },

  // Navigation Links
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  // Relatable Small Business Pain Points
  soundFamiliar: {
    heading: "Running a business shouldn't feel this complicated.",
    intro: "When you run a business, your time should be spent serving customers and growing — not wrestling with messy manual tasks.",
    problems: [
      {
        icon: "MessageSquareWarning",
        title: "Orders getting lost in WhatsApp chats",
        description: "Customer inquiries, order changes, and payment screenshots mixed together in personal messaging threads where details easily slip through.",
      },
      {
        icon: "FileSpreadsheet",
        title: "Customer data scattered everywhere",
        description: "Phone numbers in paper registers, customer history in spreadsheets, and pending follow-ups living in memory.",
      },
      {
        icon: "SearchX",
        title: "Customers struggling to find you online",
        description: "Missing or outdated website, no clear digital catalog or menu, and losing prospective customers to competitors who are easier to discover.",
      },
      {
        icon: "ClockAlert",
        title: "Too much time on repetitive tasks",
        description: "Typing the same price lists, calculating bills manually, sending manual reminders, and copying data between multiple places.",
      },
    ],
    resolution: "Oakins identifies where your daily workflows get bogged down and builds straightforward tools that fit the way you already work — without unnecessary technical jargon.",
  },

  // Services / What We Do
  services: [
    {
      id: "get-online",
      title: "Get Online",
      subtitle: "Professional Web Presence",
      summary: "Clean, high-performance websites and digital storefronts that build credibility and bring new customers through your door.",
      problemSolved: "Helps prospective customers find your business on Google, explore your offerings, and trust your brand immediately.",
      deliverables: [
        "Modern responsive websites",
        "Clear service & product showcases",
        "Local SEO setup (Indore & target markets)",
        "Mobile-first design for quick browsing",
        "Fast page loading speeds",
      ],
      ctaText: "Discuss a new website",
    },
    {
      id: "orders-bookings",
      title: "Take Orders & Bookings",
      subtitle: "Digital Inquiries & Payments",
      summary: "Streamlined order capture, appointment scheduling, and customer inquiry pathways that work 24/7.",
      problemSolved: "Replaces chaotic message-based orders with organized digital forms, clear booking slots, and direct payment pathways.",
      deliverables: [
        "Online catalogs & digital menus",
        "Appointment & consultation booking",
        "UPI & online payment integrations",
        "Automated booking confirmations",
        "Direct WhatsApp inquiry routing",
      ],
      ctaText: "Set up orders & bookings",
    },
    {
      id: "operations",
      title: "Run Your Operations",
      subtitle: "Internal Tools & Dashboards",
      summary: "Simple dashboards and central records to keep your orders, inventory, and customer details organized in one place.",
      problemSolved: "Eliminates duplicate spreadsheet entries and gives you a single source of truth for daily operations.",
      deliverables: [
        "Custom management dashboards",
        "Inventory & stock trackers",
        "Customer record management (CRM)",
        "Automated billing & invoice generation",
        "Exportable daily/monthly reports",
      ],
      ctaText: "Simplify operations",
    },
    {
      id: "reach-retain",
      title: "Reach & Retain Customers",
      subtitle: "Customer Engagement & Workflows",
      summary: "Automated notifications, email/WhatsApp updates, and lightweight loyalty workflows that keep customers coming back.",
      problemSolved: "Saves hours spent manually reminding clients, sharing updates, or following up on pending requests.",
      deliverables: [
        "WhatsApp & email notification workflows",
        "Order status & reminder alerts",
        "Customer loyalty & feedback capture",
        "Lightweight business web apps",
        "Centralized lead tracking",
      ],
      ctaText: "Automate customer reach",
    },
  ],

  // Selected Work (Verified Real Projects)
  selectedWork: {
    heading: "Selected Work",
    subheading: "Real solutions built for real businesses and active workflows.",
    featured: {
      title: "Amaze Global Exports",
      category: "Global Export & Catalog Website",
      tagline: "A dedicated digital showcase built to present premium fashion collections to buyers worldwide.",
      liveUrl: "https://www.amazeglobalexports.com/",
      challenge: "The export company needed an authoritative digital storefront to showcase women's apparel collections to overseas buyers, establish commercial trust, and channel international business inquiries reliably.",
      whatWeBuilt: "Designed and engineered a fast, responsive website featuring high-resolution collection galleries, transparent product categorization, worldwide shipping information, and direct buyer inquiry pathways.",
      outcome: "Delivered a fully responsive digital catalog that international buyers can easily browse on desktop and mobile, giving the business a professional presence for global trade.",
      screenshots: [
        {
          src: "/projects/amaze-homepage.png",
          alt: "Amaze Global Exports homepage hero and brand presentation",
          label: "Homepage & Brand Identity",
        },
        {
          src: "/projects/amaze-catalog.png",
          alt: "Amaze Global Exports curated product catalog and collection grid",
          label: "Curated Product Catalog",
        },
        {
          src: "/projects/amaze-features.png",
          alt: "Amaze Global Exports export logistics and quality highlights",
          label: "Export Logistics & Details",
        },
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mobile-Optimized"],
    },
    otherProjects: [
      {
        title: "Live Event Leaderboard",
        category: "Real-Time Scoreboard App",
        tagline: "Interactive live competition standings display engineered for real-time score tracking.",
        problem: "Event organizers needed a fast, high-contrast leaderboard so competition participants could track team rankings without constant manual page refreshes.",
        whatWeBuilt: "Built a responsive web application featuring live polling endpoints, instant score adjustments, and high-visibility ranking boards.",
        outcome: "Reliably served live standings throughout competitive events with zero disruption or manual refresh requirements.",
        liveUrl: "https://leaderboard-cloudstudyjam.vercel.app/",
        githubUrl: "https://github.com/itsmeanadi/Leaderboard-CloudStudyJam",
        technologies: ["TypeScript", "React", "Node.js", "REST APIs"],
      },
      {
        title: "Traffic & Telemetry Dashboard",
        category: "Data Visualization Prototype",
        tagline: "High-frequency telemetry and analytics dashboard for geographic and time-series data.",
        problem: "Presenting real-time sensor and location streams clearly without sluggish UI rendering or cluttered controls.",
        whatWeBuilt: "Created an interactive dashboard prototype with real-time chart components, dynamic filtering controls, and responsive grid layouts.",
        outcome: "Demonstrated fluid chart updates and filter operations under streaming data conditions.",
        liveUrl: "https://merge-conflicts-6k9l.vercel.app/",
        githubUrl: "https://github.com/itsmeanadi/Merge-Conflicts/tree/main/traffic-frontend",
        technologies: ["Next.js", "TypeScript", "Data Visualization"],
      },
      {
        title: "CleanWeb DOM Utility",
        category: "Client-Side Utility",
        tagline: "Lightweight browser extension for dynamic content parsing and DOM sanitization.",
        problem: "Filtering dynamic DOM mutations inside complex single-page apps without causing CPU bottlenecks.",
        whatWeBuilt: "Implemented a focused browser extension using the MutationObserver API to cleanly monitor and sanitize dynamic content.",
        outcome: "A functional client utility operating with minimal system overhead across modern web applications.",
        liveUrl: "",
        githubUrl: "https://github.com/anadisharma5683/Extension_Moderator",
        technologies: ["JavaScript", "DOM API", "Browser Extension"],
      },
    ],
  },

  // Process / How We Work
  process: {
    heading: "A clear process. No unnecessary complexity.",
    subheading: "Every project follows a straightforward, collaborative sequence. You always know what is happening next.",
    disclaimer: "Timelines are indicative estimates based on typical small business projects. Final delivery dates depend on project scope and timely feedback.",
    steps: [
      {
        number: "01",
        title: "We Learn Your Business",
        timeline: "Week 1",
        detail: "We spend time understanding your day-to-day operations, where you lose time, how your customers contact you, and what goals matter most right now.",
      },
      {
        number: "02",
        title: "We Plan the Solution",
        timeline: "Week 1",
        detail: "We outline an honest, focused scope — recommending only what you actually need, agreeing on deliverables, and fixing the estimated cost upfront.",
      },
      {
        number: "03",
        title: "We Build in Small Steps",
        timeline: "Weeks 2–4 (scope dependent)",
        detail: "We build your website or digital tool iteratively, sharing working previews along the way so you can test, give feedback, and ensure it feels right.",
      },
      {
        number: "04",
        title: "Launch and Support",
        timeline: "Scope dependent",
        detail: "We handle the launch, test everything thoroughly across devices, guide you through how to use it, and remain available for ongoing adjustments.",
      },
    ],
  },

  // About Team
  about: {
    heading: "Small team. Direct collaboration.",
    intro: "Oakins is an independent digital studio founded by Anadi Sharma, based in Indore, India. We partner directly with small business owners, clinic managers, retail shops, and consultants to build practical digital tools.",
    values: [
      {
        title: "Direct communication with the builder",
        description: "You speak directly with the person designing and writing the code — no account managers, no diluted messages, and no runaround.",
      },
      {
        title: "Practical solutions over hype",
        description: "We don't recommend complicated software when a clean 3-page website or an automated WhatsApp link solves the problem faster and cheaper.",
      },
      {
        title: "Clear scope & transparent expectations",
        description: "No hidden fees, no technical jargon meant to confuse you, and no surprise charges. Everything is agreed upon clearly before work starts.",
      },
    ],
  },

  // Pricing Packages
  pricing: {
    heading: "Straightforward packages for growing businesses.",
    subheading: "Clear deliverables designed to fit where your business is today. Custom quotes are prepared after reviewing your exact requirements.",
    note: "All quotes are customized based on required integrations, volume of content, and specific workflows. No surprise additions.",
    packages: [
      {
        name: "Starter",
        tagline: "For businesses establishing a solid online presence.",
        idealFor: "Local shops, clinics, consultants, and solo practitioners getting online.",
        priceText: "Tailored Quote",
        deliverables: [
          "Custom responsive website (up to 5 sections/pages)",
          "Mobile-first design tested on all screen sizes",
          "Direct WhatsApp & phone call integration",
          "Contact form with email delivery",
          "Google Business & local search setup guidance",
          "Fast hosting setup & domain connection",
        ],
        cta: "Request Starter Quote",
      },
      {
        name: "Growth",
        tagline: "For businesses streamlining customer inquiries & orders.",
        idealFor: "Retailers, service providers, and creators wanting automated workflows.",
        featured: true,
        priceText: "Tailored Quote",
        deliverables: [
          "Everything in Starter, plus:",
          "Interactive catalog or digital booking calendar",
          "Customer inquiry & lead capture pipeline",
          "Payment gateway or UPI QR integration",
          "Automated WhatsApp notification workflows",
          "Basic customer records spreadsheet / sheet sync",
        ],
        cta: "Request Growth Quote",
      },
      {
        name: "Custom",
        tagline: "For unique operational workflows, apps & internal tools.",
        idealFor: "Growing businesses managing inventory, staff, or custom order flows.",
        priceText: "Based on Requirements",
        deliverables: [
          "Custom operational dashboard or internal web app",
          "Tailored inventory & order management systems",
          "Third-party API & database integrations",
          "Multi-role user authentication (admin/staff)",
          "Custom reporting & automated data exports",
          "Dedicated post-launch maintenance plan",
        ],
        cta: "Discuss Custom Project",
      },
    ],
  },

  // Frequently Asked Questions
  faq: {
    heading: "Frequently Asked Questions",
    subheading: "Clear, straightforward answers about working with Oakins.",
    items: [
      {
        q: "How much does a project cost?",
        a: "Every project is priced according to its specific scope and complexity rather than a rigid formula. A focused 3-to-5 section business website has very different requirements than an interactive booking dashboard. We provide a transparent, fixed-price quote after our initial 20-minute check-up so you know the exact investment upfront.",
      },
      {
        q: "How long does a project take?",
        a: "A straightforward business website typically takes 2 to 3 weeks from initial planning to launch. More comprehensive projects involving custom booking flows, customer records, or internal dashboards usually take 3 to 6 weeks. We provide an estimated timeline before starting and share working previews along the way.",
      },
      {
        q: "Do I need technical knowledge to work with you?",
        a: "Not at all. We handle all the technical details — from domain setup, hosting, and responsive design to payment links and forms. We explain choices in plain business language and walk you through how to use your new website or tool before launch.",
      },
      {
        q: "Can you improve my existing website or workflow?",
        a: "Yes. Many businesses already have a website or rely on spreadsheets and WhatsApp threads. We can audit what you currently use, identify what is slowing you down, and either rebuild the website or add targeted automations without disrupting your current operations.",
      },
      {
        q: "What happens after launch?",
        a: "After launch, we verify that all forms, links, and mobile layouts are performing properly in production. We hand over all assets and access credentials, provide a clear walkthrough of how everything works, and remain available for any initial tweaks.",
      },
      {
        q: "Do you provide maintenance and ongoing support?",
        a: "Yes. We offer flexible ongoing support for businesses that want us to handle content updates, security checks, feature additions, and routine monitoring. You can choose occasional pay-as-you-go help or a predictable monthly maintenance plan.",
      },
      {
        q: "How do we get started?",
        a: "The easiest way is to book a free 20-minute business check-up or send a quick message through WhatsApp or the contact form below. Tell us what your business does and what you'd like to improve. We'll reply promptly with practical initial recommendations.",
      },
    ],
  },
};
