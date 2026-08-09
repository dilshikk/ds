import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Code2, Smartphone, Layers, Sparkles, TrendingUp, Share2, Zap } from "lucide-react";
import { services } from "@/data/services.ts";
import type { Service } from "@/data/services.ts";
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

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.07 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group flex items-center justify-between border-b border-border py-6 hover:border-accent transition-colors duration-300"
      >
        <div className="flex items-center gap-6">
          <span className="font-display text-xs text-accent tracking-widest w-6">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-foreground group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            <p className="font-sans text-sm text-muted-foreground mt-1 max-w-sm">
              {service.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300 hidden sm:block" />
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.06 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block border border-border bg-card p-8 hover:border-accent transition-colors duration-300 h-full"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex h-10 w-10 items-center justify-center border border-border group-hover:border-accent transition-colors duration-300">
            <Icon className="h-5 w-5 text-accent" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <ul className="space-y-1.5">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
              <span className="h-px w-3 bg-accent flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header section — two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent"
            >
              Capabilities
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-display text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-none tracking-tight text-foreground"
            >
              WHAT
              <br />
              WE
              <br />
              <span className="text-accent">CREATE</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
          >
            <p className="font-display text-5xl font-bold uppercase text-muted-foreground/20 mb-6 leading-none tracking-tight">
              SERVICES
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              We offer a full spectrum of digital services — from strategy and design to development
              and growth. Every discipline is practiced at the highest level, integrated into a
              cohesive process that delivers real results.
            </p>
          </motion.div>
        </div>

        {/* Services list */}
        <div className="mb-24 border-t border-border">
          {services.map((service, index) => (
            <ServiceRow key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Services cards grid */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            All Services
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
