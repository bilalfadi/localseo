import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Review Management Services | Local SEO Wiser",
  description:
    "Improve ratings, review volume, and customer trust with structured review management services from Local SEO Wiser.",
  path: "/services/review-management",
  keywords: ["review management", "google reviews strategy", "local reputation management"],
});

export default function ReviewManagementPage() {
  return (
    <ServicePageTemplate
      title="Review Management"
      intro="Customer feedback influences both rankings and buying decisions. We create a repeatable review framework that improves trust and informs local growth decisions."
      benefits={[
        "Higher review velocity through practical request workflows",
        "Stronger trust signals for local prospects comparing options",
        "Faster response times with brand-aligned templates",
        "Actionable sentiment patterns for service improvement",
      ]}
      included={[
        "Review funnel design and request timing strategy",
        "Response templates for positive, neutral, and negative feedback",
        "Escalation playbook for sensitive reputation scenarios",
        "Monthly review sentiment insights and trend reporting",
        "Team enablement for review request best practices",
      ]}
      steps={[
        "Evaluate your current review profile and sentiment baseline",
        "Deploy review request workflow tailored to your customer journey",
        "Implement response standards for speed and consistency",
        "Measure sentiment and improve campaign tactics monthly",
      ]}
      whyChoose={[
        "Balanced approach that protects brand trust and customer experience",
        "No risky tactics that violate platform review policies",
        "Practical onboarding for front-desk and support teams",
        "Clear reporting that connects reputation trends to lead outcomes",
      ]}
      faq={[
        {
          question: "Can negative reviews be removed?",
          answer:
            "Only reviews that violate platform guidelines are eligible for removal requests. Our focus is to respond professionally and improve future customer sentiment.",
        },
        {
          question: "How quickly can review ratings improve?",
          answer:
            "When review request workflows are adopted consistently, many businesses see meaningful improvements in volume and average rating within 6 to 10 weeks.",
        },
      ]}
    />
  );
}
