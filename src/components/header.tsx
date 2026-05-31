"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-data";
import { Logo } from "@/components/logo";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-b border-cyan-200/15 bg-slate-950/85 shadow-[0_10px_40px_rgba(2,6,23,0.45)]"
          : "border-b border-slate-700/30 bg-slate-950/60",
      )}
    >
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="section-shell flex h-[88px] items-center justify-between gap-4 py-2"
      >
        <Logo />
        <nav className="hidden items-center gap-2 rounded-full border border-slate-700/55 bg-slate-900/65 p-1.5 lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-all",
                  active
                    ? "bg-gradient-to-r from-violet-500/30 via-blue-500/25 to-cyan-400/25 text-cyan-100"
                    : "text-slate-200 hover:bg-slate-800/75 hover:text-cyan-200",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(37,99,235,0.45)] transition-transform hover:-translate-y-0.5"
          >
            Book Strategy Call
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-2 text-slate-100 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="border-t border-slate-700/40 bg-slate-950/95 px-4 py-5 lg:hidden"
          >
            <nav className="mx-auto flex w-full max-w-5xl flex-col gap-4">
              <Logo compact href="/" />
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-xl px-3 py-2 text-sm font-medium",
                    pathname === item.href
                      ? "bg-cyan-500/15 text-cyan-200"
                      : "text-slate-100 hover:bg-slate-800",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book Strategy Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
