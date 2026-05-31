import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HomeContent } from "@/components/home-content";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Local SEO Wiser | Rank Higher on Google Maps",
    description:
      "Turn local searches into customers with Local SEO Wiser. Discover premium local SEO services, reporting, and growth strategies for ambitious local brands.",
    path: "/",
    keywords: ["local seo", "google maps ranking", "local business marketing"],
  });
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does local SEO usually take to show progress?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most campaigns begin showing directional improvements within 8 to 12 weeks, while stronger competitive gains can take 4 to 6 months depending on your market and baseline.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee #1 rankings on Google Maps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Ethical local SEO agencies should not promise guaranteed #1 rankings. We focus on proven optimization, measurable growth, and sustainable performance.",
        },
      },
    ],
  };

  return (
    <>
      <HomeContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
