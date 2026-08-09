import { motion, useInView } from "motion/react";
import { useRef } from "react";

const reasons = [
  { title: "Design + Technology", desc: "We unite design and engineering in one team. No handoffs, no gaps." },
  { title: "Business First", desc: "Beautiful interfaces that serve a business purpose. Every decision is justified." },
  { title: "Custom Everything", desc: "No templates. No shortcuts. Everything is built for your specific challenge." },
  { title: "Performance Obsessed", desc: "Fast-loading, Core Web Vitals optimised products that perform under pressure." },
  { title: "SEO by Architecture", desc: "Search visibility is designed in — not patched on afterwards." },
  { title: "Long-Term Partnership", desc: "We help you grow beyond launch. Strategy, SEO, SMM, and continuous development." },
];

export default function WhySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Why DS Creative</p>
          <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,6rem)] leading-[0.95] tracking-tight">
            WHY CHOOSE<br />DS CREATIVE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-border/40 p-8 hover:border-accent/40 transition-all duration-300 bg-card/30"
            >
              <span className="font-mono text-xs text-accent/60 group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-bold text-xl tracking-tight mt-4 mb-3 group-hover:text-accent transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
