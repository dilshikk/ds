import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  { num: "01", title: "DISCOVER", desc: "Deep dive into your business, audience, and goals. We ask the questions others skip." },
  { num: "02", title: "STRATEGY", desc: "We define the digital strategy — positioning, architecture, and roadmap." },
  { num: "03", title: "DESIGN", desc: "UX/UI design and visual concept. Every screen is crafted with purpose." },
  { num: "04", title: "BUILD", desc: "Clean, performant, scalable development. We build products that last." },
  { num: "05", title: "LAUNCH", desc: "QA, optimisation, and a smooth go-live. Your product enters the world ready." },
  { num: "06", title: "GROW", desc: "SEO, SMM, analytics, and continuous improvement. We stay with you." },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 border-t border-border/40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">How We Work</p>
              <h2 className="font-display font-bold text-[clamp(2.5rem,5vw,6rem)] leading-[0.95] tracking-tight">
                FROM IDEA<br />TO IMPACT.
              </h2>
              <p className="mt-8 text-muted-foreground leading-relaxed max-w-sm">
                A structured process that eliminates guesswork. Every phase has clear deliverables and outcomes.
              </p>
            </motion.div>
          </div>

          {/* Right — steps */}
          <div className="space-y-0 divide-y divide-border/40">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-6 py-6 hover:pl-4 transition-all duration-300"
              >
                <span className="font-mono text-xs text-accent/60 group-hover:text-accent transition-colors shrink-0 mt-1">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg tracking-wider group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
