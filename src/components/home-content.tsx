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
} from "lucide-react";
import {
  faqs,
  portfolioItems,
  processSteps,
  serviceCards,
  testimonials,
} from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
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

const serviceScores = [86, 82, 79, 74, 84, 88];

const visuals = {
  heroMap:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
  heroDashboard:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
  beforeAfter:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  cta:
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
};

const portfolioThumbs = [
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
];

const industryCards = [
  {
    title: "Dentists",
    icon: BriefcaseBusiness,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    description:
      "Drive appointment-ready traffic with treatment intent pages, review trust signals, and stronger map pack visibility.",
    highlights: ["Implants & cosmetic intent", "Emergency local searches"],
  },
  {
    title: "Lawyers",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    description:
      "Capture high-value legal leads by improving local authority signals and city-specific service relevance.",
    highlights: ["Practice-area localization", "Consultation lead quality"],
  },
  {
    title: "Plumbers",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    description:
      "Rank for urgent service queries with tighter geo-targeting and service-area optimization for fast-call intent.",
    highlights: ["Emergency call terms", "Service-area pages"],
  },
  {
    title: "Restaurants",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    description:
      "Increase reservations and walk-ins through menu discoverability, local map prominence, and review velocity.",
    highlights: ["Near me dining intent", "Reservation conversion flow"],
  },
  {
    title: "Clinics",
    icon: MessageSquareHeart,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    description:
      "Improve patient acquisition using trusted profile optimization, service schema, and local reputation management.",
    highlights: ["Patient trust optimization", "Healthcare local signals"],
  },
  {
    title: "Real Estate",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    description:
      "Build neighborhood-level visibility with high-intent location pages and branch-level Google profile strategy.",
    highlights: ["Neighborhood targeting", "Branch discovery growth"],
  },
  {
    title: "Contractors",
    icon: ChartLine,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    description:
      "Generate qualified service requests by aligning local keyword clusters with project-focused landing experiences.",
    highlights: ["Project-category SEO", "Lead funnel alignment"],
  },
  {
    title: "Local Shops",
    icon: MapPinned,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    description:
      "Boost in-store visits using map visibility optimization, localized offers, and stronger review-led trust.",
    highlights: ["Storefront discovery", "Footfall-oriented content"],
  },
];

