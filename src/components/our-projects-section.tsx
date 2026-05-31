"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Globe2, MapPin } from "lucide-react";
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

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition hover:border-cyan-300/40"
              >
                <div className="relative h-44 overflow-hidden border-b border-slate-700/70">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} website preview`}
                      fill
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-700/30 via-slate-900 to-cyan-600/20">
                      <Globe2 className="text-cyan-300/70" size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-flex rounded-full border border-cyan-300/30 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-200">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-200">
                    <MapPin size={14} />
                    {project.location}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{project.domain}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Visit website
                      <ExternalLink size={15} />
                    </a>
                    {project.caseStudySlug ? (
                      <Link
                        href={`/${project.caseStudySlug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                      >
                        View case study
                        <ArrowUpRight size={15} />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
