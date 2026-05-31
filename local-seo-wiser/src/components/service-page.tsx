import { CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";
import { AuditForm } from "@/components/audit-form";

type ServicePageProps = {
  title: string;
  intro: string;
  benefits: string[];
  included: string[];
  steps: string[];
  whyChoose: string[];
  faq: { question: string; answer: string }[];
};

export function ServicePageTemplate({
  title,
  intro,
  benefits,
  included,
  steps,
  whyChoose,
  faq,
}: ServicePageProps) {
  const heroVisual =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80";

  return (
    <main>
      <section className="section-shell py-16 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-green-500/20 p-8 md:p-12">
            <Image
              src={heroVisual}
              alt="Local SEO service consultation session"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-cyan-300/20 blur-2xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Service Overview</p>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">{intro}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell grid gap-6 md:grid-cols-2">
        <CardList title="Service Benefits" items={benefits} />
        <CardList title="What Is Included" items={included} />
      </section>

      <section className="section-shell py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Step-by-Step Process</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step} delay={index * 0.08}>
              <article className="glass-card rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{step}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-4">
        <Reveal>
          <div className="glass-card rounded-3xl p-7">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Why Choose Local SEO Wiser</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {whyChoose.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-slate-700/60 bg-slate-900/60 p-4 text-sm">
                  <Sparkles size={17} className="mt-0.5 text-cyan-300" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="section-shell grid gap-8 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-slate-300">Answers tailored to help you evaluate local SEO with confidence.</p>
          <div className="mt-6">
            <FaqAccordion items={faq} />
          </div>
        </div>
        <div id="strategy-call">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Request a Local SEO Strategy Call</h2>
          <p className="mt-3 text-slate-300">
            Share your website and service area. We will return a practical action list focused on impact.
          </p>
          <div className="mt-6">
            <AuditForm compact />
          </div>
        </div>
      </section>
    </main>
  );
}

function CardList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <article className="glass-card rounded-3xl p-7">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <ul className="mt-5 space-y-3 text-sm text-slate-200">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 size={17} className="mt-0.5 text-green-400" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
