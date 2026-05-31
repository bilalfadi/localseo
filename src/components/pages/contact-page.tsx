import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { businessLocation } from "@/lib/site-data";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@localseowiser.com",
    href: "mailto:hello@localseowiser.com",
    hint: "Best for project details & files",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (347) 555-0199",
    href: "tel:+13475550199",
    hint: "Mon to Fri, 9 AM to 6 PM ET",
  },
  {
    icon: Clock3,
    label: "Response time",
    value: "Within 1 business day",
    hint: "Pittsburgh-based team",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: businessLocation.serviceArea,
    hint: businessLocation.label,
  },
];

const reachSteps = [
  "Email or call with your website and primary service area",
  "Tell us your main goal: maps visibility, leads, ads, or web",
  "We review your market and reply within one business day",
  "We agree on next steps by email or phone",
];

const shareChecklist = [
  "Website URL (if live)",
  "City or region you serve",
  "Services you want to grow",
  "Current challenge: maps, SEO, ads, or site",
];

export function ContactPageContent() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to our Pittsburgh local SEO team"
        description="Email or call us directly. No long forms, just a practical conversation about your market, goals, and next steps."
      />

      <section className="section-shell pb-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.label} delay={index * 0.05}>
                <article className="glass-card h-full rounded-2xl p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                    <Icon size={18} />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{channel.label}</p>
                  {channel.href ? (
                    <a href={channel.href} className="mt-2 block text-base font-semibold text-white transition hover:text-cyan-200">
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base font-semibold text-white">{channel.value}</p>
                  )}
                  <p className="mt-2 text-xs leading-5 text-slate-400">{channel.hint}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-10">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="glass-card flex flex-col rounded-3xl p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Direct contact</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">How to reach us</h2>
                </div>
                <MessageSquare size={28} className="text-cyan-400/60" />
              </div>

              <ol className="mt-6 space-y-3">
                {reachSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-2xl border border-slate-700/50 bg-slate-900/50 p-4 text-sm text-slate-200"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-bold text-cyan-200">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-950/20 p-4">
                <p className="text-sm font-semibold text-emerald-200">Helpful to include</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {shareChecklist.map((item) => (
                    <li key={item} className="text-xs leading-5 text-slate-300">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@localseowiser.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Email Us
                </a>
                <a
                  href="tel:+13475550199"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Quick links</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link
                    href="/services"
                    className="rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/packages"
                    className="rounded-full border border-slate-700/70 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  >
                    Packages
                  </Link>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {["LinkedIn", "Instagram", "YouTube"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="rounded-xl border border-slate-700/70 px-3 py-2 text-xs text-slate-300 hover:border-cyan-300 hover:text-cyan-200"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-slate-700/70 lg:min-h-full">
              <div className="border-b border-slate-700/70 bg-slate-900/80 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Map</p>
                <h2 className="mt-1 text-lg font-semibold text-white">{businessLocation.label}</h2>
                <p className="mt-1 text-sm text-slate-400">{businessLocation.serviceArea}</p>
              </div>
              <iframe
                title={`Local SEO Wiser, ${businessLocation.label}`}
                src="https://maps.google.com/maps?q=Pittsburgh%2C%20Pennsylvania&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="min-h-[360px] flex-1 w-full lg:min-h-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {calendlyUrl ? (
        <section className="section-shell pb-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/50">
              <div className="border-b border-slate-700/70 px-6 py-5 md:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Optional</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Schedule a call on our calendar</h2>
                <p className="mt-2 text-sm text-slate-400">Pick a time that works for you, or use email and phone above.</p>
              </div>
              <iframe
                src={calendlyUrl}
                title="Schedule a call"
                className="h-[640px] w-full bg-white"
                loading="lazy"
              />
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="section-shell pb-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-r from-blue-700/30 via-cyan-600/15 to-violet-700/25 p-6 md:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="relative flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h2 className="text-xl font-semibold text-white md:text-2xl">Ready to discuss your local market?</h2>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-200">
                    We work with businesses in {businessLocation.city} and nationwide. Browse services or email us to start.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  View Services
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      )}
    </main>
  );
}
