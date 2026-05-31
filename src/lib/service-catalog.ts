import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe2,
  LayoutTemplate,
  Map,
  MapPinned,
  Megaphone,
  MousePointerClick,
  Share2,
  ShoppingBag,
  Store,
  Users,
  Wrench,
} from "lucide-react";

export type ServicePageConfig = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  title: string;
  intro: string;
  painPoint: string;
  idealFor: string[];
  stepTitles: string[];
  benefits: string[];
  included: string[];
  steps: string[];
  whyChoose: string[];
  faq: { question: string; answer: string }[];
};

export type ServiceCatalogItem = {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export type ServiceCategory = {
  id: string;
  title: string;
  items: ServiceCatalogItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "search-engine-optimization",
    title: "SEARCH ENGINE OPTIMIZATION",
    items: [
      { slug: "local-seo", title: "Local SEO", subtitle: "Maps, citations, content & local rankings", icon: MapPinned },
      { slug: "google-map-optimization", title: "Google Map Optimization", subtitle: "Profile optimization for map pack visibility", icon: Map },
      { slug: "seo-for-small-business", title: "SEO For Small Business", subtitle: "Focused SEO for growing local brands", icon: Store },
      { slug: "local-business-citation", title: "Local Business Citation", subtitle: "NAP consistency & trusted directory listings", icon: Globe2 },
      { slug: "landing-page-optimization", title: "Landing Page Optimization", subtitle: "Conversion-focused local landing pages", icon: LayoutTemplate },
      { slug: "technical-seo", title: "Technical SEO", subtitle: "Crawl, speed, schema & site health fixes", icon: Wrench },
    ],
  },
  {
    id: "search-engine-marketing",
    title: "SEARCH ENGINE MARKETING",
    items: [
      { slug: "ppc-advertising", title: "PPC Advertising", subtitle: "Pay per click campaigns for local leads", icon: MousePointerClick },
      { slug: "google-ads", title: "Google Ads", subtitle: "Search ads with geo-targeting & call tracking", icon: Megaphone },
    ],
  },
  {
    id: "web-design-development",
    title: "WEB DESIGN & DEVELOPMENT",
    items: [
      { slug: "wordpress-development", title: "Wordpress Development", subtitle: "SEO-ready WordPress websites", icon: Code2 },
      { slug: "shopify-development", title: "Shopify Development", subtitle: "Shopify stores built for local sales", icon: ShoppingBag },
      { slug: "bricks-builder-development", title: "Bricks Builder Development", subtitle: "High-performance Bricks WordPress builds", icon: LayoutTemplate },
    ],
  },
  {
    id: "social-media",
    title: "SOCIAL MEDIA",
    items: [
      { slug: "social-media-management", title: "Social Media Management", subtitle: "Content, engagement & brand visibility", icon: Share2 },
    ],
  },
  {
    id: "marketing-automation",
    title: "MARKETING AUTOMATION",
    items: [
      { slug: "crm-development", title: "CRM Development", subtitle: "Lead routing & marketing automation", icon: Users },
    ],
  },
];

export const allServiceItems = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.title })),
);

export function getServiceCatalogItem(slug: string) {
  return allServiceItems.find((item) => item.slug === slug);
}

/** Mega menu column layout matching the reference design */
export const serviceMegaMenuColumns = [
  {
    groups: [{ categoryId: "search-engine-optimization" }],
  },
  {
    groups: [{ categoryId: "search-engine-marketing" }, { categoryId: "web-design-development" }],
  },
  {
    groups: [{ categoryId: "social-media" }, { categoryId: "marketing-automation" }],
  },
] as const;

export function getCategoryById(id: string) {
  return serviceCategories.find((category) => category.id === id);
}

export function getServiceCategoryForSlug(slug: string) {
  for (const category of serviceCategories) {
    const item = category.items.find((entry) => entry.slug === slug);
    if (item) {
      return { category, item };
    }
  }
  return null;
}

export function getRelatedServices(slug: string, limit = 3) {
  const context = getServiceCategoryForSlug(slug);
  if (!context) {
    return [];
  }
  return context.category.items.filter((entry) => entry.slug !== slug).slice(0, limit);
}
