import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { packages } from "@/lib/site-data";

export function PackagesPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="Local SEO Packages"
        title="Flexible engagement models for every local growth stage"
        description="Each package is customized to your business model, market competition, and growth priorities. No fixed rates, only tailored proposals."
      />

      <section className="section-shell pb-14">
        <h2 className="sr-only">Local SEO package options</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-card h-full rounded-3xl p-6">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.focus}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-200">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check size={16} className="mt-0.5 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 px-4 py-2 text-sm font-semibold text-slate-950"
                >
                  Request a Quote
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <Reveal>
          <div className="glass-card overflow-auto rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Feature Comparison</h2>
            <table className="mt-5 w-full min-w-[640px] text-left text-sm">
              <thead className="text-cyan-200">
                <tr>
                  <th className="py-3 pr-4">Feature</th>
                  <th className="py-3 pr-4">Starter</th>
                  <th className="py-3 pr-4">Growth</th>
                  <th className="py-3 pr-4">Advanced</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                {[
                  ["Google Business Profile Optimization", true, true, true],
                  ["Core Citation Management", true, true, true],
                  ["Geo-grid Tracking", false, true, true],
                  ["Location Page SEO", false, true, true],
                  ["Multi-location Framework", false, false, true],
                  ["Custom Dashboard Reporting", false, false, true],
                ].map(([feature, starter, growth, advanced]) => (
                  <tr key={feature as string} className="border-t border-slate-700/60">
                    <td className="py-3 pr-4">{feature}</td>
                    <td className="py-3 pr-4">{starter ? "✓" : "✕"}</td>
                    <td className="py-3 pr-4">{growth ? "✓" : "✕"}</td>
                    <td className="py-3 pr-4">{advanced ? "✓" : "✕"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
