import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, Phone } from "lucide-react";
import type { PortfolioCaseStudy } from "@/lib/site-data";

export function PortfolioCaseStudyView({ study }: { study: PortfolioCaseStudy }) {
  const searchReports = study.gallery.filter((slide) => slide.type === "gsc");
  const callReports = study.gallery.filter((slide) => slide.type === "calls");

  return (
    <main className="section-shell py-14 md:py-16">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>

      <article className="glass-card mt-6 overflow-hidden rounded-3xl">
        <div className="relative h-56 md:h-[420px]">
          <Image
            src={study.image}
            alt={`${study.businessType} GSC performance report`}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
          <div className="absolute bottom-0 p-5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{study.category}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-5xl">{study.businessType}</h1>
            <p className="mt-2 text-sm text-cyan-200">{study.location}</p>
            <p className="mt-2 max-w-2xl text-base text-slate-200">{study.service}</p>
          </div>
        </div>

        <div className="space-y-10 p-5 md:p-8">
          <p className="max-w-4xl text-base leading-7 text-slate-300">{study.summary}</p>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {study.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-green-500/10 p-5"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Goal</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{study.goal}</p>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Work Completed</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{study.completed}</p>
            </div>
            <div className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-green-500/15 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Result</p>
              <p className="mt-3 text-sm leading-6 text-white">{study.result}</p>
            </div>
          </div>

          <section>
            <div className="mb-5 flex items-center gap-3">
              <BarChart3 className="text-cyan-300" size={22} />
              <h2 className="text-2xl font-semibold text-white">Google Search Console growth reports</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {searchReports.map((slide) => (
                <Link
                  key={slide.image}
                  href={`/${slide.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/40 transition hover:border-cyan-300/40"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={slide.image} alt={slide.name} fill className="object-cover object-top transition duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <figcaption className="space-y-1 p-4">
                    <p className="text-sm font-semibold text-white">{slide.name}</p>
                    <p className="text-xs text-slate-400">{slide.label}</p>
                    <p className="text-xs text-slate-400">{slide.period}</p>
                    <p className="text-xs text-slate-500">{slide.location}</p>
                    <p className="text-sm text-cyan-200">{slide.highlight}</p>
                    <p className="text-xs leading-5 text-slate-400">{slide.caption}</p>
                  </figcaption>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-5 flex items-center gap-3">
              <Phone className="text-cyan-300" size={22} />
              <h2 className="text-2xl font-semibold text-white">Phone call performance reports</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {callReports.map((slide) => (
                <Link
                  key={slide.image}
                  href={`/${slide.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/40 transition hover:border-cyan-300/40"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={slide.image} alt={slide.name} fill className="object-cover object-top transition duration-300 group-hover:scale-[1.02]" />
                  </div>
                  <figcaption className="space-y-1 p-4">
                    <p className="text-sm font-semibold text-white">{slide.name}</p>
                    <p className="text-xs text-slate-400">{slide.label}</p>
                    <p className="text-xs text-slate-400">{slide.period}</p>
                    <p className="text-xs text-slate-500">{slide.location}</p>
                    <p className="text-sm text-cyan-200">{slide.highlight}</p>
                    <p className="text-xs leading-5 text-slate-400">{slide.caption}</p>
                  </figcaption>
                </Link>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-3 border-t border-slate-700/60 pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Request Similar Campaign
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
