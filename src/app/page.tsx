import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeContent } from "@/components/home-content";
import { faqs } from "@/lib/site-data";
import { buildFaqSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Local SEO Agency Pittsburgh | Local SEO Wiser",
    description:
      "Pittsburgh's local SEO agency that wins the map pack. Real results: 1.66K clicks, 858K impressions. Get your free Pittsburgh SEO proposal today.",
    path: "/",
    keywords: [
      "local SEO agency Pittsburgh",
      "Pittsburgh local SEO",
      "google maps SEO Pittsburgh",
      "google business profile optimization",
    ],
  });
}

export default function Home() {
  const faqSchema = buildFaqSchema(faqs);

  return (
    <>
      <HomeContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
