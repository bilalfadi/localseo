"use client";



import { useMemo, useState } from "react";

import Link from "next/link";

import Image from "next/image";

import { ArrowRight, CalendarDays } from "lucide-react";

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

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((item) => (

          <Link

            key={item.id}

            href={`/${item.slug}`}

            className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition hover:border-cyan-300/40"

          >

            <div className="relative overflow-hidden border-b border-slate-700/70">

              <Image

                src={item.image}

                alt={`${item.name}, ${item.reportTitle}`}

                width={900}

                height={520}

                className="h-48 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"

              />

              <div className="absolute left-3 top-3 rounded-full border border-cyan-300/40 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-200">

                Report {item.id} of {items.length}

              </div>

            </div>



            <div className="flex flex-1 flex-col p-5">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</p>

              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.reportTitle}</p>

              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-400">
                <CalendarDays size={13} />
                {item.period}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.location}</p>



              <p className="mt-4 text-xl font-semibold text-cyan-200">{item.metric}</p>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{item.insight}</p>



              <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100">

                View this report

                <ArrowRight size={16} className="transition group-hover:translate-x-1" />

              </span>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );

}


