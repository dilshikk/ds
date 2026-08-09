import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects.ts";

const ease = [0.22, 1, 0.36, 1] as const;

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-xs font-bold text-accent tracking-widest">{number}</span>
      <div className="h-px flex-1 bg-border" />
      <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center pt-28">
        <div className="text-center">
          <p className="font-display text-8xl font-bold text-border mb-6">404</p>
          <p className="font-sans text-muted-foreground mb-8">Project not found.</p>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-sans text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Work
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-28 pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-12"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <ArrowLeft className="h-3 w-3" /> Selected Work
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease, delay: 0.1 }}
                className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent"
              >
                {project.category}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="font-display text-[clamp(4rem,12vw,10rem)] font-bold uppercase leading-none tracking-tight text-foreground"
                style={{ textShadow: `0 0 120px ${project.color}40` }}
              >
                {project.title}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Year</p>
                <p className="font-display text-2xl font-bold text-foreground">{project.year}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Status</p>
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
              <div>
                <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-border px-3 py-1 font-sans text-[11px] uppercase tracking-wider text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Color bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-12 h-px origin-left"
            style={{ backgroundColor: project.color }}
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24 space-y-24">
        {/* 01 Overview */}
        <RevealSection>
          <SectionLabel number="01" label="Overview" />
          <p className="font-sans text-xl leading-relaxed text-muted-foreground max-w-3xl">
            {project.overview}
          </p>
        </RevealSection>

        {/* 02 Challenge */}
        <RevealSection>
          <SectionLabel number="02" label="Challenge" />
          <p className="font-sans text-xl leading-relaxed text-muted-foreground max-w-3xl">
            {project.challenge}
          </p>
        </RevealSection>

        {/* 03 Strategy */}
        <RevealSection>
          <SectionLabel number="03" label="Strategy" />
          <p className="font-sans text-xl leading-relaxed text-muted-foreground max-w-3xl">
            {project.strategy}
          </p>
        </RevealSection>

        {/* 04 Design */}
        <RevealSection>
          <SectionLabel number="04" label="Design" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="font-sans text-xl leading-relaxed text-muted-foreground">
              {project.designDescription}
            </p>
            <div
              className="aspect-video border border-border flex items-center justify-center"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${project.color}20, transparent)`,
              }}
            >
              <span
                className="font-display text-6xl font-bold"
                style={{ color: project.color, opacity: 0.4 }}
              >
                {project.title[0]}
              </span>
            </div>
          </div>
        </RevealSection>

        {/* 05 Development */}
        <RevealSection>
          <SectionLabel number="05" label="Development" />
          <p className="font-sans text-xl leading-relaxed text-muted-foreground max-w-3xl">
            {project.developmentDescription}
          </p>
        </RevealSection>

        {/* 06 Results */}
        <RevealSection>
          <SectionLabel number="06" label="Results" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.results.map((result, i) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="border border-border bg-card p-6"
              >
                <p
                  className="font-display text-3xl font-bold mb-2"
                  style={{ color: project.color }}
                >
                  {result.value}
                </p>
                <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  {result.metric}
                </p>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        {/* Tech Stack */}
        <RevealSection>
          <SectionLabel number="07" label="Tech Stack" />
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-border px-4 py-2 font-sans text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>

      {/* Next project */}
      <section className="border-t border-border">
        <Link
          to={`/work/${nextProject.slug}`}
          className="group block mx-auto max-w-7xl px-6 py-16"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Next Project</p>
              <h3 className="font-display text-[clamp(2rem,6vw,5rem)] font-bold uppercase text-foreground group-hover:text-accent transition-colors duration-300">
                {nextProject.title}
              </h3>
            </div>
            <div className="flex h-16 w-16 items-center justify-center border border-border group-hover:border-accent transition-colors duration-300">
              <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
