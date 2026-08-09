import { Link } from "react-router-dom";
import { services } from "@/data/services.ts";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
  { label: "Insights", href: "/insights" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-lg font-bold tracking-[0.2em] text-foreground hover:text-accent transition-colors duration-300">
              DS CREATIVE
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Digital studio for ambitious brands.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5">Social</p>
            <ul className="space-y-3 mb-8">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-display tracking-[0.1em] uppercase text-accent border border-accent/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-4 py-2.5"
            >
              Start Project →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {year} DS CREATIVE. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wider">
            Design. Development. Growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
