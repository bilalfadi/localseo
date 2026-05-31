"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/strategy-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          website: formData.get("website"),
          serviceArea: formData.get("serviceArea"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        setErrorMessage(data.error ?? "Unable to send your request. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <CheckCircle2 className="mx-auto text-green-400" size={40} />
        <h3 className="mt-4 text-xl font-semibold text-white">Request received</h3>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          Thanks for reaching out. Our team will review your details and contact you within 1 business day to
          schedule your strategy call.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-5 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card grid gap-4 rounded-2xl p-6">
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-slate-200">
          Full Name
          <input
            required
            name="name"
            type="text"
            disabled={state === "loading"}
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2 disabled:opacity-60"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Business Email
          <input
            required
            name="email"
            type="email"
            disabled={state === "loading"}
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2 disabled:opacity-60"
            placeholder="name@business.com"
          />
        </label>
      </div>
      <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
        <label className="grid gap-2 text-sm text-slate-200">
          Phone Number
          <input
            name="phone"
            type="tel"
            disabled={state === "loading"}
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2 disabled:opacity-60"
            placeholder="+1 (555) 000-0000"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-200">
          Website URL
          <input
            name="website"
            type="url"
            disabled={state === "loading"}
            className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2 disabled:opacity-60"
            placeholder="https://"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-200">
        Primary Service Area
        <input
          name="serviceArea"
          type="text"
          disabled={state === "loading"}
          className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2 disabled:opacity-60"
          placeholder="City / Region"
        />
      </label>
      <label className="grid gap-2 text-sm text-slate-200">
        What is your main local SEO challenge?
        <textarea
          name="message"
          rows={4}
          disabled={state === "loading"}
          className="rounded-xl border border-slate-600/70 bg-slate-900/80 px-4 py-3 outline-none ring-cyan-300/50 transition focus:ring-2 disabled:opacity-60"
          placeholder="Share your growth goals and current blockers."
        />
      </label>

      {state === "error" && errorMessage ? (
        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Request Strategy Call"
        )}
      </button>
    </form>
  );
}
