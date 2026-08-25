import type { Metadata } from "next";
import Link from "next/link";
import { inputClass } from "@/components/form";
import { IconSparkle } from "@/components/icons";

export const metadata: Metadata = {
  title: "Login",
  description: "Log in to your Edufyi Tech Solutions dashboard.",
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-lines" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--color-primary)]/15 blur-[120px]"
      />
      <div className="relative mx-auto w-full max-w-md px-6 py-16">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-8">
          <div className="flex justify-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
              <IconSparkle className="h-6 w-6" />
            </span>
          </div>
          <h1 className="mt-5 text-center text-2xl font-bold">Welcome back</h1>
          <p className="mt-2 text-center text-sm text-[var(--color-muted-foreground)]">
            Log in to access your program dashboard.
          </p>

          {/* Auth is Phase 2 via a hosted provider (Supabase/Clerk). This is a UI shell. */}
          <form className="mt-8 space-y-4" aria-label="Login form (demo shell)">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]/90">
                Email
              </label>
              <input id="email" type="email" className={inputClass} placeholder="you@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-[var(--color-foreground)]/90">
                Password
              </label>
              <input id="password" type="password" className={inputClass} placeholder="••••••••" />
            </div>
            <button
              type="button"
              disabled
              title="Authentication launches in Phase 2 via a hosted provider"
              className="w-full cursor-not-allowed rounded-xl bg-[var(--color-primary)] px-6 py-3.5 font-semibold text-white opacity-70"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 rounded-xl bg-[var(--color-muted)] px-4 py-3 text-center text-xs text-[var(--color-muted-foreground)]">
            Secure login launches in Phase 2 via a hosted provider (Supabase/Clerk).
          </p>

          <p className="mt-6 text-center text-sm text-[var(--color-muted-foreground)]">
            New here?{" "}
            <Link href="/register" className="text-[var(--color-primary)] hover:underline">
              Register your interest
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
