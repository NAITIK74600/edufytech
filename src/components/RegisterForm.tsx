"use client";

import { useEffect, useState } from "react";
import type { Program } from "@/lib/types";
import { inputClass, Field, FormStatus } from "./form";
import { formatINR } from "@/lib/config";

type State = "idle" | "loading" | "success" | "error";

export function RegisterForm({ programs }: { programs: Program[] }) {
  const [form, setForm] = useState({
    program_slug: programs[0]?.slug ?? "",
    full_name: "",
    email: "",
    phone: "",
    discount_code: "",
    message: "",
  });
  const [state, setState] = useState<State>("idle");
  const [msg, setMsg] = useState("");

  // Prefill the program from a ?program=<slug> query param (client-side, so the
  // page stays statically exportable). One-time read from the URL on mount.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("program");
    if (slug && programs.some((p) => p.slug === slug)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time init from URL
      setForm((f) => ({ ...f, program_slug: slug }));
    }
  }, [programs]);

  const selected = programs.find((p) => p.slug === form.program_slug);

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setMsg("");
    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setMsg(data.error ?? "Something went wrong.");
        return;
      }
      setState("success");
      setMsg(
        data.message ??
          "Thank you! Our team will reach out shortly to help you enroll."
      );
      setForm((f) => ({
        ...f,
        full_name: "",
        email: "",
        phone: "",
        discount_code: "",
        message: "",
      }));
    } catch {
      setState("error");
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Select program" htmlFor="program_slug" required>
        <select
          id="program_slug"
          value={form.program_slug}
          onChange={(e) => update("program_slug", e.target.value)}
          className={inputClass}
        >
          {programs.map((p) => (
            <option key={p.slug} value={p.slug} className="bg-[var(--color-background-2)]">
              {p.title} — {formatINR(p.price_inr)}
            </option>
          ))}
        </select>
      </Field>

      {selected && (
        <div className="rounded-xl bg-[var(--color-muted)] px-4 py-3 text-sm text-[var(--color-muted-foreground)]">
          <span className="font-semibold text-[var(--color-foreground)]">{selected.title}</span> · {selected.duration} ·{" "}
          {formatINR(selected.price_inr)}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="full_name" required>
          <input
            id="full_name"
            name="full_name"
            autoComplete="name"
            value={form.full_name}
            onChange={(e) => update("full_name", e.target.value)}
            required
            className={inputClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            spellCheck={false}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            className={inputClass}
            placeholder="+91 98765 43210"
          />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          required
          className={inputClass}
          placeholder="you@email.com"
        />
      </Field>

      <Field label="Discount code" htmlFor="discount_code" hint="Optional — applied at payment (Phase 2).">
        <input
          id="discount_code"
          value={form.discount_code}
          onChange={(e) => update("discount_code", e.target.value.toUpperCase())}
          className={inputClass}
          placeholder="EDUFY2026"
        />
      </Field>

      <Field label="Anything you'd like us to know?" htmlFor="message">
        <textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          className={inputClass}
          placeholder="Your goals, background, questions…"
        />
      </Field>

      <FormStatus state={state} message={msg} />

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full cursor-pointer rounded-xl brand-gradient px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-2)] transition-all hover:shadow-[var(--shadow-3)] hover:-translate-y-0.5 disabled:opacity-60"
      >
        {state === "loading" ? "Submitting…" : "Register Interest"}
      </button>

      <p className="text-center text-xs text-[var(--color-muted-foreground)]">
        No payment is taken now. This registers your interest — our team follows up
        to complete enrollment.
      </p>
    </form>
  );
}
