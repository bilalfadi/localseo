import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { businessLocation } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-700/40 bg-slate-950/80">
      <div className="section-shell py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Logo compact imgClassName="h-7 sm:h-8" />
            <p className="max-w-sm text-sm text-slate-300">
              Based in Pittsburgh, Pennsylvania, Local SEO Wiser helps service-area and storefront businesses across
              Pittsburgh turn nearby search intent into measurable pipeline through practical, transparent local SEO
              execution.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <h2 className="mb-4 text-sm font-semibold text-cyan-200">Contact</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-cyan-300" />
                hello@localseowiser.com
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-cyan-300" />
                +1 (347) 555-0199
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-cyan-300" />
                {businessLocation.label}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/40 py-3 text-center text-sm text-slate-400">
        <p>© 2026 Local SEO Wiser. All Rights Reserved.</p>
        <p className="mt-2">
          <Link href="/privacy" className="text-cyan-200 hover:text-cyan-100">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
