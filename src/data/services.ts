export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  items: string[];
  longDescription: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    icon: "Code2",
    description: "From corporate websites to complex web applications — we build fast, scalable digital products.",
    items: ["Corporate websites", "Landing pages", "E-commerce", "Web applications", "Custom platforms", "CMS"],
    longDescription: "We build performant, scalable web products using modern technologies. Every project starts with architecture planning and ends with comprehensive testing and optimisation.",
  },
  {
    slug: "app-development",
    title: "App Development",
    shortTitle: "Apps",
    icon: "Smartphone",
    description: "Native and cross-platform mobile applications built for performance and user experience.",
    items: ["iOS", "Android", "Cross-platform", "MVP", "SaaS products"],
    longDescription: "From MVP to full-scale application, we design and develop mobile experiences that users love and businesses rely on.",
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    shortTitle: "Design",
    icon: "Layers",
    description: "User interfaces and experiences designed with intention — beautiful, functional, and conversion-optimised.",
    items: ["Product design", "Web design", "Mobile interfaces", "Design systems", "UX research", "Prototyping"],
    longDescription: "Design is not decoration. We create interfaces that guide users toward their goals while strengthening your brand at every touchpoint.",
  },
  {
    slug: "branding",
    title: "Branding",
    shortTitle: "Brand",
    icon: "Sparkles",
    description: "Brand identities that communicate who you are and why you matter — built to last.",
    items: ["Brand identity", "Logo", "Visual system", "Typography", "Guidelines", "Creative direction"],
    longDescription: "A strong brand is the foundation of every successful digital product. We build brand systems that scale across every medium and moment.",
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    icon: "TrendingUp",
    description: "Search visibility built into the product architecture — not added as an afterthought.",
    items: ["Technical SEO", "On-page SEO", "Content strategy", "Analytics", "Performance", "Organic growth"],
    longDescription: "We architect sites to rank. Technical excellence, semantic structure, and content strategy work together to build lasting organic growth.",
  },
  {
    slug: "smm",
    title: "SMM",
    shortTitle: "SMM",
    icon: "Share2",
    description: "Social media strategy and creative production that turns attention into measurable growth.",
    items: ["Social strategy", "Content", "Creative production", "Advertising", "Community", "Analytics"],
    longDescription: "We create social media presences that reflect your brand's quality and drive real business outcomes — not just likes.",
  },
  {
    slug: "automation",
    title: "Automation",
    shortTitle: "Automation",
    icon: "Zap",
    description: "Telegram bots, CRM integrations, AI solutions and business automation that save time and money.",
    items: ["Telegram bots", "Business automation", "CRM integrations", "AI solutions", "Internal systems", "API integrations"],
    longDescription: "We identify repetitive processes in your business and build intelligent automations that free your team to focus on what matters.",
  },
];
