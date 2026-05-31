import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { AuditForm } from "@/components/audit-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Local SEO Wiser | Book a Strategy Call",
  description:
    "Contact Local SEO Wiser for local SEO consulting, campaign support, and a strategy call tailored to your market.",
  path: "/contact-us",
  keywords: ["contact local seo agency", "local seo strategy call", "local seo consultation"],
});

export default function ContactUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Start with a practical local SEO conversation"
        description="Share your goals and current challenges. We will suggest a focused plan tailored to your location strategy and growth stage."
      />
      <section id="strategy-call" className="section-shell grid gap-8 pb-16 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="glass-card relative overflow-hidden rounded-3xl p-6">
          <div className="grid-overlay absolute inset-0 opacity-20" />
          <div className="relative space-y-5">
            <h2 className="text-2xl font-semibold text-white">Contact Information</h2>
            <InfoRow icon={<Mail size={16} />} label="Email" value="hello@localseowiser.com" />
            <InfoRow icon={<Phone size={16} />} label="Phone" value="+1 (347) 555-0199" />
            <InfoRow icon={<Clock3 size={16} />} label="Business Hours" value="Mon-Fri, 9:00 AM - 6:00 PM" />
            <InfoRow icon={<MapPin size={16} />} label="Service Coverage" value="US, UK, CA, AU, NZ" />
            <div>
              <h3 className="mb-2 text-sm font-semibold text-cyan-200">Social</h3>
              <div className="flex gap-3">
                {["LinkedIn", "Instagram", "YouTube"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="rounded-xl border border-slate-700/70 px-3 py-2 text-sm text-slate-200 hover:border-cyan-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">Book Your Local SEO Strategy Call</h2>
          <AuditForm />
        </div>
      </section>
    </main>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/75 p-4">
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
        {icon}
        {label}
      </p>
      <p className="mt-2 text-sm text-slate-200">{value}</p>
    </div>
  );
}
