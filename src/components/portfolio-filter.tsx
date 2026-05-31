"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioVisuals, type PortfolioItem } from "@/lib/site-data";

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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="glass-card group flex h-full flex-col rounded-2xl p-5 transition hover:border-cyan-300/40"
          >
            <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/70">
              <Image
                src={portfolioVisuals[item.category] ?? portfolioVisuals["Google Business Profile"]}
                alt={`${item.businessType} project`}
                width={900}
                height={520}
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mb-4 rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-green-500/20 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.businessType} {item.flag}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{item.service}</p>
            </div>
            <ul className="flex-1 space-y-2 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-slate-100">Goal:</span> {item.goal}
              </li>
              <li>
                <span className="font-semibold text-slate-100">Work Completed:</span> {item.completed}
              </li>
              <li>
                <span className="font-semibold text-slate-100">Result:</span> {item.result}
              </li>
            </ul>
            <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100">
              View case study
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
