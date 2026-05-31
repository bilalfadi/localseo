import type { Metadata } from "next";
import { headers } from "next/headers";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export async function getSiteUrl(): Promise<string> {
  try {
    const headerList = await headers();
    const host = headerList.get("x-forwarded-host") ?? headerList.get("host");

    if (host) {
      const protocol =
        headerList.get("x-forwarded-proto") ??
        (host.includes("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
      return `${protocol}://${host}`;
    }
  } catch {
    // headers() is unavailable during static generation
  }

  const envUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (envUrl) {
    return envUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

function buildCanonical(siteUrl: string, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `${siteUrl}/`).toString();
}

export async function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Promise<Metadata> {
  const siteUrl = await getSiteUrl();
  const canonical = buildCanonical(siteUrl, path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
          },
        }
      : {}),
    icons: {
      icon: "/seo-wiser-logo-icon.png",
      shortcut: "/seo-wiser-logo-icon.png",
      apple: "/seo-wiser-logo.png",
    },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Local SEO Wiser",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-local-seo-wiser.svg",
          width: 1200,
          height: 630,
          alt: "Local SEO Wiser",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-local-seo-wiser.svg"],
    },
  };
}

export async function buildOrganizationSchema() {
  const siteUrl = await getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Local SEO Wiser",
    url: siteUrl,
    logo: `${siteUrl}/seo-wiser-logo.png`,
    image: `${siteUrl}/og-local-seo-wiser.svg`,
    description:
      "Pittsburgh-based local SEO agency helping businesses improve Google Maps visibility, reputation, and qualified customer growth.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pittsburgh",
      addressRegion: "PA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Pittsburgh" },
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "Country", name: "United States" },
    ],
    sameAs: [
      "https://www.linkedin.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-347-555-0199",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };
}
