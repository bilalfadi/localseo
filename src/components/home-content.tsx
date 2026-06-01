"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ChartLine,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Gem,
  Globe2,
  LineChart,
  MapPinned,
  MessageSquareHeart,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  XCircle,
} from "lucide-react";
import {
  businessLocation,
  faqs,
  homeServiceDescriptions,
  mapCoverageStats,
  portfolioCaseStudy,
  portfolioItems,
  processSteps,
  serviceCards,
  testimonials,
} from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { FaqAccordion } from "@/components/faq-accordion";
const serviceIcons = [
  MapPinned,
  Globe2,
  MessageSquareHeart,
  Search,
  Store,
  LineChart,
];

const serviceHighlights = [
  ["Profile Health", "Category Alignment"],
  ["NAP Consistency", "Authority Sources"],
  ["Review Flow", "Response Quality"],
  ["Intent Clusters", "City Modifiers"],
  ["Local Landing Pages", "Conversion UX"],
  ["Lead Dashboards", "Geo-grid Trends"],
];

const visuals = {
  heroMap:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
  beforeAfter:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  cta:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
};

const industryCards = [
  {
    title: "Dentists",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    description:
      "Drive appointment-ready traffic with treatment intent pages, review trust signals, and stronger map pack visibility for your Pittsburgh practice.",
    highlights: ["Implants & cosmetic intent", "Emergency local searches"],
  },
  {
    title: "Lawyers",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    description:
      "Capture high-value Pittsburgh legal leads by improving local authority signals and city-specific service relevance across neighborhoods you serve.",
    highlights: ["Practice-area localization", "Consultation lead quality"],
  },
  {
    title: "Plumbers",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    description:
      "Rank for urgent Pittsburgh service queries with tighter geo-targeting and service-area optimization built for fast-call intent.",
    highlights: ["Emergency call terms", "Service-area pages"],
  },
  {
    title: "Restaurants",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    description:
      "Increase Pittsburgh reservations and walk-ins through menu discoverability, local map prominence, and review velocity that outpaces competitors.",
    highlights: ["Near me dining intent", "Reservation conversion flow"],
  },
  {
    title: "Clinics",
    icon: MessageSquareHeart,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    description:
      "Improve patient acquisition using trusted profile optimization, service schema, and local reputation management for Pittsburgh healthcare practices.",
    highlights: ["Patient trust optimization", "Healthcare local signals"],
  },
  {
    title: "Real Estate",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    description:
      "Build neighborhood-level visibility across Pittsburgh's distinct areas with high-intent location pages and branch-level Google profile strategy.",
    highlights: ["Neighborhood targeting", "Branch discovery growth"],
  },
  {
    title: "Contractors",
    icon: ChartLine,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    description:
      "Generate qualified Pittsburgh service requests by aligning local keyword clusters with project-focused landing experiences.",
    highlights: ["Project-category SEO", "Lead funnel alignment"],
  },
  {
    title: "Local Shops",
    icon: MapPinned,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    description:
      "Boost Pittsburgh in-store visits using map visibility optimization, localized offers, and stronger review-led trust with nearby shoppers.",
    highlights: ["Storefront discovery", "Footfall-oriented content"],
  },
];

const trustFlags = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
];

const performanceStats = [
  {
    value: "240+",
    label: "Local campaigns launched",
    trend: "+32% YoY",
    progress: "82%",
    icon: BriefcaseBusiness,
  },
  {
    value: "96%",
    label: "Clients staying beyond 12 months",
    trend: "+8% retention",
    progress: "96%",
    icon: ShieldCheck,
  },
  {
    value: "18.7M",
    label: "Map discovery views improved",
    trend: "+5.1M this year",
    progress: "78%",
    icon: MapPinned,
  },
  {
    value: "4.9/5",
    label: "Average review profile rating",
    trend: "Trusted by multi-region brands",
    progress: "92%",
    icon: MessageSquareHeart,
  },
];

