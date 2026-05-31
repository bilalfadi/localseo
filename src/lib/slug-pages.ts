import type { PortfolioItem } from "@/lib/site-data";
import { getPortfolioItem, portfolioItems } from "@/lib/site-data";

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  body: string[];
};

export type ServicePageConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  title: string;
  intro: string;
  benefits: string[];
  included: string[];
  steps: string[];
  whyChoose: string[];
  faq: { question: string; answer: string }[];
};

export const blogArticles: Record<string, BlogArticle> = {
  "google-business-profile-wins": {
    slug: "google-business-profile-wins",
    title: "9 Google Business Profile Wins That Improve Local Leads",
    description:
      "Practical Google Business Profile improvements that strengthen map visibility and conversion actions for local businesses.",
    category: "Google Business Profile",
    body: [
      "Most businesses underuse key profile fields. Prioritize category precision, service descriptions, and visual assets that mirror real customer intent.",
      "A high-performing profile is active. Publish posts consistently, answer common questions, and refresh photos to signal operational relevance.",
      "Treat profile optimization as part of your larger funnel. Align services, call-to-actions, and linked landing pages for better conversion quality.",
    ],
  },
  "local-citation-quality-vs-quantity": {
    slug: "local-citation-quality-vs-quantity",
    title: "Local Citations: Why Quality Beats Quantity in 2026",
    description:
      "Learn why citation quality and data consistency outperform bulk directory submissions for local SEO campaigns.",
    category: "Citation Building",
    body: [
      "Citation strategy should prioritize trust and relevance. Focus on directories recognized by your market rather than low-authority listing networks.",
      "NAP consistency matters across all sources. Even minor variations can create mixed trust signals and reduce ranking confidence.",
      "Build a maintenance rhythm. Citation hygiene is not a one-time task, especially for growing brands and multi-location operations.",
    ],
  },
  "review-management-playbook": {
    slug: "review-management-playbook",
    title: "The Review Management Playbook for High-Intent Local Buyers",
    description:
      "A complete review management framework for local businesses that want stronger trust, sentiment, and conversion support.",
    category: "Review Management",
    body: [
      "Review management starts with process design. Ask at the right touchpoint, simplify the request, and train teams on consistency.",
      "Responses should be timely and human. Use templates as scaffolding, then personalize to reinforce authenticity and customer care.",
      "Track sentiment themes monthly. Review data reveals friction points and service strengths that can shape both operations and marketing.",
    ],
  },
};

export const servicePages: Record<string, ServicePageConfig> = {
  "google-business-profile-optimization": {
    slug: "google-business-profile-optimization",
    metaTitle: "Google Business Profile Optimization | Local SEO Wiser",
    metaDescription:
      "Improve map pack visibility and local conversions through strategic Google Business Profile optimization by Local SEO Wiser.",
    keywords: ["google business profile optimization", "google maps seo", "gbp agency"],
    title: "Google Business Profile Optimization",
    intro:
      "Your profile is often the first impression in local search. We optimize every meaningful detail so your listing attracts qualified clicks, calls, and visits.",
    benefits: [
      "Stronger local relevance through category, service, and area alignment",
      "Improved click-through with better descriptions, media, and offers",
      "Higher trust through profile completeness and active management",
      "Clear insight into how profile interactions impact conversions",
    ],
    included: [
      "Category and service attribute optimization",
      "Conversion-focused business description rewrite",
      "Photo and post strategy with publishing cadence",
      "Q&A and messaging optimization",
      "Performance tracking for calls, clicks, and direction requests",
    ],
    steps: [
      "Baseline profile audit and local competitor benchmark",
      "Entity and category refinement based on service focus",
      "Content updates for profile sections and posting schedule",
      "Review and Q&A response frameworks implementation",
    ],
    whyChoose: [
      "Experience across competitive local verticals",
      "Custom profile strategy for your market and service model",
      "Clear communication and monthly performance recaps",
      "Optimization tied to lead quality, not vanity volume",
    ],
    faq: [
      {
        question: "How often should my profile be updated?",
        answer:
          "Most businesses benefit from weekly updates, including posts, fresh photos, and response management to keep profiles active and competitive.",
      },
      {
        question: "Can profile optimization help without a website redesign?",
        answer:
          "Yes. Profile improvements can increase map visibility and conversion actions independently, though website alignment strengthens results further.",
      },
    ],
  },
  "local-citation-building": {
    slug: "local-citation-building",
    metaTitle: "Local Citation Building Services | Local SEO Wiser",
    metaDescription:
      "Strengthen local trust signals with consistent, accurate, and strategically selected citation placements managed by Local SEO Wiser.",
    keywords: ["local citation building", "nap consistency", "directory listings seo"],
    title: "Local Citation Building",
    intro:
      "Citation quality and consistency are foundational for local trust signals. We clean existing listings and expand your presence across high-value directories.",
    benefits: [
      "Improved listing consistency across platforms and data aggregators",
      "Reduced confusion for search engines and potential customers",
      "Greater local authority through trusted source coverage",
      "Better support for map and organic local rankings",
    ],
    included: [
      "NAP consistency audit and correction map",
      "Citation cleanup across existing directory profiles",
      "New listing placements on trusted and relevant sources",
      "Duplicate suppression and verification workflow",
      "Citation health reporting by location",
    ],
    steps: [
      "Audit all active listings and identify high-risk inconsistencies",
      "Correct critical NAP and business data discrepancies",
      "Expand into relevant, quality directories by vertical and region",
      "Monitor and maintain listing quality over time",
    ],
    whyChoose: [
      "Structured QA process that minimizes citation errors",
      "Strategic focus on quality sources over low-value volume",
      "Scalable citation operations for multi-location brands",
      "Integrated reporting with broader local SEO campaign metrics",
    ],
    faq: [
      {
        question: "How many citations does my business need?",
        answer:
          "There is no universal number. We prioritize authoritative, relevant directories and maintain consistency rather than chasing bulk listing volume.",
      },
      {
        question: "Do citations still matter in 2026?",
        answer:
          "Yes. While not the only ranking factor, citation accuracy still supports local trust and discoverability, especially in competitive markets.",
      },
    ],
  },
  "review-management": {
    slug: "review-management",
    metaTitle: "Review Management Services | Local SEO Wiser",
    metaDescription:
      "Improve ratings, review volume, and customer trust with structured review management services from Local SEO Wiser.",
    keywords: ["review management", "google reviews strategy", "local reputation management"],
    title: "Review Management",
    intro:
      "Customer feedback influences both rankings and buying decisions. We create a repeatable review framework that improves trust and informs local growth decisions.",
    benefits: [
      "Higher review velocity through practical request workflows",
      "Stronger trust signals for local prospects comparing options",
      "Faster response times with brand-aligned templates",
      "Actionable sentiment patterns for service improvement",
    ],
    included: [
      "Review funnel design and request timing strategy",
      "Response templates for positive, neutral, and negative feedback",
      "Escalation playbook for sensitive reputation scenarios",
      "Monthly review sentiment insights and trend reporting",
      "Team enablement for review request best practices",
    ],
    steps: [
      "Evaluate your current review profile and sentiment baseline",
      "Deploy review request workflow tailored to your customer journey",
      "Implement response standards for speed and consistency",
      "Measure sentiment and improve campaign tactics monthly",
    ],
    whyChoose: [
      "Balanced approach that protects brand trust and customer experience",
      "No risky tactics that violate platform review policies",
      "Practical onboarding for front-desk and support teams",
      "Clear reporting that connects reputation trends to lead outcomes",
    ],
    faq: [
      {
        question: "Can negative reviews be removed?",
        answer:
          "Only reviews that violate platform guidelines are eligible for removal requests. Our focus is to respond professionally and improve future customer sentiment.",
      },
      {
        question: "How quickly can review ratings improve?",
        answer:
          "When review request workflows are adopted consistently, many businesses see meaningful improvements in volume and average rating within 6 to 10 weeks.",
      },
    ],
  },
};

