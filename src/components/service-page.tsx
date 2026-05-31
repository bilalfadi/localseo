import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { businessLocation, mapCoverageStats } from "@/lib/site-data";
import { formatCategoryLabel, getServiceVisual } from "@/lib/service-page-visuals";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";

type ServicePageProps = {
  slug: string;
  categoryLabel: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  painPoint: string;
  idealFor: string[];
  stepTitles: string[];
  benefits: string[];
  included: string[];
  steps: string[];
  whyChoose: string[];
  faq: { question: string; answer: string }[];
};

const benefitIcons = [TrendingUp, Target, MapPin, Users] as const;
const trustChips = ["Pittsburgh-based team", "Lead-focused reporting", "Nationwide clients"];

function splitTitle(title: string) {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) {
    return { lead: "", highlight: title };
  }
  return {
    lead: words.slice(0, -1).join(" "),
    highlight: words.at(-1) ?? title,
  };
}

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold text-white md:text-4xl">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function ServicePageTemplate({
  slug,
  categoryLabel,
  icon: Icon,
  title,
  intro,
  painPoint,
  idealFor,
  stepTitles,
  benefits,
  included,
  steps,
  whyChoose,
  faq,
}: ServicePageProps) {
  const visual = getServiceVisual(slug);
  const formattedCategory = formatCategoryLabel(categoryLabel);
  const titleParts = splitTitle(title);

  return (
    <main className="pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="section-shell relative py-10 md:py-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
            <div className="grid-overlay absolute inset-0 opacity-25" />
            <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] ${visual.accent}`}
                >
                  <Icon size={14} />
                  {categoryLabel}
                </span>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
                  {titleParts.lead ? `${titleParts.lead} ` : null}
                  <span className="gradient-text">{titleParts.highlight}</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 md:text-lg">{intro}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {trustChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="glow-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                <div className={`absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br ${visual.line} opacity-50 blur-md`} />
                <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 shadow-[0_30px_80px_rgba(2,6,23,0.55)]">
                  <Image
                    src={visual.banner}
                    alt={`${title} service`}
                    width={900}
                    height={640}
                    priority
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${visual.gradient} via-transparent to-transparent`} />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">Service focus</p>
                      <p className="mt-1 text-sm font-semibold text-white">{formattedCategory}</p>
                    </div>
                    <div className="glass-card glow-ring rounded-2xl px-4 py-3 text-right">
                      <p className="text-2xl font-semibold text-cyan-200">{mapCoverageStats[0]?.value}</p>
                      <p className="text-[10px] leading-4 text-slate-400">{mapCoverageStats[0]?.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-shell relative z-10 -mt-4 md:-mt-8">
        <Reveal delay={0.04}>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {mapCoverageStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/80 p-5 backdrop-blur-md transition hover:border-cyan-300/35"
              >
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${visual.line} opacity-70 transition group-hover:opacity-100`} />
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Result {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-3xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Challenge + Ideal */}
      <section className="section-shell grid gap-6 py-14 lg:grid-cols-2">
        <Reveal>
          <article className="group relative h-full overflow-hidden rounded-3xl border border-rose-400/20 bg-gradient-to-br from-rose-950/30 via-slate-950/80 to-slate-950/60 p-7 md:p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-rose-500/15 blur-3xl transition group-hover:bg-rose-500/25" />
            <div className="relative">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-400/30 bg-rose-500/10 text-rose-300">
                <Zap size={20} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-rose-300">The challenge</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Why this service matters</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{painPoint}</p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Based in {businessLocation.label}, we turn local search intent into measurable leads, not vanity metrics.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="group relative h-full overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/25 via-slate-950/80 to-slate-950/60 p-7 md:p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan-500/15 blur-3xl transition group-hover:bg-cyan-500/25" />
            <div className="relative">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                <Users size={20} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Who it&apos;s for</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">Ideal fit</h2>
              <ul className="mt-5 space-y-3">
                {idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-slate-200 transition hover:border-cyan-300/30"
                  >
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Benefits bento */}
      <section className="section-shell py-6">
        <Reveal>
          <SectionHeading
            eyebrow="Outcomes"
            title="What you gain"
            description={`Real business outcomes from ${title.toLowerCase()}, built for local buyers and measurable lead growth.`}
            action={
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
              >
                View results
                <ArrowRight size={14} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefitIcons[index % benefitIcons.length];
            const featured = index === 0;
            return (
              <Reveal key={benefit} delay={index * 0.05}>
                <article
                  className={`group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/70 p-6 transition hover:border-cyan-300/35 hover:shadow-[0_20px_50px_rgba(2,6,23,0.45)] ${
                    featured ? "md:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${visual.line} opacity-70`} />
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-cyan-300">
                    <BenefitIcon size={22} />
                  </span>
                  <p className={`relative mt-5 leading-7 text-slate-200 ${featured ? "text-base md:text-lg" : "text-sm"}`}>
                    {benefit}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Included */}
      <section className="section-shell py-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-950/20 via-slate-950/90 to-slate-950/80 p-7 md:p-10">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative">
              <SectionHeading eyebrow="Deliverables" title="What's included" />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {included.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-slate-200 transition hover:border-emerald-300/30"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="section-shell py-10">
        <Reveal>
          <SectionHeading
            eyebrow="Our process"
            title={`How we deliver ${title.toLowerCase()}`}
            description="A clear, repeatable framework from audit to ongoing optimization."
          />
        </Reveal>

        <div className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className={`absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r ${visual.line} opacity-30 xl:block`} />
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.06}>
              <article className="group relative glass-card overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${visual.line}`} />
                <p
                  className={`bg-gradient-to-r text-5xl font-bold ${visual.line} bg-clip-text text-transparent opacity-25`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {stepTitles[index] ?? `Phase ${index + 1}`}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="section-shell py-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/50">
            <Image
              src={visual.banner}
              alt=""
              width={1600}
              height={400}
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/80" />
            <div className="relative p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 text-cyan-300">
                  <ShieldCheck size={20} />
                </span>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Why choose Local SEO Wiser</h2>
              </div>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {whyChoose.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/70 p-4 text-sm backdrop-blur-sm"
                  >
                    <Sparkles size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-shell py-12">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description={`Answers about ${title.toLowerCase()} for local businesses.`}
          />
          <div className="mt-6 max-w-3xl">
            <FaqAccordion items={faq} />
          </div>
        </Reveal>
      </section>

      {/* Footer CTA */}
      <section className="section-shell pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-blue-700/35 via-cyan-600/20 to-violet-700/30 p-6 md:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">Explore more services</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">
                  Serving {businessLocation.serviceArea}. Browse our full service lineup.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                All Services
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
