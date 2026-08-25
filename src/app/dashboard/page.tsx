import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { IconRocket, IconBrain, IconCheck, IconSparkle } from "@/components/icons";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Edufyi Tech Solutions learning dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, <span className="brand-gradient-text">Learner</span>
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
            Here&apos;s your program at a glance.
          </p>
        </div>
        <Button href="/programs" variant="secondary">
          Browse programs
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Enrolled program */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white">
              <IconBrain className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-semibold text-[var(--color-foreground)]">AI & Machine Learning</h2>
              <p className="text-xs text-[var(--color-muted-foreground)]">24 weeks · Cohort 2026</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--color-muted-foreground)]">Progress</span>
              <span className="font-medium text-[var(--color-foreground)]">Not started</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--color-muted)]">
              <div className="h-full w-[4%] brand-gradient" />
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {["Complete onboarding", "Join your cohort community", "Set your learning goals", "Meet your mentor"].map(
              (task) => (
                <div
                  key={task}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-background-2)] p-3 text-sm"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[var(--color-foreground)]/90">{task}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Profile */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
          <h2 className="font-semibold text-[var(--color-foreground)]">Your profile</h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full brand-gradient text-lg font-bold text-white">
              L
            </span>
            <div>
              <div className="font-medium text-[var(--color-foreground)]">Learner</div>
              <div className="text-xs text-[var(--color-muted-foreground)]">learner@email.com</div>
            </div>
          </div>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-[var(--color-muted-foreground)]">Status</dt>
              <dd className="text-[var(--color-foreground)]">Registered</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--color-muted-foreground)]">Cohort</dt>
              <dd className="text-[var(--color-foreground)]">2026</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Reserved LMS slot — do not build LMS logic yet (per plan) */}
      <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-background-2)]/50 p-8 text-center">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-accent)]">
          <IconRocket className="h-5 w-5" />
        </span>
        <h2 className="mt-4 flex items-center justify-center gap-2 text-lg font-semibold text-[var(--color-foreground)]">
          <IconSparkle className="h-4 w-4 text-[var(--color-accent)]" /> Learning Management System
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-[var(--color-muted-foreground)]">
          Your lessons, videos, and assignments will appear here. The LMS embed
          slot is reserved and integrates in a later phase.
        </p>
      </div>
    </div>
  );
}
