import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "7", label: "Core Services" },
  { value: "10+", label: "Industries" },
  { value: "5 yrs", label: "In Practice" },
];

const values = [
  {
    title: "Design That Sells",
    description:
      "We design with conversion in mind. Beautiful is not enough — every interface must drive the outcome the business needs.",
  },
  {
    title: "Technology That Scales",
    description:
      "We build on solid foundations. The code we write today supports the company you plan to become, not just the one you are.",
  },
  {
    title: "Strategy First",
    description:
      "We understand your market before writing a line of code. Strategy is not a phase — it runs through every decision we make.",
  },
  {
    title: "Long-Term Growth",
    description:
      "We measure success by what happens after launch. Our work is designed to compound: better rankings, higher conversion, more revenue.",
  },
];

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-28 pb-32 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-accent"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-display font-bold uppercase leading-none tracking-tight text-foreground"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            WE ARE
            <br />
            <span className="text-accent">DS CREATIVE</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              <div className="lg:col-span-1">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-2">Our Story</p>
                <div className="h-px w-full bg-border mt-4" />
              </div>
              <div className="lg:col-span-2">
                <p className="font-sans text-2xl leading-relaxed text-muted-foreground">
                  DS CREATIVE is a digital studio focused on creating meaningful digital experiences.
                  We combine strategy, design and technology to build digital products that help
                  businesses grow.
                </p>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground mt-6">
                  We work with ambitious brands — from emerging startups to established companies —
                  who understand that exceptional digital presence is a competitive advantage, not an
                  expense. Every project we take on is treated as a long-term investment in our
                  client's growth.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="bg-background p-10 text-center"
              >
                <p className="font-display text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <RevealSection>
            <div className="flex items-baseline gap-8 mb-16">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">Our Values</p>
              <div className="h-px flex-1 bg-border" />
            </div>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="bg-background p-10 group hover:bg-card transition-colors duration-300"
              >
                <p className="font-display text-xs text-accent tracking-widest mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-7xl px-6 py-28 text-center"
        >
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Let's build something
          </p>
          <h2
            className="font-display font-bold uppercase text-foreground mb-10 leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Start a Project
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border border-border px-10 py-5 font-sans text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
