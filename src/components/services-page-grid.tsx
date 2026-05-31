import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { serviceCategories } from "@/lib/service-catalog";

const categoryVisuals: Record<
  string,
  {
    gradient: string;
    chip: string;
    line: string;
    banner: string;
  }
> = {
  "search-engine-optimization": {
    gradient: "from-slate-950/88 via-violet-950/75 to-cyan-950/65",
    chip: "border-violet-400/30 bg-violet-500/10 text-violet-200",
    line: "from-violet-400 to-cyan-400",
    banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
  "search-engine-marketing": {
    gradient: "from-slate-950/88 via-orange-950/70 to-rose-950/65",
    chip: "border-orange-400/30 bg-orange-500/10 text-orange-200",
    line: "from-orange-400 to-rose-400",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  "web-design-development": {
    gradient: "from-slate-950/88 via-blue-950/75 to-indigo-950/65",
    chip: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    line: "from-cyan-400 to-blue-400",
    banner: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  },
  "social-media": {
    gradient: "from-slate-950/88 via-fuchsia-950/70 to-pink-950/65",
    chip: "border-pink-400/30 bg-pink-500/10 text-pink-200",
    line: "from-pink-400 to-fuchsia-400",
    banner: "https://images.unsplash.com/photo-1611162617474-5b21eee9793a?auto=format&fit=crop&w=1600&q=80",
  },
  "marketing-automation": {
    gradient: "from-slate-950/88 via-emerald-950/70 to-teal-950/65",
    chip: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    line: "from-emerald-400 to-teal-400",
    banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  },
};

export function ServicesPageGrid() {
  return (
    <div className="space-y-16">
      <Reveal delay={0.04}>
        <div className="flex flex-wrap gap-2">
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {formatCategoryHeading(category.title)}
            </a>
          ))}
        </div>
      </Reveal>

      {serviceCategories.map((category, categoryIndex) => {
        const visual = categoryVisuals[category.id] ?? categoryVisuals["search-engine-optimization"];

        return (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <Reveal delay={categoryIndex * 0.04}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-700/50">
                <Image
                  src={visual.banner}
                  alt={`${category.title} services banner`}
                  width={1600}
                  height={360}
                  className="h-44 w-full object-cover md:h-52"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${visual.gradient}`} />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{category.title}</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white md:text-4xl">
                        {formatCategoryHeading(category.title)}
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                        {categoryDescriptions[category.id]}
                      </p>
                    </div>
                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${visual.chip}`}>
                      {category.items.length} service{category.items.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div
              className={`mt-6 grid gap-4 ${
                category.items.length === 1
                  ? "md:grid-cols-1 lg:max-w-xl"
                  : category.items.length === 2
                    ? "sm:grid-cols-2"
                    : "sm:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {category.items.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.slug} delay={index * 0.05}>
                    <Link
                      href={`/${service.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/70 p-5 transition hover:border-cyan-300/35 hover:shadow-[0_16px_40px_rgba(2,6,23,0.45)]"
                    >
                      <span
                        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${visual.line} opacity-70 transition group-hover:opacity-100`}
                      />
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 text-cyan-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <Icon size={22} />
                        </span>
                        <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-100">{service.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">{service.subtitle}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">
                        Explore service
                        <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

const categoryDescriptions: Record<string, string> = {
  "search-engine-optimization":
    "Core local SEO services that improve map visibility, rankings, citations, and on-site performance.",
  "search-engine-marketing":
    "Paid search campaigns that capture high-intent local demand while organic SEO builds momentum.",
  "web-design-development":
    "Fast, conversion-ready websites built on WordPress, Shopify, and Bricks with SEO foundations included.",
  "social-media": "Consistent social content and engagement that supports brand trust and local discovery.",
  "marketing-automation":
    "CRM workflows and automations that turn form fills and ad leads into organized sales follow-up.",
};

function formatCategoryHeading(title: string) {
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
