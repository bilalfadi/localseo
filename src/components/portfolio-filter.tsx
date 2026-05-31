"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Phone } from "lucide-react";
import type { PortfolioItem } from "@/lib/site-data";

export function PortfolioFilter({ items }: { items: PortfolioItem[] }) {
  const categories = useMemo(
    () => ["All", ...new Set(items.map((item) => item.category))],
    [items],
  );
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((item) => item.category === active)),
    [active, items],
  );

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              active === category
                ? "border-cyan-300 bg-cyan-400 text-slate-950"
                : "border-slate-700 text-slate-300 hover:border-cyan-400/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {filtered.map((item) => {
          const isGsc = item.category === "Google Search Console";

          return (
            <Link
              key={item.id}
              href={`/${item.slug}`}
              className="glass-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition hover:border-cyan-300/40"
            >
              <div className="p-3 pb-0">
                <div className="overflow-hidden rounded-t-xl border border-slate-700/80 bg-black shadow-inner">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-700/80 bg-slate-900/95 px-3 py-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                      {isGsc ? <BarChart3 size={13} className="text-cyan-300" /> : <Phone size={13} className="text-cyan-300" />}
                      {isGsc ? "GSC Report" : "Call Report"}
                    </span>
                    <span className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-200">
                      Report {item.id} of {items.length}
                    </span>
                  </div>
                  <div className="relative aspect-[16/11] bg-black">
                    <Image
                      src={item.image}
                      alt={`${item.name}, ${item.reportTitle}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                      className="object-contain object-center p-1 transition duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 p-4 pt-3">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold text-white">{item.reportTitle}</h3>
                  <p className="mt-1 truncate text-sm font-medium text-cyan-200">{item.metric}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">{item.period}</p>
                </div>
                <ArrowRight
                  size={18}
                  className="shrink-0 text-cyan-300/70 transition group-hover:translate-x-0.5 group-hover:text-cyan-200"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
