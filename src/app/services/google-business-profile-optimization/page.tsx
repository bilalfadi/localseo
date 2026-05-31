import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Google Business Profile Optimization | Local SEO Wiser",
  description:
    "Improve map pack visibility and local conversions through strategic Google Business Profile optimization by Local SEO Wiser.",
  path: "/services/google-business-profile-optimization",
  keywords: ["google business profile optimization", "google maps seo", "gbp agency"],
});

export default function GoogleBusinessProfilePage() {
  return (
    <ServicePageTemplate
      title="Google Business Profile Optimization"
      intro="Your profile is often the first impression in local search. We optimize every meaningful detail so your listing attracts qualified clicks, calls, and visits."
      benefits={[
        "Stronger local relevance through category, service, and area alignment",
        "Improved click-through with better descriptions, media, and offers",
        "Higher trust through profile completeness and active management",
        "Clear insight into how profile interactions impact conversions",
      ]}
      included={[
        "Category and service attribute optimization",
        "Conversion-focused business description rewrite",
        "Photo and post strategy with publishing cadence",
        "Q&A and messaging optimization",
        "Performance tracking for calls, clicks, and direction requests",
      ]}
      steps={[
        "Baseline profile audit and local competitor benchmark",
        "Entity and category refinement based on service focus",
        "Content updates for profile sections and posting schedule",
        "Review and Q&A response frameworks implementation",
      ]}
      whyChoose={[
        "Experience across competitive local verticals",
        "Custom profile strategy for your market and service model",
        "Clear communication and monthly performance recaps",
        "Optimization tied to lead quality, not vanity volume",
      ]}
      faq={[
        {
          question: "How often should my profile be updated?",
          answer:
            "Most businesses benefit from weekly updates, including posts, fresh photos, and response management to keep profiles active and competitive.",
        },
        {
          question: "Can profile optimization help without a website redesign?",
          answer:
            "Yes. Profile improvements can increase map visibility and conversion actions independently, though website alignment strengthens results further.",
        },
      ]}
    />
  );
}