export function HomeContent() {
  return (
    <main className="pb-8">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <LocalSeoMattersSection />
      <ProcessSection />
      <IndustriesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle, fast background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-overlay absolute inset-0 opacity-[0.10]" />
        <div className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[130px]" />
      </div>

      <div className="section-shell relative pt-4 pb-16 md:pt-6 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: answer-first copy */}
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                <Sparkles size={13} />
                Local SEO Agency · {businessLocation.city}, {businessLocation.region}
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-[3.9rem]">
                Pittsburgh Local SEO Agency That Puts Your Business on the Google Map
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                Most Pittsburgh businesses are invisible on Google Maps while competitors down the street collect every
                call. We fix that with proven local SEO that drives real leads, not vanity rankings.
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
                If your Pittsburgh business is not showing up in the local 3-pack, you are handing customers to your
                competitors every single day. Our{" "}
                <Link href="/pittsburgh-local-seo" className="font-medium text-cyan-200 hover:text-cyan-100">
                  Pittsburgh local SEO
                </Link>{" "}
                and{" "}
                <Link
                  href="/pittsburgh-google-maps-optimization"
                  className="font-medium text-cyan-200 hover:text-cyan-100"
                >
                  Google Maps optimization Pittsburgh
                </Link>{" "}
                programs help service businesses, contractors, medical practices, and local shops across Pittsburgh, from
                the North Shore to Squirrel Hill, rank where it counts and turn nearby searches into booked calls.
              </p>

              {/* Single primary CTA + ghost secondary */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="glow-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Get My Free Pittsburgh SEO Proposal
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  See Client Results
                </Link>
              </div>

              {/* Social proof directly below CTA */}
              <div className="mt-6 flex items-center gap-3">
                <span className="flex items-center gap-0.5 text-amber-300">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                </span>
                <span className="text-sm text-slate-300">
                  <span className="font-semibold text-white">4.9/5</span> average client satisfaction
                </span>
              </div>

              {/* Stat row */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/5 pt-7">
                {mapCoverageStats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs leading-4 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: clean supporting visual */}
          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-1.5 rounded-[1.9rem] bg-gradient-to-br from-violet-500/50 via-blue-500/35 to-cyan-400/50 opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white shadow-[0_35px_90px_rgba(2,6,23,0.55)]">
                <Image
                  src="/hero-local-seo.png"
                  alt="Local SEO that enhances your local visibility and business listings"
                  width={1200}
                  height={800}
                  priority
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/55 to-transparent" />
                {/* One subtle proof badge */}
                <div className="glass-card glow-ring absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                      <ShieldCheck size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Reporting you can verify</p>
                      <p className="text-[11px] text-slate-400">Real GSC clicks, impressions & calls</p>
                    </div>
                  </div>
                  <p className="text-2xl font-semibold text-cyan-200">{portfolioCaseStudy.stats[0]?.value}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Trust strip */}
        <Reveal delay={0.15}>
          <div className="mt-14 border-t border-white/5 pt-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Trusted by local brands across Pittsburgh and beyond
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
              {trustFlags.map((flag) => (
                <span
                  key={flag.code}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  <Image
                    src={`https://flagcdn.com/w40/${flag.code}.png`}
                    alt={flag.name}
                    width={20}
                    height={14}
                    className="h-3.5 w-5 rounded-[2px] object-cover"
                  />
                  {flag.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section-shell py-14 md:py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-cyan-200/15 bg-gradient-to-br from-indigo-950/70 via-slate-950/80 to-cyan-950/55 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left intro */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Proven Results</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Numbers That Prove Our Pittsburgh Local SEO Works
              </h2>
              <p className="mt-4 text-slate-300">
                We measure success in calls, leads, and revenue, not rankings that do not convert.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Pittsburgh businesses compete in one of the most concentrated local markets in the northeastern US.
                Neighborhoods like Shadyside, Mt. Lebanon, and the South Side have dense clusters of businesses fighting
                for the same three map pack spots. Our campaigns are built around that reality, not generic templates.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-amber-300">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={`${star}-${index}`} className="text-base">{star}</span>
                    ))}
                  </span>
                  <span className="text-sm text-slate-300">
                    <span className="font-semibold text-white">4.9/5</span> satisfaction
                  </span>
                </span>
                <span className="hidden h-4 w-px bg-white/15 sm:block" />
                <div className="flex items-center gap-1.5">
                  {trustFlags.map((flag) => (
                    <Image
                      key={flag.code}
                      src={`https://flagcdn.com/w40/${flag.code}.png`}
                      alt={flag.name}
                      width={20}
                      height={14}
                      className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-white/10"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: inline divided metrics */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              {performanceStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Reveal key={stat.label} delay={index * 0.08}>
                    <div className="h-full bg-slate-950/50 p-6">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-200">
                          <Icon size={17} />
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-300">{stat.trend}</span>
                      </div>
                      <p className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">{stat.value}</p>
                      <p className="mt-1.5 text-xs leading-5 text-slate-400">{stat.label}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-shell py-14 md:py-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Local SEO Services Built for Pittsburgh Business Growth
            </h2>
            <p className="mt-4 text-slate-300">
              From your Google Business Profile to technical site health, we handle every layer of{" "}
              <Link href="/pittsburgh-local-seo" className="font-medium text-cyan-200 hover:text-cyan-100">
                Pittsburgh local SEO
              </Link>{" "}
              and{" "}
              <Link
                href="/pittsburgh-google-maps-optimization"
                className="font-medium text-cyan-200 hover:text-cyan-100"
              >
                Google Maps optimization Pittsburgh
              </Link>{" "}
              that gets Pittsburgh businesses found and chosen by nearby customers.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            View All Services
            <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((item, index) => {
          const Icon = serviceIcons[index];
          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <Link href={item.href} className="block h-full">
                <motion.article
                  whileHover={{ y: -4 }}
                  className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 opacity-0 transition group-hover:opacity-100" />
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-gradient-to-br from-blue-500/15 to-cyan-400/15 text-cyan-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200/90">{item.subtitle}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{homeServiceDescriptions[index]}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceHighlights[index].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-cyan-300 transition group-hover:gap-2.5 group-hover:text-cyan-200">
                    Learn more
                    <ArrowRight size={15} />
                  </span>
                </motion.article>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

const localSeoStats = [
  {
    value: "46%",
    title: "Local intent searches",
    detail: "Of all Google searches have local intent.",
    source: "Google",
  },
  {
    value: "76%",
    title: "Store visits in 24 hours",
    detail: "Of nearby mobile searches result in a store visit within 24 hours.",
    source: "Backlinko",
  },
  {
    value: "88%",
    title: "Calls or visits in a week",
    detail: "Of local mobile searchers call or visit a business within one week.",
    source: "Google",
  },
];

const withoutLocalSeo = [
  "Your listing appears differently across Google, Maps, and directories, confusing both customers and Google's algorithm",
  "Few reviews and slow responses signal low trustworthiness to potential Pittsburgh customers",
  "You are invisible in the map pack while nearby competitors collect every high-intent near me search",
  "No clear view of how many calls, clicks, or direction requests your profile is actually generating",
];

const withLocalSeo = [
  "Fully optimized Pittsburgh profile with strong local relevance signals and category alignment",
  "Steady, managed review flow that builds trust and improves your star rating over time",
  "Top map pack visibility for the near-me and service-area keywords that drive real calls in Pittsburgh",
  "Transparent monthly reporting that connects our work directly to leads, calls, and revenue",
];

function LocalSeoMattersSection() {
  return (
    <section className="section-shell py-14 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Why Local SEO Matters</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Local Search Is Where Pittsburgh Buying Decisions Happen
          </h2>
          <p className="mt-4 text-slate-300">
            When someone in Pittsburgh searches for a plumber, a dentist, or an HVAC company, they are not browsing.
            They are ready to call. If your business is not visible at that moment, a competitor gets the lead.
          </p>
        </div>
      </Reveal>

      {/* Industry stats strip */}
      <Reveal delay={0.08}>
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 opacity-70" />
          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {localSeoStats.map((stat) => (
              <div key={stat.title} className="px-6 py-7 md:px-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-4xl font-semibold tracking-tight text-white md:text-[2.75rem]">{stat.value}</p>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {stat.source}
                  </span>
                </div>
                <p className="mt-3 text-base font-semibold text-cyan-200">{stat.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Without vs With comparison */}
      <div className="relative mt-8 grid gap-5 md:grid-cols-2">
        <span className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-xs font-bold uppercase tracking-wide text-slate-300 md:flex">
          vs
        </span>
        <Reveal>
          <article className="glass-card h-full rounded-3xl p-7">
            <h3 className="text-lg font-semibold text-slate-200">Without local SEO</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              {withoutLocalSeo.map((item) => (
                <li key={item} className="flex gap-3">
                  <XCircle size={18} className="mt-0.5 shrink-0 text-rose-400/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.12}>
          <article className="glass-card glow-ring h-full rounded-3xl border border-emerald-400/30 p-7">
            <h3 className="text-lg font-semibold text-white">With Local SEO Wiser</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-200">
              {withLocalSeo.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:gap-3 hover:text-cyan-200"
            >
              Start Your Pittsburgh Local Growth
              <ArrowRight size={15} />
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processIcons = [ClipboardCheck, Compass, Gem, ChartLine, BarChart3];
  return (
    <section className="section-shell py-14 md:py-16">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Local SEO Process</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            A Transparent System from Pittsburgh Audit to Monthly Reporting
          </h2>
          <p className="mt-4 text-slate-300">
            Five clear stages, full visibility at every step. You will always know what we are doing, why it matters, and
            how it is moving your Pittsburgh rankings forward.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent xl:block" />
        {processSteps.map((step, index) => {
          const Icon = processIcons[index];
          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className="glass-card group relative flex h-full flex-col rounded-2xl p-6 text-center xl:text-left"
              >
                <div className="mx-auto flex items-center gap-3 xl:mx-0">
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/35 bg-slate-950 text-cyan-200">
                    <Icon size={20} />
                  </span>
                  <span className="text-3xl font-semibold text-slate-700 transition group-hover:text-cyan-300/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.description}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="section-shell py-14">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Industries We Serve</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Built for Pittsburgh Industries Where Trust and Proximity Drive Conversions
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Pittsburgh&apos;s local market is competitive across every sector. Whether you are a dentist in Shadyside, a
          contractor in the South Hills, or a law firm in Downtown Pittsburgh, we know your market and how to win it.
        </p>
      </Reveal>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {industryCards.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Reveal key={industry.title} delay={index * 0.05}>
              <article className="glass-card flex h-full min-h-[360px] flex-col rounded-2xl p-5">
                <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/70">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} local SEO visual`}
                    width={700}
                    height={420}
                    className="h-36 w-full object-cover"
                  />
                </div>
                <Icon size={20} className="text-cyan-300" />
                <h3 className="mt-3 text-lg font-semibold text-white">{industry.title}</h3>
                <p className="mt-2 min-h-[72px] text-sm text-slate-300">{industry.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-3 text-xs">
                  {industry.highlights.map((point) => (
                    <span key={point} className="rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-slate-300">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function PortfolioSection() {
  const featuredReports = [
    portfolioItems[0],
    portfolioItems[1],
    portfolioItems[4],
  ];

  return (
    <section className="section-shell py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Selected Pittsburgh and Regional Local Growth Campaigns
          </h2>
        </Reveal>
        <Link
          href="/portfolio"
          className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
        >
          View Full Portfolio
        </Link>
      </div>

      <Reveal delay={0.05}>
        <article className="glass-card mt-7 overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[220px] border-b border-slate-700/60 lg:min-h-[280px] lg:border-b-0 lg:border-r">
              <Image
                src={portfolioCaseStudy.image}
                alt={`${portfolioCaseStudy.businessType} GSC report`}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent lg:bg-gradient-to-t lg:from-slate-950/95 lg:via-slate-950/40 lg:to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  {portfolioCaseStudy.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{portfolioCaseStudy.businessType}</h3>
                <p className="mt-2 text-sm text-slate-400">{portfolioCaseStudy.location}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="text-sm leading-7 text-slate-300">{portfolioCaseStudy.result}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {portfolioCaseStudy.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-center"
                  >
                    <p className="text-xl font-semibold text-cyan-200">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-4 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                See all 8 GSC reports
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {featuredReports.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.08}>
            <Link
              href={`/${item.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/70 transition hover:border-cyan-300/40 hover:shadow-[0_16px_40px_rgba(2,6,23,0.45)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={700}
                  height={420}
                  className="h-44 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-cyan-300/35 bg-slate-950/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-200">
                  {item.category === "Google Search Console" ? "GSC" : "Calls"}
                </span>
                <p className="absolute bottom-3 left-3 right-3 text-lg font-semibold leading-snug text-white">
                  {item.metric}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-sm font-medium text-slate-200">{item.reportTitle}</p>
                <p className="mt-2 line-clamp-2 flex-1 text-xs leading-5 text-slate-400">{item.insight}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
                  Open report
                  <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-shell py-14">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          What Pittsburgh and Regional Clients Say About Working With Us
        </h2>
      </Reveal>
      <div className="mt-7">
        <TestimonialSlider items={testimonials} />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section-shell py-14">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Common Questions from Pittsburgh Business Owners
        </h2>
      </Reveal>
      <div className="mt-7">
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="strategy-call" className="section-shell py-14">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-blue-700/40 via-cyan-600/25 to-green-600/30 p-5 md:p-8">
        <Image
          src={visuals.cta}
          alt="Team strategy visual"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative z-10 grid gap-7 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Plan Your Next 90 Days of Pittsburgh Local Growth
            </h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Pittsburgh&apos;s map pack has three spots. Your competitors are actively working to hold them. Get a
              focused roadmap for Pittsburgh map visibility, review velocity, and conversion-ready local pages, so your
              team knows exactly what to prioritize first.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-200/35 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Priority actions for your Pittsburgh market
              </span>
              <span className="rounded-full border border-cyan-200/35 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Geo-grid insights across Pittsburgh neighborhoods
              </span>
              <span className="rounded-full border border-cyan-200/35 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Monthly direction so you are never guessing what comes next
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-200/25 bg-slate-950/45 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-cyan-100">Pick your next move</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-200" />
                Strategy call with a Pittsburgh local SEO specialist
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-200" />
                Compare services and execution model
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Get My Free Pittsburgh SEO Proposal
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-cyan-100/35 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-slate-900/40"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
