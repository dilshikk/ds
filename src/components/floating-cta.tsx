import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function FloatingCta() {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Don't show on contact page
  if (location.pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display text-xs tracking-[0.2em] uppercase px-5 py-3.5 hover:bg-accent/90 transition-all duration-300 shadow-2xl"
          >
            Start Project →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
