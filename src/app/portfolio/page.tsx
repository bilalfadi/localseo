import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { buildMetadata } from "@/lib/seo";
import { portfolioItems } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | Local SEO Wiser Campaign Results",
  description:
    "Explore Local SEO Wiser portfolio campaigns across Google Business Profile, citation building, review management, and multi-location SEO.",
  path: "/portfolio",
  keywords: ["local seo portfolio", "google business profile portfolio", "local campaign results"],
});

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Local SEO portfolio built across service industries and regions"
        description="Browse categorized campaign snapshots to see how we approach local search growth for different business models and market conditions."
      />
      <section className="section-shell pb-16">
        <PortfolioFilter items={portfolioItems} />
      </section>
    </main>
  );
}
