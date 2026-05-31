"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  category: string;
  businessType: string;
  flag: string;
  service: string;
  goal: string;
  completed: string;
  result: string;
};

const portfolioVisualByCategory: Record<string, string> = {
  "Google Business Profile":
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
  "Local SEO Campaigns":
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  "Citation Building":
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  "Review Management":
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "Website SEO":
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  "Multi Location SEO":
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
};

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
          <article key={item.id} className="glass-card rounded-2xl p-5">
            <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/70">
              <Image
                src={portfolioVisualByCategory[item.category] ?? portfolioVisualByCategory["Google Business Profile"]}
                alt={`${item.businessType} project`}
                width={900}
                height={520}
                className="h-44 w-full object-cover"
              />
            </div>
            <div className="mb-4 rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-green-500/20 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.businessType} {item.flag}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{item.service}</p>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
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
            <Link
              href="/contact-us"
              className="mt-4 inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-slate-700"
            >
              Request Similar Campaign
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
