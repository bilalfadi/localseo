export function AuditForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="glass-card grid gap-4 rounded-2xl p-6">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-slate-200">
          Full Name
          <input
            required
            type="text"
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Business Email
          <input
            required
            type="email"
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2"
            placeholder="name@business.com"
          />
        </label>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-slate-200">
          Website URL
          <input
            type="url"
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2"
            placeholder="https://"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Primary Service Area
          <input
            type="text"
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2"
            placeholder="City / Region"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-200">
        What is your main local SEO challenge?
        <textarea
          rows={4}
          className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2"
          placeholder="Share your growth goals and current blockers."
        />
      </label>
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
      >
        Request Strategy Call
      </button>
    </form>
  );
}
