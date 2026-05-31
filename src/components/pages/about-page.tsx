import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export function AboutPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A specialist local SEO team focused on practical growth"
        description="Local SEO Wiser combines agency-level strategy with hands-on implementation. We help local businesses improve discoverability, reputation, and conversion outcomes without inflated promises."
      />

      <section className="section-shell grid gap-6 pb-16 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            body: "Equip local brands with clear SEO priorities that turn nearby search demand into measurable business outcomes.",
          },
          {
            title: "Our Approach",
            body: "Balance technical precision and content relevance with real-world business goals like calls, bookings, and walk-ins.",
          },
          {
            title: "Our Values",
            body: "Transparency, ethical optimization, and long-term compounding results built through disciplined monthly execution.",
          },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="glass-card h-full rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-shell pb-16">
        <Reveal>
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Why businesses choose Local SEO Wiser</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Dedicated local SEO strategists with category-specific experience",
                "Flexible support for single-location and multi-location brands",
                "Reporting tied to business outcomes, not vanity metrics",
                "Cross-functional execution across profile, content, citations, and reviews",
                "Quarterly strategy refreshes based on local SERP movement",
                "Collaborative communication style with practical recommendations",
              ].map((point) => (
                <li key={point} className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm text-slate-200">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
