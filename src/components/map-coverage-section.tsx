"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { mapCoverageLocations, mapCoverageStats } from "@/lib/site-data";

export function MapCoverageSection() {
  const [activeId, setActiveId] = useState(mapCoverageLocations[0]?.id ?? 1);
  const activeLocation = mapCoverageLocations.find((item) => item.id === activeId) ?? mapCoverageLocations[0];

  return (
    <section className="section-shell pb-16 pt-4" aria-labelledby="map-coverage-heading">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Local Reach Map</p>
        <h2 id="map-coverage-heading" className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">
          Campaign dots, live stats, and locations we track on the map
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
          Every pin represents an active or completed local SEO market with geo-grid tracking, GSC reporting, and
          call performance tied to that location.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950/80">
          <div className="relative min-h-[420px] md:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=80"
              alt="Stylized map background showing local SEO coverage areas"
              fill
              className="object-cover opacity-35"
            />
            <div className="grid-overlay absolute inset-0 opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-indigo-950/55 to-cyan-950/45" />

            {mapCoverageLocations.map((location, index) => {
              const isActive = location.id === activeId;
              return (
                <button
                  key={location.id}
                  type="button"
                  aria-label={`View ${location.city}, ${location.region}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(location.id)}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: location.mapLeft, top: location.mapTop }}
                >
                  <motion.span
                    animate={{ scale: isActive ? [1, 1.25, 1] : [1, 1.12, 1], opacity: isActive ? 1 : 0.85 }}
                    transition={{ repeat: Infinity, duration: isActive ? 1.8 : 2.4, delay: index * 0.15 }}
                    className={`relative flex h-4 w-4 items-center justify-center rounded-full ${
                      isActive ? "bg-cyan-300 glow-ring" : "bg-cyan-400/90"
                    }`}
                  >
                    <span className="absolute h-8 w-8 rounded-full border border-cyan-300/40" />
                    <span className="absolute h-12 w-12 rounded-full bg-cyan-400/10" />
                  </motion.span>
                  <span
                    className={`absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                      isActive
                        ? "border border-cyan-200/40 bg-slate-950/90 text-cyan-100"
                        : "border border-slate-600/60 bg-slate-950/70 text-slate-300"
                    }`}
                  >
                    {location.city}
                  </span>
                </button>
              );
            })}

            {activeLocation ? (
              <div className="absolute bottom-4 left-4 right-4 z-20 md:left-auto md:right-6 md:max-w-sm">
                <article className="glass-card overflow-hidden rounded-2xl border border-cyan-300/25">
                  <div className="relative h-32">
                    <Image
                      src={activeLocation.image}
                      alt={`${activeLocation.city} local SEO performance snapshot`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {activeLocation.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {activeLocation.city}, {activeLocation.region}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-green-300">
                      <TrendingUp size={15} />
                      {activeLocation.stat}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{activeLocation.detail}</p>
                    {activeLocation.href ? (
                      <Link
                        href={activeLocation.href}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-200 hover:text-cyan-100"
                      >
                        View report
                        <ArrowRight size={14} />
                      </Link>
                    ) : null}
                  </div>
                </article>
              </div>
            ) : null}

            <div className="absolute left-4 right-4 top-4 z-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {mapCoverageStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-700/70 bg-slate-950/75 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="text-xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mapCoverageLocations.map((location, index) => (
          <Reveal key={location.id} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setActiveId(location.id)}
              className={`glass-card w-full overflow-hidden rounded-2xl text-left transition ${
                location.id === activeId ? "border-cyan-300/45 ring-1 ring-cyan-300/30" : ""
              }`}
            >
              <div className="relative h-28">
                <Image
                  src={location.image}
                  alt={`${location.city} campaign thumbnail`}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  <MapPin size={13} />
                  {location.city}, {location.region}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{location.stat}</p>
                <p className="mt-1 text-xs text-slate-400">{location.detail}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
