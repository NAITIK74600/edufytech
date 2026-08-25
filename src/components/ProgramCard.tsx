import Link from "next/link";
import type { Program } from "@/lib/types";
import { formatINR } from "@/lib/config";
import {
  IconStar,
  IconClock,
  IconArrowRight,
  domainIcon,
  IconSparkle,
} from "./icons";

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const Icon = domainIcon[program.category] ?? IconSparkle;
  return (
    <Link
      href={`/programs/${program.slug}`}
      data-cursor="View"
      className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-1)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40 hover:shadow-[var(--shadow-4)]"
    >
      {/* Oversized ghost index number — editorial signature, not a stock icon badge */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-[6rem] font-bold leading-none text-[var(--color-foreground)]/[0.045] transition-colors duration-300 group-hover:text-[var(--color-primary)]/10"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[var(--color-accent)]">
          <Icon className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em]">
            {program.category}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-[var(--color-foreground)]">{program.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {program.short_desc}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[var(--color-muted-foreground)]">
          <span className="inline-flex items-center gap-1.5">
            <IconClock className="h-3.5 w-3.5" /> {program.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[var(--color-accent)]">
            <IconStar className="h-3.5 w-3.5" /> {Number(program.rating).toFixed(1)}
          </span>
        </div>
      </div>

      {/* Ticket-stub divider: dashed tear line with punched notches on both edges */}
      <div className="relative mx-6">
        <span
          aria-hidden
          className="absolute -left-9 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--color-background)]"
        />
        <span
          aria-hidden
          className="absolute -right-9 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--color-background)]"
        />
        <div className="border-t border-dashed border-[var(--color-border)]" />
      </div>

      <div className="relative flex items-center justify-between px-6 py-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted-foreground)]">
            Program fee
          </p>
          <p className="text-lg font-bold text-[var(--color-foreground)]">{formatINR(program.price_inr)}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]/10 px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white">
          Explore <IconArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
