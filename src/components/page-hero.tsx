import { Reveal } from "@/components/reveal";
import Image from "next/image";

const pageHeroVisual =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-shell py-14 md:py-18">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-r from-blue-700/25 via-slate-900 to-cyan-600/20 px-4 py-8 md:px-8 md:py-10">
          <Image
            src={pageHeroVisual}
            alt="Modern digital marketing workspace"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute -right-20 top-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">{description}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
