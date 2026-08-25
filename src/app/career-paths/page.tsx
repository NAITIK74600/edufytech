import type { Metadata } from "next";
import { getCareerPaths } from "@/lib/db";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { domainIcon, IconSparkle, IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Career Paths",
  description:
    "Explore the roles, industries, and career progression each Edufyi Tech Solutions domain unlocks.",
};

export default async function CareerPathsPage() {
  const paths = await getCareerPaths();
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Career paths"
        title={<>Where each domain can take you</>}
        subtitle="Typical roles, hiring industries, and how your career grows over time."
      />

      <div className="mt-14 space-y-10">
        {paths.map((cp, idx) => {
          const Icon = domainIcon[cp.domain] ?? IconSparkle;
          return (
            <Reveal
              key={cp.domain}
              delay={idx * 60}
              className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-foreground)]">{cp.domain}</h2>
                  <p className="text-sm text-[var(--color-muted-foreground)]">{cp.tagline}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Typical roles
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {cp.roles.map((r) => (
                      <div
                        key={r.title}
                        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background-2)] p-4"
                      >
                        <div className="font-semibold text-[var(--color-foreground)]">{r.title}</div>
                        <div className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                          {r.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Hiring industries
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cp.industries.map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full bg-[var(--color-muted)] px-3 py-1 text-sm text-[var(--color-muted-foreground)]"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Career progression
                  </h3>
                  <ol className="mt-4 space-y-3">
                    {cp.progression.map((step, i) => (
                      <li key={step.stage} className="flex items-center gap-4">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-sm font-bold text-[var(--color-primary)]">
                          {i + 1}
                        </span>
                        <div className="flex flex-1 items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-background-2)] px-4 py-2.5">
                          <span className="text-sm font-medium text-[var(--color-foreground)]">{step.stage}</span>
                          <span className="text-xs text-[var(--color-muted-foreground)]">
                            {step.years}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <Button href="/programs" size="lg">
          Find your program <IconArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
