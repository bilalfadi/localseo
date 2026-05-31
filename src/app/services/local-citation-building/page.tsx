import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Local Citation Building Services | Local SEO Wiser",
  description:
    "Strengthen local trust signals with consistent, accurate, and strategically selected citation placements managed by Local SEO Wiser.",
  path: "/services/local-citation-building",
  keywords: ["local citation building", "nap consistency", "directory listings seo"],
});

export default function CitationBuildingPage() {
  return (
    <ServicePageTemplate
      title="Local Citation Building"
      intro="Citation quality and consistency are foundational for local trust signals. We clean existing listings and expand your presence across high-value directories."
      benefits={[
        "Improved listing consistency across platforms and data aggregators",
        "Reduced confusion for search engines and potential customers",
        "Greater local authority through trusted source coverage",
        "Better support for map and organic local rankings",
      ]}
      included={[
        "NAP consistency audit and correction map",
        "Citation cleanup across existing directory profiles",
        "New listing placements on trusted and relevant sources",
        "Duplicate suppression and verification workflow",
        "Citation health reporting by location",
      ]}
      steps={[
        "Audit all active listings and identify high-risk inconsistencies",
        "Correct critical NAP and business data discrepancies",
        "Expand into relevant, quality directories by vertical and region",
        "Monitor and maintain listing quality over time",
      ]}
      whyChoose={[
        "Structured QA process that minimizes citation errors",
        "Strategic focus on quality sources over low-value volume",
        "Scalable citation operations for multi-location brands",
        "Integrated reporting with broader local SEO campaign metrics",
      ]}
      faq={[
        {
          question: "How many citations does my business need?",
          answer:
            "There is no universal number. We prioritize authoritative, relevant directories and maintain consistency rather than chasing bulk listing volume.",
        },
        {
          question: "Do citations still matter in 2026?",
          answer:
            "Yes. While not the only ranking factor, citation accuracy still supports local trust and discoverability, especially in competitive markets.",
        },
      ]}
    />
  );
}
