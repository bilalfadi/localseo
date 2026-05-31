import Image from "next/image";
import { Award, Globe, Mail, MapPin, Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

const teamMembers = [
  {
    name: "Usman Fadi",
    role: "Founder & Local SEO Lead",
    badge: "Founder",
    image: "/team-founder.png",
    objectPosition: "center 22%",
    bio: "Leads strategy and client growth, turning local search demand into measurable calls, bookings, and revenue.",
    skills: ["Local Strategy", "Growth", "GBP"],
    accent: "from-violet-500 via-blue-500 to-cyan-400",
  },
  {
    name: "Najaf",
    role: "SEO Strategist",
    badge: "Strategist",
    image: "/team-seo-strategist.png",
    objectPosition: "center 20%",
    bio: "Owns on-page, technical, and citation execution that builds durable local relevance compounding month over month.",
    skills: ["Technical SEO", "On-Page", "Citations"],
    accent: "from-cyan-400 via-blue-500 to-emerald-400",
  },
  {
    name: "Tayyab",
    role: "Human Resources",
    badge: "HR",
    image: "/team-hr.png",
    objectPosition: "center 22%",
    bio: "Builds and supports the team by handling hiring, onboarding, and people operations so delivery stays smooth and dependable.",
    skills: ["Hiring", "Onboarding", "People Ops"],
    accent: "from-fuchsia-500 via-violet-500 to-blue-500",
  },
];

export function AboutPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A specialist local SEO team focused on practical growth"
        description={`Local SEO Wiser is a Pittsburgh-based local SEO team combining agency-level strategy with hands-on implementation for businesses across Pennsylvania and beyond.`}
      />

      <section className="section-shell pb-16">
        <h2 className="sr-only">Our mission, approach, and values</h2>
        <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            body: "Equip local brands with clear SEO priorities that turn nearby search demand into measurable business outcomes.",
          },
          {
            title: "Our Approach",
            body: "Balance technical precision and content relevance with real-world business goals like calls, bookings, and walk-ins.",
          },
          {
            title: "Our Values",
            body: "Transparency, ethical optimization, and long-term compounding results built through disciplined monthly execution.",
          },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="glass-card h-full rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.body}</p>
            </article>
          </Reveal>
        ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Our Team</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              The people behind your local growth
            </h2>
            <p className="mt-4 text-slate-300">
              A focused team that blends strategy and hands-on execution, so your local SEO is always moving forward.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              {/* Premium gradient frame */}
              <div className={`group relative h-full rounded-[1.75rem] bg-gradient-to-br ${member.accent} p-px shadow-[0_30px_70px_rgba(2,6,23,0.55)]`}>
                <article className="relative flex h-full flex-col items-center overflow-hidden rounded-[1.7rem] bg-slate-950/95 px-8 pb-8 pt-10 text-center">
                  {/* Blurred ambient backdrop from the same photo */}
                  <Image
                    src={member.image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="400px"
                    className="scale-125 object-cover opacity-20 blur-2xl"
                    style={{ objectPosition: member.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/88 to-slate-950/97" />

                  {/* Founder/role badge */}
                  <span className={`relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${member.accent} px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-lg`}>
                    <Award size={12} />
                    {member.badge}
                  </span>

                  {/* Circular avatar with animated gradient ring */}
                  <div className="relative mt-6">
                    <span
                      className={`absolute -inset-2 rounded-full bg-gradient-to-br ${member.accent} opacity-70 blur-md transition duration-500 group-hover:opacity-100`}
                    />
                    <span className={`absolute -inset-1 rounded-full bg-gradient-to-br ${member.accent}`} />
                    <div className="relative h-40 w-40 overflow-hidden rounded-full border-[5px] border-slate-950 bg-slate-900">
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        sizes="160px"
                        priority={index === 0}
                        className="object-cover transition duration-500 group-hover:scale-105"
                        style={{ objectPosition: member.objectPosition }}
                      />
                    </div>
                  </div>

                  <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-white">{member.name}</h3>
                  <p className="relative mt-1 text-sm font-medium text-cyan-300">{member.role}</p>

                  {/* Gold rating line */}
                  <div className="relative mt-3 flex items-center gap-1.5">
                    <span className="flex items-center gap-0.5 text-amber-300">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={13} fill="currentColor" />
                      ))}
                    </span>
                    <span className="text-xs text-slate-400">Top-rated specialist</span>
                  </div>

                  <p className="relative mt-4 text-sm leading-6 text-slate-300">{member.bio}</p>

                  {/* Expertise chips */}
                  <div className="relative mt-5 flex flex-wrap items-center justify-center gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <span className="relative mt-6 h-px w-16 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                  <div className="relative mt-5 flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin size={13} className="text-cyan-300" />
                      Pittsburgh, PA
                    </span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href="/contact"
                        aria-label={`Email ${member.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                      >
                        <Mail size={15} />
                      </a>
                      <a
                        href="/contact"
                        aria-label={`Connect with ${member.name}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/70 text-slate-300 transition hover:border-cyan-300/60 hover:text-cyan-200"
                      >
                        <Globe size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <Reveal>
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Why businesses choose Local SEO Wiser</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Dedicated local SEO strategists with category-specific experience",
                "Flexible support for single-location and multi-location brands",
                "Reporting tied to business outcomes, not vanity metrics",
                "Cross-functional execution across profile, content, citations, and reviews",
                "Quarterly strategy refreshes based on local SERP movement",
                "Collaborative communication style with practical recommendations",
              ].map((point) => (
                <li key={point} className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4 text-sm text-slate-200">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
