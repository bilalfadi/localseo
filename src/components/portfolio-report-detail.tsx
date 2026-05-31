import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioReportDetail } from "@/lib/site-data";

export function PortfolioReportDetailView({ report }: { report: PortfolioReportDetail }) {
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
        <div className="relative min-h-[280px] md:min-h-[480px]">
          <Image
            src={report.image}
            alt={`${report.name}, ${report.reportTitle}`}
            fill
            className="object-contain object-top bg-slate-950"
            priority
          />
        </div>

        <div className="space-y-6 border-t border-slate-700/60 p-5 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
              {report.category}
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-300">
              Report {report.reportNumber} of {report.totalReports}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">{report.name}</h1>
            <p className="mt-1 text-sm text-slate-400">{report.reportTitle}</p>
            <p className="mt-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} />
                {report.period}
              </span>
            </p>
            <p className="mt-1 text-sm text-slate-500">{report.location}</p>
          </div>

          <div className="rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-green-500/10 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Key metric</p>
            <p className="mt-2 text-2xl font-semibold text-white md:text-3xl">{report.metric}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{report.insight}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-slate-700/60 pt-6">
            {report.prevSlug ? (
              <Link
                href={`/${report.prevSlug}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
              >
                <ChevronLeft size={16} />
                Previous report
              </Link>
            ) : null}
            {report.nextSlug ? (
              <Link
                href={`/${report.nextSlug}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
              >
                Next report
                <ChevronRight size={16} />
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
