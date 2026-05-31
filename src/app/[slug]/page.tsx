import type { Metadata } from "next";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { notFound } from "next/navigation";
import { AboutPageContent } from "@/components/pages/about-page";
import { BlogPageContent } from "@/components/pages/blog-page";
import { ContactPageContent } from "@/components/pages/contact-page";
import { PackagesPageContent } from "@/components/pages/packages-page";
import { PortfolioPageContent } from "@/components/pages/portfolio-page";
import { PrivacyPageContent } from "@/components/pages/privacy-page";
import { ServicesPageContent } from "@/components/pages/services-page";
import { JsonLd } from "@/components/json-ld";
import { PortfolioReportDetailView } from "@/components/portfolio-report-detail";
import { ServicePageTemplate } from "@/components/service-page";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/structured-data";
import { getServiceCategoryForSlug } from "@/lib/service-catalog";
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
    return await buildMetadata({
      title: "Page Not Found | Local SEO Wiser",
      description: "The requested page could not be found.",
      path: "/",
    });
  }

  if (content.type === "static") {
    const page = staticPages[content.slug];
    return await buildMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/${content.slug}`,
      keywords: page.keywords,
    });
  }

  if (content.type === "portfolio-report") {
    return await buildMetadata({
      title: `${content.report.name} | Local SEO Wiser`,
      description: `${content.report.metric}. ${content.report.insight}`,
      path: `/${content.report.slug}`,
      keywords: [
        content.report.client.toLowerCase(),
        "google search console report",
        content.report.category.toLowerCase(),
      ],
    });
  }

  if (content.type === "blog") {
    return await buildMetadata({
      title: `${content.article.title} | Local SEO Wiser`,
      description: content.article.description,
      path: `/${content.article.slug}`,
      keywords: [content.article.category.toLowerCase(), "local seo insights"],
    });
  }

  return await buildMetadata({
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
    case "privacy":
      return <PrivacyPageContent />;
    default:
      return notFound();
  }
}

const staticPageLabels: Record<keyof typeof staticPages, string> = {
  about: "About",
  contact: "Contact",
  services: "Services",
  portfolio: "Portfolio",
  blog: "Blog",
  packages: "Packages",
  privacy: "Privacy Policy",
};

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

  const siteUrl = await getSiteUrl();

  if (content.type === "static") {
    const label = staticPageLabels[content.slug];
    return (
      <>
        <JsonLd
          data={buildBreadcrumbSchema(siteUrl, [
            { name: "Home", path: "/" },
            { name: label, path: `/${content.slug}` },
          ])}
        />
        {renderStaticPage(content.slug)}
      </>
    );
  }

  if (content.type === "service") {
    const { config } = content;
    const serviceContext = getServiceCategoryForSlug(config.slug);

    return (
      <>
        <JsonLd
          data={[
            buildBreadcrumbSchema(siteUrl, [
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: serviceContext?.category.title ?? config.title, path: "/services" },
              { name: config.title, path: `/${config.slug}` },
            ]),
            buildServiceSchema(siteUrl, config),
            buildFaqSchema(config.faq),
          ]}
        />
        <ServicePageTemplate
          slug={config.slug}
          categoryLabel={serviceContext?.category.title ?? "Services"}
          icon={serviceContext?.item.icon ?? MapPinned}
          title={config.title}
          intro={config.intro}
          painPoint={config.painPoint}
          idealFor={config.idealFor}
          stepTitles={config.stepTitles}
          benefits={config.benefits}
          included={config.included}
          steps={config.steps}
          whyChoose={config.whyChoose}
          faq={config.faq}
        />
      </>
    );
  }

  if (content.type === "blog") {
    const { article } = content;
    return (
      <>
        <JsonLd
          data={[
            buildBreadcrumbSchema(siteUrl, [
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: article.title, path: `/${article.slug}` },
            ]),
            buildArticleSchema(siteUrl, article),
          ]}
        />
        <main className="section-shell py-16">
          <article className="glass-card rounded-3xl p-5 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{article.category}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-5xl">{article.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">{article.description}</p>
            <p className="mt-3 text-sm text-slate-400">
              By {article.author} · {article.datePublished}
            </p>
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
      </>
    );
  }

  if (content.type === "portfolio-report") {
    const { report } = content;
    return (
      <>
        <JsonLd
          data={buildBreadcrumbSchema(siteUrl, [
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: report.name, path: `/${report.slug}` },
          ])}
        />
        <PortfolioReportDetailView report={report} />
      </>
    );
  }

  return notFound();
}
