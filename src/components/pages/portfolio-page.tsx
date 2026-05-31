import { PageHero } from "@/components/page-hero";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { portfolioItems } from "@/lib/site-data";

export function PortfolioPageContent() {
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
