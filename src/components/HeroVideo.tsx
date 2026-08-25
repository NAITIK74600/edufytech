"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { withBase } from "@/lib/config";

/**
 * Full-bleed hero background video. Autoplays muted + looped for an ambient
 * cinematic backdrop, paused automatically when the hero scrolls out of view
 * (and never autoplayed under `prefers-reduced-motion` — the poster frame
 * shows instead). Purely decorative, so it's aria-hidden and sits behind a
 * dark scrim + brand tint that keep the foreground text legible.
 */
export function HeroVideo() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || prefersReducedMotion) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        width={848}
        height={478}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster={withBase("/video/edufy-showcase-poster.jpg")}
      >
        <source src={withBase("/video/edufy-showcase.mp4")} type="video/mp4" />
      </video>

      {/* Legibility scrim + brand tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,20,28,0.78) 0%, rgba(6,20,28,0.62) 45%, rgba(6,20,28,0.80) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 38%, rgba(0,107,191,0.28), transparent 70%)",
        }}
      />
    </div>
  );
}
