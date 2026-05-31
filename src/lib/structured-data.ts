import type { BlogArticle, ServicePageConfig } from "@/lib/slug-pages";

export function buildWebsiteSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Local SEO Wiser",
    url: siteUrl,
    description:
      "Pittsburgh-based local SEO agency helping businesses improve Google Maps visibility and qualified customer growth.",
    publisher: {
      "@type": "Organization",
      name: "Local SEO Wiser",
      url: siteUrl,
    },
  };
}

export function buildBreadcrumbSchema(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, `${siteUrl}/`).toString(),
    })),
  };
}

export function buildArticleSchema(siteUrl: string, article: BlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Local SEO Wiser",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/seo-wiser-logo.png`,
      },
    },
    datePublished: article.datePublished,
    mainEntityOfPage: `${siteUrl}/${article.slug}`,
    articleSection: article.category,
  };
}

export function buildServiceSchema(siteUrl: string, config: ServicePageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.title,
    description: config.intro,
    url: `${siteUrl}/${config.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Local SEO Wiser",
      url: siteUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pittsburgh",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: config.title,
  };
}

export function buildFaqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
