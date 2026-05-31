import type { Metadata } from "next";

const siteUrl = "https://localseowiser.com";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    icons: {
      icon: "/brand-logo-clean.png",
      shortcut: "/brand-logo-clean.png",
      apple: "/brand-logo-clean.png",
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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Local SEO Wiser",
  url: siteUrl,
  logo: `${siteUrl}/brand-logo-clean.png`,
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