export type StaticPageSlug = "about" | "contact" | "services" | "portfolio" | "blog" | "packages";

export const staticPages: Record<
  StaticPageSlug,
  { metaTitle: string; metaDescription: string; keywords: string[] }
> = {
  about: {
    metaTitle: "About Local SEO Wiser | Strategy-First Local SEO Team",
    metaDescription:
      "Meet Local SEO Wiser, a strategy-led local SEO team helping service businesses and multi-location brands grow visibility and qualified local demand.",
    keywords: ["about local seo wiser", "local seo agency team", "local search experts"],
  },
  contact: {
    metaTitle: "Contact Local SEO Wiser | Book a Strategy Call",
    metaDescription:
      "Contact Local SEO Wiser for local SEO consulting, campaign support, and a strategy call tailored to your market.",
    keywords: ["contact local seo agency", "local seo strategy call", "local seo consultation"],
  },
  services: {
    metaTitle: "Local SEO Services | Local SEO Wiser",
    metaDescription:
      "Explore Local SEO Wiser services including Google Business Profile optimization, citation building, review management, local content strategy, and reporting.",
    keywords: ["local seo services", "google business profile optimization", "citation management"],
  },
  portfolio: {
    metaTitle: "Portfolio | Local SEO Wiser Campaign Results",
    metaDescription:
      "Explore Local SEO Wiser portfolio campaigns across Google Business Profile, citation building, review management, and multi-location SEO.",
    keywords: ["local seo portfolio", "google business profile portfolio", "local campaign results"],
  },
  blog: {
    metaTitle: "Local SEO Blog | Local SEO Wiser Insights",
    metaDescription:
      "Read practical local SEO insights from Local SEO Wiser on Google Business Profile, citations, reviews, and conversion-focused local strategy.",
    keywords: ["local seo blog", "google business profile tips", "citation strategy"],
  },
  packages: {
    metaTitle: "Local SEO Packages | Local SEO Wiser",
    metaDescription:
      "Compare Starter, Growth, and Advanced Local SEO packages. Request a quote for a campaign tailored to your local growth goals.",
    keywords: ["local seo packages", "seo pricing request quote", "local seo plans"],
  },
};

export type SlugPageContent =
  | { type: "static"; slug: StaticPageSlug }
  | { type: "portfolio"; item: PortfolioItem }
  | { type: "blog"; article: BlogArticle }
  | { type: "service"; config: ServicePageConfig };

export function resolveSlugPage(slug: string): SlugPageContent | null {
  if (slug in staticPages) {
    return { type: "static", slug: slug as StaticPageSlug };
  }

  const portfolio = getPortfolioItem(slug);
  if (portfolio) {
    return { type: "portfolio", item: portfolio };
  }

  const blog = blogArticles[slug];
  if (blog) {
    return { type: "blog", article: blog };
  }

  const service = servicePages[slug];
  if (service) {
    return { type: "service", config: service };
  }

  return null;
}

export function getAllSlugParams() {
  return [
    ...Object.keys(staticPages).map((slug) => ({ slug })),
    ...portfolioItems.map((item) => ({ slug: item.slug })),
    ...Object.keys(blogArticles).map((slug) => ({ slug })),
    ...Object.keys(servicePages).map((slug) => ({ slug })),
  ];
}
