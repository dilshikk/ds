import { motion, useInView } from "motion/react";
import { useRef } from "react";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "PostgreSQL", "Redis", "Docker", "Figma", "AI / ML",
  "Three.js", "GraphQL",
];

const industries = [
  "E-commerce", "Restaurants", "Real Estate", "Finance",
  "Technology", "Healthcare", "Education", "Retail",
  "Startups", "Corporate",
];

export default function TechSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Technologies */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Built With</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-12">
                MODERN<br />TECHNOLOGY
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                  className="group border border-border/50 hover:border-accent/60 px-4 py-2 font-sans text-sm text-muted-foreground hover:text-accent transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">We Work With</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-12">
                10+ INDUSTRIES
              </h2>
            </motion.div>
            <div className="divide-y divide-border/40">
              {industries.map((industry, i) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="group flex items-center justify-between py-3 hover:pl-3 transition-all duration-300"
                >
                  <span className="font-display text-sm font-medium tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 uppercase">
                    {industry}
                  </span>
                  <span className="w-1.5 h-1.5 bg-transparent group-hover:bg-accent rounded-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
