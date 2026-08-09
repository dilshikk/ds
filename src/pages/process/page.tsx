import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business deeply. We research your market, analyse competitors, audit your existing digital assets, and define clear success metrics. This phase shapes every decision that follows.",
    duration: "1–2 weeks",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Discovery data becomes a concrete plan. We define the information architecture, content strategy, technology stack, and project roadmap. You receive a strategy document that serves as the single source of truth for the entire project.",
    duration: "1 week",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We translate strategy into visual reality. Wireframes establish structure, then high-fidelity designs bring the brand to life. We work in iterative design sprints, incorporating your feedback until every screen is right.",
    duration: "2–4 weeks",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Development begins with approved designs. We write clean, documented code built for performance and scalability. Every feature is tested across devices and browsers as it's built, eliminating end-stage surprises.",
    duration: "3–8 weeks",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Launch is not a finish line — it is a carefully staged event. We run pre-launch QA, performance audits, and SEO checks. We deploy progressively and monitor in real time to catch any issues before they affect your users.",
    duration: "1 week",
  },
  {
    number: "06",
    title: "Grow",
    description:
      "After launch, we track performance against the KPIs we defined in discovery. We run A/B tests, refine based on user behaviour data, and build additional features. Most of our clients stay with us for months or years after launch.",
    duration: "Ongoing",
  },
];

function ProcessStep({ step, index }: { step: typeof steps[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLast = index === steps.length - 1;

  return (
    <div ref={ref} className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
          className="absolute left-[2.75rem] top-full h-16 w-px origin-top bg-border hidden md:block"
        />
      )}

      <motion.div
        initial={{ opacity: 0, x: -48 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease, delay: index * 0.05 }}
        className="group grid grid-cols-1 md:grid-cols-[6rem_1fr_auto] gap-6 md:gap-12 items-start border border-border bg-card p-8 md:p-12 hover:border-accent transition-colors duration-300 mb-px"
      >
        {/* Number */}
        <div className="flex items-center gap-4 md:block">
          <span className="font-display text-4xl md:text-5xl font-bold text-accent leading-none">
            {step.number}
          </span>
        </div>

        {/* Content */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
            {step.title}
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground max-w-2xl">
            {step.description}
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-start md:items-center">
          <div className="border border-border px-4 py-2 group-hover:border-accent transition-colors duration-300">
            <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
              Duration
            </p>
            <p className="font-display text-sm font-bold text-foreground">
              {step.duration}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-28 pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent"
          >
            How we work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display font-bold uppercase leading-none tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            FROM IDEA
            <br />
            <span className="text-accent">TO IMPACT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-8 font-sans text-lg text-muted-foreground max-w-2xl"
          >
            A six-stage process built around clarity, craft, and measurable outcomes.
            No surprises, no excuses — just methodical progress toward your goals.
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {steps.map((step, index) => (
          <ProcessStep key={step.number} step={step} index={index} />
        ))}
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-7xl px-6 py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-4">
                Ready to start?
              </p>
              <h2
                className="font-display font-bold uppercase text-foreground leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              >
                Begin the
                <br />
                Discovery
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-sans text-base text-muted-foreground">
                Every great project starts with a conversation. Tell us about your idea and we'll
                show you exactly how we'd approach it.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 border border-border px-8 py-4 font-sans text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
