import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { getPortfolioItem, portfolioItems, portfolioVisuals } from "@/lib/site-data";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    return buildMetadata({
      title: "Case Study Not Found | Local SEO Wiser",
      description: "The requested portfolio case study could not be found.",
      path: "/portfolio",
    });
  }

  return buildMetadata({
    title: `${item.businessType} Case Study | Local SEO Wiser`,
    description: item.summary,
    path: `/portfolio/${item.slug}`,
    keywords: [item.category.toLowerCase(), "local seo case study", item.service.toLowerCase()],
  });
}

export default async function PortfolioCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  const image =
    portfolioVisuals[item.category] ?? portfolioVisuals["Google Business Profile"];

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
        <div className="relative h-56 md:h-72">
          <Image src={image} alt={`${item.businessType} case study`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          <div className="absolute bottom-0 p-5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-5xl">
              {item.businessType} {item.flag}
            </h1>
            <p className="mt-2 text-base text-slate-200">{item.service}</p>
          </div>
        </div>

        <div className="space-y-8 p-5 md:p-8">
          <p className="max-w-4xl text-base leading-7 text-slate-300">{item.summary}</p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Goal</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item.goal}</p>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Work Completed</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item.completed}</p>
            </div>
            <div className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-green-500/15 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Result</p>
              <p className="mt-3 text-sm leading-6 text-white">{item.result}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-700/60 pt-6">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Request Similar Campaign
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
