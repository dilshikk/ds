import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects.ts";
import type { Project } from "@/data/projects.ts";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay: index * 0.08 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group relative block overflow-hidden border border-border bg-card"
        style={{ minHeight: featured ? "520px" : "380px" }}
      >
        {/* Radial gradient accent */}
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 70% 40%, ${project.color}55, transparent)`,
          }}
        />

        {/* Hover arrow */}
        <div className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-border bg-background opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-accent">
          <ArrowUpRight className="h-5 w-5 text-accent" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
          {/* Top */}
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
            <span
              className="border px-3 py-1 font-sans text-[10px] uppercase tracking-widest"
              style={{
                borderColor: project.status === "Live" ? "oklch(0.78 0.18 195)" : "oklch(0.35 0 0)",
                color: project.status === "Live" ? "oklch(0.78 0.18 195)" : "oklch(0.55 0 0)",
              }}
            >
              {project.status}
            </span>
          </div>

          {/* Bottom */}
          <div>
            <h2
              className="font-display mb-4 font-bold uppercase leading-none tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent"
              style={{ fontSize: featured ? "clamp(3rem, 7vw, 6rem)" : "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {project.title}
            </h2>
            <p className="mb-6 font-sans text-sm text-muted-foreground max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1 font-sans text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Accent bottom line */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: project.color }}
        />
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-tight text-foreground"
          >
            SELECTED
            <br />
            <span className="text-accent">WORK</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="mt-8 h-px w-full origin-left bg-border"
          />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center font-sans text-sm text-muted-foreground"
        >
          {projects.length} projects — more on request
        </motion.p>
      </div>
    </main>
  );
}
