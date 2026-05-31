import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServicesPageGrid } from "@/components/services-page-grid";

export function ServicesPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to grow locally: SEO, ads, web, and automation"
        description="Browse by category, compare services, and open any page to see deliverables, process steps, and FAQs."
      />

      <section className="section-shell pb-16">
        <ServicesPageGrid />
      </section>

      <section className="section-shell pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-blue-700/30 via-cyan-600/20 to-violet-700/25 p-6 md:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">Not sure which service fits your business?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                Contact us and we will recommend the right mix of local SEO, ads, and web work for your market.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
