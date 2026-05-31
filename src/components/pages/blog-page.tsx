import Link from "next/link";
import Image from "next/image";
import { Clock3 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/site-data";

const blogVisuals: Record<string, string> = {
  "google-business-profile-wins":
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
  "local-citation-quality-vs-quantity":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "review-management-playbook":
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
};

export function BlogPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Actionable local SEO insights for teams that execute"
        description="Our blog shares practical tactics, strategic frameworks, and campaign lessons to help local businesses improve visibility and lead quality."
      />
      <section className="section-shell pb-16">
        <h2 className="sr-only">Latest local SEO articles</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <article className="glass-card h-full rounded-2xl p-5">
                <div className="mb-4 overflow-hidden rounded-2xl border border-slate-700/70">
                  <Image
                    src={blogVisuals[post.slug] ?? blogVisuals["google-business-profile-wins"]}
                    alt={post.title}
                    width={900}
                    height={520}
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="mb-4 rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-blue-600/25 via-cyan-500/15 to-green-500/20 p-5">
                  <span className="rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-300">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>
                    {post.author} • {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 size={14} />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/${post.slug}`}
                  className="mt-4 inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-slate-700"
                >
                  Read Article
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
