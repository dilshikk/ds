import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { projects } from "@/data/projects.ts";

export default function WorkSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Selected Work</p>
            <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,6rem)] leading-[0.95] tracking-tight">
              PROJECTS
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/work"
              className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground transition-all duration-300 pb-0.5"
            >
              View All Work
            </Link>
          </motion.div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link to={`/work/${project.slug}`} className="group block overflow-hidden">
                {/* Image placeholder with gradient */}
                <div
                  className={`relative overflow-hidden bg-card ${i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"}`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-40 transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: `radial-gradient(ellipse at 30% 50%, ${project.color}25, transparent 70%)` }}
                  />

                  {/* Abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="font-display font-bold text-[clamp(4rem,12vw,14rem)] leading-none tracking-tighter opacity-5 group-hover:opacity-10 transition-opacity duration-700 select-none"
                    >
                      {project.title.slice(0, 2)}
                    </div>
                  </div>

                  {/* Geometric accent */}
                  <div
                    className="absolute top-8 right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-xl"
                    style={{ background: project.color }}
                  />

                  {/* Grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "linear-gradient(oklch(0.97 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0 0) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Status tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase border border-border/50 bg-background/80 backdrop-blur-sm text-muted-foreground px-2 py-1">
                      {project.status}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6 w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center text-xl"
                  >
                    →
                  </motion.div>
                </div>

                {/* Info */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end shrink-0 max-w-[200px]">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wider text-muted-foreground border border-border/40 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
