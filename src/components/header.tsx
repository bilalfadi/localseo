"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-data";
import { allServiceItems } from "@/lib/service-catalog";
import { Logo } from "@/components/logo";
import { MobileServicesMenu, ServicesMegaMenu } from "@/components/services-mega-menu";
import clsx from "clsx";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "relative whitespace-nowrap py-2 text-[13px] font-medium tracking-wide transition-colors xl:text-sm",
        active ? "text-cyan-300" : "text-slate-300 hover:text-white",
      )}
    >
      {label}
      <span
        className={clsx(
          "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300",
          active ? "w-full opacity-100" : "w-0 opacity-0",
        )}
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const servicePaths = new Set(allServiceItems.map((item) => `/${item.slug}`));
  const servicesActive = pathname === "/services" || servicePaths.has(pathname);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 overflow-visible transition-all duration-300",
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/95 shadow-[0_4px_24px_rgba(2,6,23,0.45)]"
          : "border-b border-transparent bg-slate-950/80",
      )}
    >
      <div className="section-shell flex h-[76px] items-center justify-between gap-6 overflow-visible">
        <Logo />

        <nav className="hidden flex-1 items-center justify-center gap-6 overflow-visible lg:flex xl:gap-8">
          {navLinks.map((item) => {
            if (item.href === "/services") {
              return (
                <ServicesMegaMenu
                  key={item.href}
                  open={servicesOpen}
                  onOpen={() => setServicesOpen(true)}
                  onClose={() => setServicesOpen(false)}
                  active={servicesActive}
                />
              );
            }

            return (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                active={pathname === item.href}
              />
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition hover:brightness-110 lg:inline-flex"
          >
            <Phone size={15} />
            Contact Us
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:border-slate-500 hover:text-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/80 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[76px] z-50 max-h-[calc(100vh-76px)] overflow-y-auto border-b border-slate-800 bg-slate-950 lg:hidden"
            >
              <nav className="section-shell flex flex-col gap-1 py-5">
                {navLinks.map((item) => {
                  if (item.href === "/services") {
                    return <MobileServicesMenu key={item.href} onNavigate={() => setOpen(false)} />;
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "rounded-lg px-3 py-3 text-base font-medium",
                        pathname === item.href
                          ? "bg-slate-900 text-cyan-300"
                          : "text-slate-200 hover:bg-slate-900/70",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white"
                >
                  <Phone size={16} />
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
