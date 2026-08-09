export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  fullDescription: string;
  year: string;
  status: "Concept Project" | "Experimental Project" | "Live";
  color: string;
  gradient: string;
  overview: string;
  challenge: string;
  strategy: string;
  designDescription: string;
  developmentDescription: string;
  results: { metric: string; value: string }[];
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "mado-restaurant",
    title: "MADO",
    category: "Restaurant Digital Ecosystem",
    tags: ["Branding", "Web", "UX", "Development"],
    description: "Complete digital ecosystem for a premium restaurant chain — from brand identity to reservation system.",
    fullDescription: "A full digital transformation for a contemporary fine-dining restaurant. We redesigned the brand, built an immersive web experience, and integrated an online reservation system.",
    year: "2025",
    status: "Concept Project",
    color: "#C9A96E",
    gradient: "from-amber-950/80 to-stone-900/80",
    overview: "MADO is a premium restaurant brand seeking to establish a strong digital presence matching its culinary excellence. The project encompassed full brand redesign, digital strategy, and technical implementation.",
    challenge: "The restaurant operated without any cohesive digital identity. Their online presence consisted of an outdated website with no reservation capability, resulting in lost bookings and diminished brand perception.",
    strategy: "We defined a luxury editorial visual language inspired by contemporary fine dining. The strategy focused on storytelling through food photography, seamless UX for reservations, and SEO-driven content to capture local search intent.",
    designDescription: "An editorial design system built around deep warm tones, generous white space, and high-contrast typography. Every interaction was crafted to mirror the feeling of stepping into the restaurant itself.",
    developmentDescription: "Built on a headless CMS architecture enabling the team to update menus, events, and content independently. Integrated with a third-party reservation API and Google Analytics 4.",
    results: [
      { metric: "Reservation increase", value: "+180%" },
      { metric: "Organic traffic", value: "+240%" },
      { metric: "Bounce rate reduction", value: "-42%" },
      { metric: "Page load speed", value: "0.8s" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Figma", "PostgreSQL", "Vercel"],
  },
  {
    slug: "nexus-ecommerce",
    title: "NEXUS",
    category: "E-Commerce Experience",
    tags: ["Design", "Development", "SEO"],
    description: "High-conversion e-commerce platform for a premium lifestyle brand with 500+ SKUs.",
    fullDescription: "End-to-end e-commerce solution combining editorial product presentation with conversion-optimized UX. The result: a store that feels like a magazine and sells like a machine.",
    year: "2025",
    status: "Experimental Project",
    color: "#6366F1",
    gradient: "from-indigo-950/80 to-violet-950/80",
    overview: "A premium lifestyle brand needed an e-commerce platform that matched its editorial brand identity without sacrificing conversion performance.",
    challenge: "Existing solutions (Shopify templates) failed to represent the brand premium positioning. Conversion rates were below industry average at 1.2%, and the mobile experience was poor.",
    strategy: "We redesigned the entire customer journey from discovery to checkout, focusing on reducing friction, improving product storytelling, and implementing a headless architecture for performance.",
    designDescription: "Editorial grid layouts, full-bleed product imagery, and a minimal dark palette create an atmosphere that positions products as objects of desire rather than just items in a catalog.",
    developmentDescription: "Headless commerce architecture with a custom React storefront. Implemented advanced filtering, wishlist, size guides, and a one-page checkout that reduced cart abandonment by 35%.",
    results: [
      { metric: "Conversion rate", value: "+156%" },
      { metric: "Average order value", value: "+89%" },
      { metric: "Mobile revenue", value: "+312%" },
      { metric: "Core Web Vitals", value: "All green" },
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    slug: "orbit-saas",
    title: "ORBIT",
    category: "SaaS Digital Product",
    tags: ["Product Design", "Development", "UX"],
    description: "B2B analytics dashboard for a fintech startup processing 2M+ data points daily.",
    fullDescription: "A complex data visualization platform designed for financial analysts. We translated raw data complexity into an intuitive, beautiful interface that drives daily user engagement.",
    year: "2026",
    status: "Concept Project",
    color: "#22D3EE",
    gradient: "from-cyan-950/80 to-sky-950/80",
    overview: "A fintech startup needed a flagship analytics product that could compete with enterprise incumbents while being accessible to non-technical users.",
    challenge: "Financial data platforms are notoriously complex and visually cluttered. The startup needed to differentiate through design excellence while maintaining the depth of analysis their power users required.",
    strategy: "We applied progressive disclosure principles — simple views by default, deep analysis on demand. The UI system was built around data density without cognitive overload.",
    designDescription: "Dark interface with precision typography and carefully calibrated data visualization components. Every chart, table, and metric was designed as part of a unified visual system.",
    developmentDescription: "Built with React and D3.js for custom visualization. Real-time data streaming via WebSockets. Role-based access control and white-label support for enterprise clients.",
    results: [
      { metric: "User activation", value: "+204%" },
      { metric: "Daily active users", value: "+167%" },
      { metric: "Churn reduction", value: "-58%" },
      { metric: "NPS score", value: "72" },
    ],
    technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "D3.js"],
  },
  {
    slug: "forma-branding",
    title: "FORMA",
    category: "Brand Identity System",
    tags: ["Branding", "Design", "Creative Direction"],
    description: "Complete brand identity for a contemporary architecture and real estate firm.",
    fullDescription: "A comprehensive brand identity system for a boutique architecture firm — from logo and visual system to brand guidelines and digital touchpoints.",
    year: "2025",
    status: "Experimental Project",
    color: "#F4F0E8",
    gradient: "from-stone-900/80 to-neutral-900/80",
    overview: "A contemporary architecture firm needed a brand identity that reflected their design philosophy: precision, materials, and the relationship between space and light.",
    challenge: "The firm was rebranding from a regional practice to an internationally-positioned studio. The new identity needed to work across physical and digital touchpoints while feeling timeless.",
    strategy: "We rooted the identity in architectural fundamentals: grid, proportion, and material. The visual system uses a strict typographic hierarchy and a restrained palette inspired by concrete, light, and steel.",
    designDescription: "Monochromatic palette with a single warm off-white as the brand's primary surface. The custom logotype references architectural drawing conventions — precise, structural, and elegant.",
    developmentDescription: "Delivered as a comprehensive brand guidelines document plus a living design system in Figma with components, tokens, and usage examples for every touchpoint.",
    results: [
      { metric: "Brand recognition lift", value: "+340%" },
      { metric: "New client inquiries", value: "+125%" },
      { metric: "Awards", value: "3 design awards" },
      { metric: "Press mentions", value: "12 publications" },
    ],
    technologies: ["Figma", "Adobe CC", "Brand Guidelines", "Design Tokens"],
  },
];