const trustFlags = [
  { code: "us", name: "United States" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "nz", name: "New Zealand" },
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
    <section className="section-shell relative overflow-hidden py-14 md:py-20">
      <Image
        src={visuals.heroMap}
        alt="Map background visualization"
        fill
        className="rounded-3xl object-cover opacity-15"
      />
      <div className="grid-overlay absolute inset-0 rounded-3xl opacity-20" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-950/65 via-slate-950/70 to-cyan-950/55" />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-10 top-16 h-28 w-28 rounded-full bg-violet-500/25 blur-2xl"
      />
      <motion.div
        animate={{ x: [0, 16, 0], y: [0, -8, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ repeat: Infinity, duration: 9 }}
        className="absolute bottom-16 left-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl border border-cyan-200/15 px-4 py-8 md:px-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                <Sparkles size={14} />
                Premium Local SEO Agency
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                Win local search attention before your competitors do
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                We plan and execute profile, review, citation, and location SEO systems that turn map visibility into
                qualified calls, bookings, and revenue.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-cyan-100/90">
                {["Geo-grid Tracking", "GBP Optimization", "Review Growth", "Citation Authority"].map((item) => (
                  <span key={item} className="rounded-full border border-slate-600/60 bg-slate-900/50 px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Book Strategy Call
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-slate-500 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { label: "Campaigns Launched", value: "240+" },
                  { label: "12m Client Retention", value: "96%" },
                  { label: "Average Rating", value: "4.9/5" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 px-4 py-3">
                    <p className="text-lg font-semibold text-white">{item.value}</p>
                    <p className="text-xs text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card relative rounded-3xl p-6">
              <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/70">
                <Image
                  src={visuals.heroDashboard}
                  alt="Local SEO analytics dashboard"
                  width={700}
                  height={420}
                  className="h-36 w-full object-cover"
                />
              </div>
              <div className="mb-5 rounded-2xl border border-slate-600/70 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Google Maps Search</span>
                  <span>📍 Nearby</span>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-950 px-3 py-2 text-slate-300">
                  <Search size={16} />
                  best family dentist near me
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Map Visibility</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    <AnimatedCounter target={64} suffix="%" />
                  </p>
                  <p className="text-xs text-slate-400">Average uplift over 6 months</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Direction Requests</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    <AnimatedCounter target={42} suffix="%" />
                  </p>
                  <p className="text-xs text-slate-400">Across active campaigns</p>
                </motion.div>
              </div>
              <div className="mt-4 rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-4 text-sm text-cyan-100">
                Local Intent Alert: High-value searches are growing in your city center this month.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section-shell py-12">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="glass-card rounded-3xl p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Trusted Across Regions</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Built for agencies, local teams, and growth-focused founders</h2>
            <p className="mt-4 text-slate-300">
              Clients from the US, UK, Canada, Australia, and New Zealand partner with us to improve Google Maps
              visibility using ethical, durable local SEO systems.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              {["BrightPath Dental", "Metro Legal", "Oakline Realty", "Nexa Clinics"].map((brand) => (
                <span key={brand} className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-slate-300">
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {trustFlags.map((flag) => (
                <span
                  key={flag.code}
                  className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-1.5"
                >
                  <Image
                    src={`https://flagcdn.com/w40/${flag.code}.png`}
                    alt={flag.name}
                    width={20}
                    height={14}
                    className="h-3.5 w-5 rounded-[2px] object-cover"
                  />
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-amber-300">
              {"★★★★★".split("").map((star, index) => (
                <span key={`${star}-${index}`} className="text-lg">
                  {star}
                </span>
              ))}
              <span className="text-sm text-slate-300">4.9 average campaign satisfaction</span>
            </div>
          </article>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {performanceStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
            <Reveal key={stat.label} delay={index * 0.08}>
              <motion.article whileHover={{ y: -4 }} className="glass-card h-full rounded-2xl p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                    <Icon size={18} />
                  </span>
                  <span className="text-xs font-semibold text-cyan-200">{stat.trend}</span>
                </div>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
                    style={{ width: stat.progress }}
                  />
                </div>
              </motion.article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-shell py-14">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Services</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Local SEO Services Designed for Revenue Growth</h2>
      </Reveal>
      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.map((item, index) => {
          const Icon = serviceIcons[index];
          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.article whileHover={{ y: -4 }} className="glass-card flex h-full min-h-[350px] flex-col rounded-2xl p-6">
                <div className="mb-4 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full border border-cyan-300/30 bg-slate-950/50 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                      Score {serviceScores[index]}%
                    </span>
                  </div>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                    {serviceHighlights[index][0]}
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-900/80">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
                      style={{ width: `${serviceScores[index]}%` }}
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceHighlights[index].map((chip) => (
                    <span key={chip} className="rounded-full border border-slate-700/70 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300">
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
                    style={{ width: `${serviceScores[index]}%` }}
                  />
                </div>
                <Link href={item.href} className="mt-auto pt-5 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Learn More →
                </Link>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function LocalSeoMattersSection() {
  return (
    <section className="section-shell py-14">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Why Local SEO Matters</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Better local visibility shapes real buying decisions
        </h2>
      </Reveal>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="glass-card rounded-3xl p-6">
            <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/60">
              <Image
                src={visuals.beforeAfter}
                alt="Local SEO growth comparison visual"
                width={800}
                height={420}
                className="h-40 w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white">Before Local SEO</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {[
                "Inconsistent business listings across platforms",
                "Few reviews and delayed responses to feedback",
                "Low presence in map pack for high-intent searches",
                "Unclear insight into calls and direction requests",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <ShieldCheck size={17} className="mt-0.5 text-slate-500" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.12}>
          <article className="glass-card rounded-3xl border border-green-400/40 p-6">
            <h3 className="text-xl font-semibold text-white">After Local SEO</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                "Strong map profile with local relevance signals",
                "Steady stream of customer reviews and sentiment trends",
                "Higher visibility for near-me and service-area terms",
                "Clear performance reporting tied to business outcomes",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 size={17} className="mt-0.5 text-green-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Ranking Snapshot</p>
              <div className="mt-3 flex items-end gap-2">
                {[20, 35, 55, 72, 84].map((bar, index) => (
                  <span key={bar} className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-300" style={{ height: `${bar}px` }}>
                    <span className="sr-only">{index}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processIcons = [ClipboardCheck, Compass, Gem, ChartLine, BarChart3];
  return (
    <section className="section-shell py-14">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Local SEO Process</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A transparent system from audit to reporting</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-r from-indigo-900/30 via-slate-900/70 to-cyan-900/30 p-5 md:p-6">
          <div className="grid items-center gap-5 md:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-700/60">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Local SEO process collaboration"
                width={700}
                height={420}
                className="h-40 w-full object-cover md:h-48"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Benchmarking current local visibility",
                "Prioritizing high-impact growth opportunities",
                "Executing profile, citation, and content updates",
                "Tracking call, click, and map conversion signals",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent xl:block" />
        {processSteps.map((step, index) => {
          const Icon = processIcons[index];
          return (
            <Reveal key={step.title} delay={index * 0.08}>
              <motion.article whileHover={{ y: -4 }} className="glass-card relative h-full rounded-2xl p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-400/10 text-cyan-200">
                    <Icon size={18} />
                  </span>
                  <span className="rounded-full border border-slate-600/70 bg-slate-900/70 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
                    style={{ width: `${Math.min(100, 25 + index * 18)}%` }}
                  />
                </div>
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
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Built for local industries where trust and proximity drive conversions</h2>
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
  return (
    <section className="section-shell py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Portfolio</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Selected local growth campaigns</h2>
        </Reveal>
        <Link href="/portfolio" className="rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300">
          View Full Portfolio
        </Link>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.slice(0, 3).map((item, index) => (
          <Reveal key={item.id} delay={index * 0.09}>
            <article className="glass-card flex h-full min-h-[360px] flex-col rounded-2xl p-5">
              <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/70">
                <Image
                  src={portfolioThumbs[index]}
                  alt={`${item.businessType} portfolio thumbnail`}
                  width={700}
                  height={420}
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="min-h-[98px] rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-green-500/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.businessType} {item.flag}
                </h3>
              </div>
              <p className="mt-4 min-h-[56px] text-sm text-slate-300">
                <span className="font-semibold text-slate-100">Result:</span> {item.result}
              </p>
            </article>
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
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">What clients say about working with us</h2>
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
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Answers to common local SEO questions</h2>
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
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Plan your next 90 days of local growth</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              Get a focused roadmap for maps visibility, review velocity, and conversion-ready local pages so your
              team knows exactly what to prioritize first.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-200/35 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Priority actions
              </span>
              <span className="rounded-full border border-cyan-200/35 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Geo-grid insights
              </span>
              <span className="rounded-full border border-cyan-200/35 bg-slate-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Monthly direction
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-200/25 bg-slate-950/45 p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-cyan-100">Pick your next move</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-200" />
                Strategy call with local SEO specialist
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-200" />
                Compare services and execution model
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Talk to Strategist
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
