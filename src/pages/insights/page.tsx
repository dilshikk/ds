import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const ease = [0.22, 1, 0.36, 1] as const;

type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
};

const articles: Article[] = [
  {
    slug: "why-dark-mode-converts",
    title: "Why Dark Mode Converts: The Psychology Behind Premium UX",
    category: "Web Design",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    excerpt:
      "Dark interfaces signal exclusivity and focus. We break down the psychological mechanisms behind dark-mode design patterns and how they drive higher conversion in premium markets.",
  },
  {
    slug: "headless-commerce-2025",
    title: "Headless Commerce in 2025: Architecture That Sells",
    category: "Development",
    date: "Feb 5, 2025",
    readTime: "9 min read",
    excerpt:
      "Shopify templates are a ceiling, not a foundation. We explore why headless architecture is the only viable path for brands serious about performance, UX, and long-term growth.",
  },
  {
    slug: "seo-core-web-vitals",
    title: "Core Web Vitals Are a Brand Signal, Not Just an SEO Metric",
    category: "SEO",
    date: "Feb 18, 2025",
    readTime: "7 min read",
    excerpt:
      "A 3-second load time doesn't just hurt your rankings — it tells your prospect that your business doesn't care. We explain how performance engineering is brand engineering.",
  },
  {
    slug: "ai-in-design-workflow",
    title: "How We Use AI in Our Design Workflow (Without Losing the Craft)",
    category: "AI",
    date: "Mar 4, 2025",
    readTime: "8 min read",
    excerpt:
      "AI tools are accelerators, not replacements. We share exactly how we integrate generative tools into our process — where they help, where they hurt, and how we keep the work honest.",
  },
  {
    slug: "brand-identity-principles",
    title: "5 Brand Identity Principles Every Startup Gets Wrong",
    category: "Branding",
    date: "Mar 20, 2025",
    readTime: "5 min read",
    excerpt:
      "Most early-stage brands optimise for what looks good today rather than what scales tomorrow. We outline the five most common brand decisions that need to be undone within two years.",
  },
  {
    slug: "social-media-roi-2025",
    title: "Measuring Real SMM ROI: Beyond Likes and Followers",
    category: "SMM",
    date: "Apr 3, 2025",
    readTime: "6 min read",
    excerpt:
      "Vanity metrics are easy to report, hard to defend. We walk through the measurement frameworks we use to tie social media activity to revenue outcomes for our clients.",
  },
];

const categoryColors: Record<string, string> = {
  "Web Design": "oklch(0.78 0.18 195)",
  Development: "oklch(0.65 0.12 250)",
  SEO: "oklch(0.80 0.18 80)",
  AI: "oklch(0.70 0.20 340)",
  Branding: "oklch(0.75 0.15 160)",
  SMM: "oklch(0.78 0.18 195)",
};

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("Coming soon", {
      description: `"${article.title}" will be published shortly.`,
    });
  };

  const accentColor = categoryColors[article.category] ?? "oklch(0.78 0.18 195)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay: index * 0.08 }}
    >
      <button
        onClick={handleClick}
        className="group text-left block w-full border border-border bg-card p-8 hover:border-[color:var(--accent)] transition-colors duration-300 h-full"
        style={{ "--accent": accentColor } as React.CSSProperties}
      >
        <div className="flex items-center justify-between mb-6">
          <span
            className="font-sans text-[10px] uppercase tracking-widest px-3 py-1 border"
            style={{ color: accentColor, borderColor: accentColor + "40" }}
          >
            {article.category}
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: accentColor }}
          />
        </div>

        <h2 className="font-display text-xl font-bold uppercase text-foreground mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
          {article.title}
        </h2>

        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <span className="font-sans text-[11px] text-muted-foreground">{article.date}</span>
          <span className="h-px w-4 bg-border" />
          <span className="font-sans text-[11px] text-muted-foreground">{article.readTime}</span>
        </div>
      </button>
    </motion.div>
  );
}

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background pt-28 pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-accent"
          >
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="font-display text-[clamp(3.5rem,10vw,8rem)] font-bold uppercase leading-none tracking-tight text-foreground"
          >
            THOUGHTS
            <br />
            <span className="text-accent">&amp; IDEAS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="mt-6 font-sans text-base text-muted-foreground max-w-lg"
          >
            Strategy, design, development, and growth — perspectives from the DS CREATIVE studio.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="mt-8 h-px w-full origin-left bg-border"
          />
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
