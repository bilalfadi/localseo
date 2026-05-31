"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, Globe2 } from "lucide-react";
import type { ProjectWebsite } from "@/lib/site-data";
import { businessLocation } from "@/lib/site-data";

export function OurProjectsSection({ projects }: { projects: ProjectWebsite[] }) {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active, projects],
  );

  return (
    <section>
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Our Projects</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Client websites we have built & optimized</h2>
        <p className="mt-4 text-base leading-7 text-slate-300">
          This section is separate from the GSC portfolio above. Browse live client websites from our{" "}
          {businessLocation.label} team. Each card links directly to the live site.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="glass-card rounded-2xl border border-dashed border-slate-600 p-10 text-center">
          <Globe2 className="mx-auto text-cyan-300/60" size={40} />
          <p className="mt-4 text-lg font-semibold text-white">Project websites coming soon</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
            Client website cards with live links will appear here. The portfolio section above stays dedicated to GSC case
            study reports.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-7 flex flex-wrap gap-2">
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
            {filtered.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} website`}
                className="glass-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition hover:border-cyan-300/40"
              >
                <div className="block p-3 pb-0">
                  <div className="overflow-hidden rounded-t-xl border border-slate-700/80 bg-slate-900 shadow-inner">
                    <div className="flex items-center gap-2 border-b border-slate-700/80 bg-slate-800/90 px-3 py-2">
                      <span className="flex gap-1">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                      </span>
                      <span className="ml-1 truncate rounded-md bg-slate-950/60 px-2.5 py-0.5 text-[11px] text-slate-400">
                        {project.domain}
                      </span>
                    </div>
                    <div className="relative aspect-[16/12] bg-slate-950">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.name} website preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 33vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-700/30 via-slate-900 to-cyan-600/20">
                          <Globe2 className="text-cyan-300/70" size={48} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-4 pt-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-white">{project.name}</h3>
                    <p className="mt-1 truncate text-xs text-slate-400">{project.category} · {project.location}</p>
                  </div>
                  <ExternalLink
                    size={16}
                    className="shrink-0 text-cyan-300/70 transition group-hover:text-cyan-200"
                  />
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
