import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-700/40 bg-slate-950/80">
      <div className="section-shell py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Logo compact imgClassName="h-10 sm:h-11 md:h-12" />
            <p className="max-w-sm text-sm text-slate-300">
              Local SEO Wiser helps service-area and storefront brands turn nearby intent into measurable pipeline through
              practical local SEO execution.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-4">
            <h3 className="mb-4 text-sm font-semibold text-cyan-200">Contact</h3>
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
                Mon-Fri, 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/40 py-3 text-center text-sm text-slate-400">
        © 2026 Local SEO Wiser. All Rights Reserved.
      </div>
    </footer>
  );
}
