import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";

const articles: Record<
  string,
  {
    title: string;
    description: string;
    body: string[];
    category: string;
  }
> = {
  "google-business-profile-wins": {
    title: "9 Google Business Profile Wins That Improve Local Leads",
    description:
      "Practical Google Business Profile improvements that strengthen map visibility and conversion actions for local businesses.",
    category: "Google Business Profile",
    body: [
      "Most businesses underuse key profile fields. Prioritize category precision, service descriptions, and visual assets that mirror real customer intent.",
      "A high-performing profile is active. Publish posts consistently, answer common questions, and refresh photos to signal operational relevance.",
      "Treat profile optimization as part of your larger funnel. Align services, call-to-actions, and linked landing pages for better conversion quality.",
    ],
  },
  "local-citation-quality-vs-quantity": {
    title: "Local Citations: Why Quality Beats Quantity in 2026",
    description:
      "Learn why citation quality and data consistency outperform bulk directory submissions for local SEO campaigns.",
    category: "Citation Building",
    body: [
      "Citation strategy should prioritize trust and relevance. Focus on directories recognized by your market rather than low-authority listing networks.",
      "NAP consistency matters across all sources. Even minor variations can create mixed trust signals and reduce ranking confidence.",
      "Build a maintenance rhythm. Citation hygiene is not a one-time task, especially for growing brands and multi-location operations.",
    ],
  },
  "review-management-playbook": {
    title: "The Review Management Playbook for High-Intent Local Buyers",
    description:
      "A complete review management framework for local businesses that want stronger trust, sentiment, and conversion support.",
    category: "Review Management",
    body: [
      "Review management starts with process design. Ask at the right touchpoint, simplify the request, and train teams on consistency.",
      "Responses should be timely and human. Use templates as scaffolding, then personalize to reinforce authenticity and customer care.",
      "Track sentiment themes monthly. Review data reveals friction points and service strengths that can shape both operations and marketing.",
    ],
  },
};

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = articles[params.slug];
  if (!article) {
    return buildMetadata({
      title: "Blog | Local SEO Wiser",
      description: "Local SEO insights by Local SEO Wiser.",
      path: "/blog",
    });
  }
  return buildMetadata({
    title: `${article.title} | Local SEO Wiser`,
    description: article.description,
    path: `/blog/${params.slug}`,
    keywords: [article.category.toLowerCase(), "local seo insights"],
  });
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <main className="section-shell py-16">
      <article className="glass-card rounded-3xl p-7 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{article.category}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-5xl">{article.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">{article.description}</p>
        <div className="mt-7 space-y-5 text-base leading-8 text-slate-200">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/blog" className="mt-8 inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-200">
          Back to Blog
        </Link>
      </article>
    </main>
  );
}
