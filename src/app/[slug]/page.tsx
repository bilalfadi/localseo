import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { AboutPageContent } from "@/components/pages/about-page";
import { BlogPageContent } from "@/components/pages/blog-page";
import { ContactPageContent } from "@/components/pages/contact-page";
import { PackagesPageContent } from "@/components/pages/packages-page";
import { PortfolioPageContent } from "@/components/pages/portfolio-page";
import { ServicesPageContent } from "@/components/pages/services-page";
import { ServicePageTemplate } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";
import { portfolioVisuals } from "@/lib/site-data";
import { getAllSlugParams, resolveSlugPage, staticPages } from "@/lib/slug-pages";

export function generateStaticParams() {
  return getAllSlugParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = resolveSlugPage(slug);

  if (!content) {
    return buildMetadata({
      title: "Page Not Found | Local SEO Wiser",
      description: "The requested page could not be found.",
      path: "/",
    });
  }

  if (content.type === "static") {
    const page = staticPages[content.slug];
    return buildMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/${content.slug}`,
      keywords: page.keywords,
    });
  }

  if (content.type === "portfolio") {
    return buildMetadata({
      title: `${content.item.businessType} Case Study | Local SEO Wiser`,
      description: content.item.summary,
      path: `/${content.item.slug}`,
      keywords: [content.item.category.toLowerCase(), "local seo case study", content.item.service.toLowerCase()],
    });
  }

  if (content.type === "blog") {
    return buildMetadata({
      title: `${content.article.title} | Local SEO Wiser`,
      description: content.article.description,
      path: `/${content.article.slug}`,
      keywords: [content.article.category.toLowerCase(), "local seo insights"],
    });
  }

  return buildMetadata({
    title: content.config.metaTitle,
    description: content.config.metaDescription,
    path: `/${content.config.slug}`,
    keywords: content.config.keywords,
  });
}

function renderStaticPage(slug: keyof typeof staticPages) {
  switch (slug) {
    case "about":
      return <AboutPageContent />;
    case "contact":
      return <ContactPageContent />;
    case "services":
      return <ServicesPageContent />;
    case "portfolio":
      return <PortfolioPageContent />;
    case "blog":
      return <BlogPageContent />;
    case "packages":
      return <PackagesPageContent />;
    default:
      return notFound();
  }
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = resolveSlugPage(slug);

  if (!content) {
    notFound();
  }

  if (content.type === "static") {
    return renderStaticPage(content.slug);
  }

  if (content.type === "service") {
    const { config } = content;
    return (
      <ServicePageTemplate
        title={config.title}
        intro={config.intro}
        benefits={config.benefits}
        included={config.included}
        steps={config.steps}
        whyChoose={config.whyChoose}
        faq={config.faq}
      />
    );
  }

  if (content.type === "blog") {
    const { article } = content;
    return (
      <main className="section-shell py-16">
        <article className="glass-card rounded-3xl p-5 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{article.category}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-5xl">{article.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">{article.description}</p>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-200">
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-200"
          >
            Back to Blog
          </Link>
        </article>
      </main>
    );
  }

  const { item } = content;
  const image = portfolioVisuals[item.category] ?? portfolioVisuals["Google Business Profile"];

  return (
    <main className="section-shell py-14 md:py-16">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>

      <article className="glass-card mt-6 overflow-hidden rounded-3xl">
        <div className="relative h-56 md:h-72">
          <Image src={image} alt={`${item.businessType} case study`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          <div className="absolute bottom-0 p-5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white md:text-5xl">
              {item.businessType} {item.flag}
            </h1>
            <p className="mt-2 text-base text-slate-200">{item.service}</p>
          </div>
        </div>

        <div className="space-y-8 p-5 md:p-8">
          <p className="max-w-4xl text-base leading-7 text-slate-300">{item.summary}</p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Goal</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item.goal}</p>
            </div>
            <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Work Completed</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item.completed}</p>
            </div>
            <div className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-green-500/15 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Result</p>
              <p className="mt-3 text-sm leading-6 text-white">{item.result}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-700/60 pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Request Similar Campaign
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
