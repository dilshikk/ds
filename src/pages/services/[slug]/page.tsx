import { useParams, Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowLeft, ArrowUpRight, Code2, Smartphone, Layers, Sparkles, TrendingUp, Share2, Zap } from "lucide-react";
import { services } from "@/data/services.ts";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  TrendingUp,
  Share2,
  Zap,
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  if (!service) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center pt-28">
        <div className="text-center">
          <p className="font-display text-8xl font-bold text-border mb-6">404</p>
          <p className="font-sans text-muted-foreground mb-8">Service not found.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-sans text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = iconMap[service.icon] ?? Code2;
  const serviceIndex = services.findIndex((s) => s.slug === slug);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section ref={heroRef} className="pt-28 pb-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="mb-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <ArrowLeft className="h-3 w-3" /> Services
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease, delay: 0.1 }}
                className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-border"
              >
                <Icon className="h-7 w-7 text-accent" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, ease, delay: 0.15 }}
                className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-accent"
              >
                {String(serviceIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
                className="font-display text-[clamp(3rem,9vw,8rem)] font-bold uppercase leading-none tracking-tight text-foreground"
              >
                {service.title}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.35 }}
              className="font-sans text-lg leading-relaxed text-muted-foreground"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Items grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          What's included
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {service.items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.06 }}
              className="border border-border bg-card p-6 flex items-center gap-4"
            >
              <div className="h-px w-6 bg-accent flex-shrink-0" />
              <span className="font-sans text-sm text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long description */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <p className="font-display text-5xl font-bold uppercase text-muted-foreground/10 leading-none">
              ABOUT
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-2"
          >
            <p className="font-sans text-xl leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-7xl px-6 py-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-accent mb-2">Ready?</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground">
              Start a Project
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 font-sans text-sm uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
