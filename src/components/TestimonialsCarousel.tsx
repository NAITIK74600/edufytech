"use client";

import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/types";
import { IconStar, IconArrowRight } from "./icons";

/**
 * A horizontally-scrollable, snap-aligned testimonial track. Built on native
 * scroll-snap (not a JS drag library) so it stays fully keyboard, touch, and
 * screen-reader accessible, while still feeling like a tactile "drag to
 * browse" carousel via the cursor hint and momentum scroll.
 */
export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cardWidth = track.firstElementChild?.clientWidth ?? 1;
      const gap = 24;
      const idx = Math.round(track.scrollLeft / (cardWidth + gap));
      setActive(Math.min(items.length - 1, Math.max(0, idx)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [items.length]);

  function scrollToIndex(idx: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement | undefined;
    if (!card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: card.offsetLeft - 4, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        data-cursor="Drag"
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        role="region"
        aria-label="Testimonials, scroll horizontally to browse"
        tabIndex={0}
      >
        {items.map((t) => (
          <article
            key={t.name}
            className="flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-7 shadow-[var(--shadow-1)] sm:w-[60%] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="flex gap-0.5 text-[var(--color-accent)]">
              {Array.from({ length: t.rating }).map((_, s) => (
                <IconStar key={s} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-foreground)]/90">
              “{t.quote}”
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-sm font-bold text-white">
                {t.name.charAt(0)}
              </span>
              <div>
                <div className="text-sm font-semibold text-[var(--color-foreground)]">{t.name}</div>
                <div className="text-xs text-[var(--color-muted-foreground)]">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={active === i}
              className="cursor-pointer rounded-full transition-all duration-300"
              style={{
                width: active === i ? 24 : 6,
                height: 6,
                background: active === i ? "var(--color-primary)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            disabled={active === 0}
            aria-label="Previous testimonial"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <IconArrowRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
            disabled={active === items.length - 1}
            aria-label="Next testimonial"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition-colors hover:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
