import { PageHero } from "@/components/page-hero";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { OurProjectsSection } from "@/components/our-projects-section";
import { Reveal } from "@/components/reveal";
import { ourProjects, portfolioCaseStudy, portfolioItems } from "@/lib/site-data";

export function PortfolioPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="Verified GSC reporting from real client campaigns"
        description="Each card below is an actual screenshot from a monthly performance report, not filler copy."
      />

      <section className="section-shell pb-16">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{portfolioCaseStudy.businessType}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Monthly performance snapshots</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            {portfolioCaseStudy.location} · 8 reports pulled directly from Google Search Console and call tracking data.
          </p>
        </div>
        <PortfolioFilter items={portfolioItems} />
      </section>

      {/* Our Projects: separate section for client website links */}
      <section className="section-shell border-t border-slate-800/80 pb-16 pt-4">
        <Reveal>
          <OurProjectsSection projects={ourProjects} />
        </Reveal>
      </section>
    </main>
  );
}
