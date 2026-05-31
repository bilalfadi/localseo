import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { serviceCards } from "@/lib/site-data";

export function ServicesPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="Local SEO Services"
        title="Complete local SEO systems built around conversion intent"
        description="From profile optimization to reputation and location pages, our services are designed to strengthen local relevance and increase lead flow."
      />
      <section className="section-shell pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="glass-card h-full rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-5 inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-slate-700"
                >
                  Explore Service
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
