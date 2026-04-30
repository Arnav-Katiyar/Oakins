'use client';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "Java"]
  },
  {
    title: "Frontend & Frameworks",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "Firebase", "Vercel", "Docker", "REST APIs"]
  },
  {
    title: "Tools & Workflows",
    skills: ["Git", "Postman", "Jira", "Figma"]
  }
];

export function Skills() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono text-accent/60 tracking-wide mb-12"
        >
          // stack
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <motion.h4
                initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-[13px] font-mono text-white/50 uppercase tracking-[0.15em] mb-6"
              >
                {category.title}
              </motion.h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.9, y: 15, filter: 'blur(5px)' }}
                    whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{
                      duration: 0.5,
                      delay: (i * 0.1) + (j * 0.05),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    data-hover
                    className="px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.01] text-sm text-muted hover:text-white hover:border-accent/40 hover:bg-accent/[0.05] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
