import { PageHero } from "@/components/page-hero";

const sections = [
  {
    title: "Information we collect",
    body: "When you submit a contact or audit form, we collect the details you provide such as your name, email, phone number, website URL, and message content so we can respond to your inquiry.",
  },
  {
    title: "How we use information",
    body: "We use submitted information to review your local SEO needs, prepare recommendations, and communicate about services you request. We do not sell personal information to third parties.",
  },
  {
    title: "Cookies and analytics",
    body: "We may use analytics tools such as Google Analytics to understand website traffic and improve user experience. You can control cookies through your browser settings.",
  },
  {
    title: "Data retention",
    body: "We retain contact submissions only as long as needed to provide services, maintain business records, or comply with legal obligations.",
  },
  {
    title: "Your rights",
    body: "You may request access, correction, or deletion of your personal information by emailing hello@localseowiser.com.",
  },
  {
    title: "Contact",
    body: "For privacy-related questions, contact Local SEO Wiser at hello@localseowiser.com or through our contact page.",
  },
];

export function PrivacyPageContent() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Local SEO Wiser handles your information"
        description="This policy explains what data we collect through our website, how we use it, and the choices available to you."
      />
      <section className="section-shell max-w-4xl space-y-8 pb-16">
        <p className="text-sm text-slate-400">Last updated: May 31, 2026</p>
        {sections.map((section) => (
          <article key={section.title} className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
