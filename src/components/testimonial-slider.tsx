"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useMemo, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  flag: string;
};

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const current = useMemo(() => items[active], [active, items]);
  const tabs = items.slice(0, 3);

  return (
    <div className="glass-card overflow-hidden rounded-[30px] border border-slate-700/60 bg-slate-950/70 p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <motion.p
            key={current.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl text-lg leading-8 text-slate-200 md:text-xl"
          >
            &ldquo;{current.quote}&rdquo;
          </motion.p>
          <div className="mt-4 text-sm text-slate-300">
            <p className="font-semibold text-white">
              {current.name} {current.flag}
            </p>
            <p>{current.role}</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {tabs.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  index === active
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {item.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
        <div className="h-fit min-w-[220px] rounded-3xl border border-slate-200/80 bg-white p-5 text-slate-950 shadow-2xl shadow-slate-950/40">
          <p className="text-5xl font-bold leading-none">4.9</p>
          <p className="mt-2 text-2xl font-semibold">Industry-leading</p>
          <p className="text-2xl font-semibold">rating</p>
          <p className="mt-2 text-sm font-medium text-slate-600">Based on verified local campaigns</p>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-4 text-sm text-slate-300">
        <span className="h-px flex-1 bg-slate-700/80" />
        <p>All 5-star reviews on Google</p>
        <span className="h-px flex-1 bg-slate-700/80" />
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.name} className="rounded-2xl border border-slate-700/55 bg-slate-900/65 p-5">
            <div className="flex gap-1 text-emerald-300">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star key={`${item.name}-${star}`} size={15} fill="currentColor" />
              ))}
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {item.name} <span className="text-base">{item.flag}</span>
            </h3>
            <p className="text-sm text-cyan-100/85">{item.role}</p>
            <p className="mt-3 text-base leading-7 text-slate-200">&ldquo;{item.quote}&rdquo;</p>
          </article>
        ))}
      </div>
      <div className="mt-7 flex justify-center">
        <a
          href="/contact"
          className="inline-flex text-base font-semibold text-cyan-200 underline decoration-cyan-300/60 underline-offset-4 hover:text-cyan-100"
        >
          See more reviews
        </a>
      </div>
    </div>
  );
}
