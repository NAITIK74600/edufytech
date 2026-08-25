import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { FOUNDERS } from "@/lib/config";
import { IconBrain, IconRocket, IconShield, IconUsers } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Edufyi Tech Solutions is a technology solutions and EdTech company on a mission to make world-class tech education accessible and outcome-driven.",
};

const values = [
  { Icon: IconRocket, title: "Outcomes over hype", desc: "We measure success by placements and real skills, not vanity metrics." },
  { Icon: IconBrain, title: "Learn by building", desc: "Every program is anchored in real projects that ship to your portfolio." },
  { Icon: IconUsers, title: "Mentorship first", desc: "You learn from practitioners who've done the job you want." },
  { Icon: IconShield, title: "Integrity", desc: "Transparent pricing, honest guidance, and support that lasts beyond the course." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div aria-hidden className="absolute inset-0 grid-lines" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
            About Edufyi Tech Solutions
          </span>
          <h1 className="mt-6 text-4xl font-bold sm:text-6xl">
            Technology education that{" "}
            <span className="brand-gradient-text">actually lands jobs</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-muted-foreground)]">
            We&apos;re a technology solutions and EdTech company on a mission to make
            world-class, outcome-driven tech education accessible to every learner
            in India and beyond.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 md:grid-cols-4">
          <StatCounter value={12000} suffix="+" label="Learners trained" />
          <StatCounter value={94} suffix="%" label="Placement rate" />
          <StatCounter value={120} suffix="+" label="Hiring partners" />
          <StatCounter value={50} suffix="+" label="College programs" />
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <SectionHeading center={false} eyebrow="Our story" title={<>Who we are</>} />
        <div className="mt-6 space-y-4 text-[var(--color-muted-foreground)]">
          <p>
            At Edufyi Tech Solutions, we are dedicated to transforming the
            educational journey for college students by offering cutting-edge
            virtual internships and comprehensive training programs.
          </p>
          <p>
            Our approach combines industry mentorship with practical experience,
            providing each student with <strong className="text-[var(--color-foreground)]">six real-time and capstone projects</strong> per
            program — equipping students with the skills and experience needed to
            secure their dream jobs upon graduation.
          </p>
          <p>
            We believe in more than just financial success; our mission is to
            deliver quality education that empowers students to excel in their
            careers, bridging the gap between academic learning and real-world
            application.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Leadership" title={<>Meet the founders</>} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDERS.map((f, i) => (
            <Reveal
              key={f.name}
              delay={i * 80}
              className="flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center card-glow"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full brand-gradient text-xl font-bold text-white">
                {f.name.charAt(0)}
              </span>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-foreground)]">{f.name}</h3>
              <p className="mt-1 text-xs text-[var(--color-accent)]">{f.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Our values" title={<>What we stand for</>} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 80}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 card-glow"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white">
                <v.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-foreground)]">{v.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-[var(--color-border)] brand-gradient animate-gradient px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join thousands building their future
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/programs" variant="invert" size="lg">
              Explore Programs
            </Button>
            <Button href="/partners" variant="outline-invert" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
