import type { PortfolioReportDetail } from "@/lib/site-data";
import { getPortfolioReport, portfolioItems } from "@/lib/site-data";
import type { ServicePageConfig } from "@/lib/service-catalog";
import { servicePages } from "@/lib/service-pages-data";

export type { ServicePageConfig };
export { servicePages };

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  datePublished: string;
  body: string[];
};

export const blogArticles: Record<string, BlogArticle> = {
  "google-business-profile-wins": {
    slug: "google-business-profile-wins",
    title: "9 Google Business Profile Wins That Improve Local Leads",
    description:
      "Practical Google Business Profile improvements that strengthen map visibility and conversion actions for local businesses.",
    category: "Google Business Profile",
    author: "Sara Khan",
    datePublished: "2026-05-18",
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
    author: "Ibrahim Hayes",
    datePublished: "2026-05-04",
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
    author: "Nadia Brooks",
    datePublished: "2026-04-21",
    body: [
      "Review management starts with process design. Ask at the right touchpoint, simplify the request, and train teams on consistency.",
      "Responses should be timely and human. Use templates as scaffolding, then personalize to reinforce authenticity and customer care.",
      "Track sentiment themes monthly. Review data reveals friction points and service strengths that can shape both operations and marketing.",
    ],
  },
};

export type StaticPageSlug = "about" | "contact" | "services" | "portfolio" | "blog" | "packages" | "privacy";

export const staticPages: Record<
  StaticPageSlug,
  { metaTitle: string; metaDescription: string; keywords: string[] }
> = {
  about: {
    metaTitle: "About Local SEO Wiser | Pittsburgh Local SEO Team",
    metaDescription:
      "Meet Local SEO Wiser, a Pittsburgh-based strategy-led local SEO team helping service businesses and multi-location brands grow visibility and qualified local demand.",
    keywords: ["about local seo wiser", "pittsburgh local seo agency", "local search experts"],
  },
  contact: {
    metaTitle: "Contact Local SEO Wiser | Pittsburgh Strategy Call",
    metaDescription:
      "Contact our Pittsburgh local SEO team for consulting, campaign support, and a strategy call tailored to your market.",
    keywords: ["contact local seo agency pittsburgh", "local seo strategy call", "pittsburgh seo consultation"],
  },
  services: {
    metaTitle: "Local SEO & Digital Marketing Services | Local SEO Wiser",
    metaDescription:
      "Explore Local SEO Wiser services: local SEO, Google Maps, PPC, web development, social media, CRM automation, and more.",
    keywords: [
      "local seo services",
      "google map optimization",
      "ppc advertising",
      "wordpress development",
      "social media management",
    ],
  },
  portfolio: {
    metaTitle: "Portfolio | Local SEO Wiser Campaign Results",
    metaDescription:
      "Explore Local SEO Wiser portfolio campaigns from our Pittsburgh, PA team with verified GSC results, client websites, and measurable local search growth.",
    keywords: ["local seo portfolio", "pittsburgh local seo results", "local campaign results"],
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
  privacy: {
    metaTitle: "Privacy Policy | Local SEO Wiser",
    metaDescription:
      "Read how Local SEO Wiser collects, uses, and protects information submitted through our website and contact forms.",
    keywords: ["privacy policy", "local seo wiser privacy", "data policy"],
  },
};

export type SlugPageContent =
  | { type: "static"; slug: StaticPageSlug }
  | { type: "portfolio-report"; report: PortfolioReportDetail }
  | { type: "blog"; article: BlogArticle }
  | { type: "service"; config: ServicePageConfig };

export function resolveSlugPage(slug: string): SlugPageContent | null {
  if (slug in staticPages) {
    return { type: "static", slug: slug as StaticPageSlug };
  }

  const report = getPortfolioReport(slug);
  if (report) {
    return { type: "portfolio-report", report };
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

export function getAllPublicPaths(): string[] {
  return [
    "/",
    ...Object.keys(staticPages).map((slug) => `/${slug}`),
    ...portfolioItems.map((item) => `/${item.slug}`),
    ...Object.keys(blogArticles).map((slug) => `/${slug}`),
    ...Object.keys(servicePages).map((slug) => `/${slug}`),
  ];
}
