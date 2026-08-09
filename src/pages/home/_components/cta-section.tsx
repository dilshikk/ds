import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-40 border-t border-border/40 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            Ready to Start?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-[clamp(2.5rem,6vw,7rem)] leading-[0.92] tracking-tight"
          >
            HAVE AN IDEA?
            <br />
            <span className="text-accent">LET'S BUILD IT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-muted-foreground text-lg max-w-md leading-relaxed"
          >
            Tell us about your project. We'll get back to you within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-display text-sm tracking-[0.15em] uppercase px-8 py-5 hover:bg-accent/90 transition-all duration-300 text-base"
            >
              Start a Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border border-border text-muted-foreground font-display text-sm tracking-[0.15em] uppercase px-8 py-5 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
