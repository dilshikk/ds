import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { services } from "@/data/services.ts";
import {
  Code2,
  Smartphone,
  Layers,
  Sparkles,
  TrendingUp,
  Share2,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

export default function ServicesSection() {
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
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">What We Create</p>
            <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,6rem)] leading-[0.95] tracking-tight">
              SERVICES
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-sm text-muted-foreground text-sm leading-relaxed"
          >
            From brand strategy to product launch — we cover every discipline your business needs to succeed digitally.
          </motion.p>
        </div>

        {/* Services list */}
        <div className="divide-y divide-border/40">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group flex items-center justify-between py-6 md:py-8 hover:pl-4 transition-all duration-300"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-xs tracking-widest text-muted-foreground font-mono w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                    {iconMap[service.icon]}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-3xl lg:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
                      {service.title.toUpperCase()}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-sm hidden md:block">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="hidden lg:flex flex-wrap gap-2 max-w-xs justify-end">
                    {service.items.slice(0, 3).map((item) => (
                      <span key={item} className="text-xs tracking-wider text-muted-foreground border border-border/50 px-2 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="w-10 h-10 border border-border/50 group-hover:border-accent flex items-center justify-center text-muted-foreground group-hover:text-accent transition-all duration-300 text-lg">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground border-b border-transparent hover:border-foreground transition-all duration-300 pb-0.5"
          >
            View all services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
