import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-300">
        The page you are looking for does not exist or may have moved. Try the links below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300"
        >
          Contact Us
        </Link>
        <Link
          href="/portfolio"
          className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-300"
        >
          View Portfolio
        </Link>
      </div>
    </main>
  );
}
