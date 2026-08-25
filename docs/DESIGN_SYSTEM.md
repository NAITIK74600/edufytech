# Edufyi Tech Solutions — Design System v2

> A **Technology Solutions + EdTech** company (immersive programs in AI/ML, Data
> Science, Cybersecurity, HR). Direction: **Kinetic Editorial** — a light,
> precise, systems-driven visual language built on the client's real brand
> palette, expressed through motion rather than decoration. Not a SaaS
> template: no default glassmorphism, no default gradient-everything, no
> stock "hero → cards → testimonials → CTA" without a distinct point of view.

---

## 1. Design Principles

1. **Systems, not decoration.** The brand teaches AI, data, and security —
   domains built on structure. The UI should *look* like a well-engineered
   system: visible grids, numbered sequences, monospace data labels,
   deliberate alignment — not glass panels and ambient glow.
2. **Motion is the design, not an effect layer.** Every section is authored
   with its scroll behavior in mind from the start: what enters, what pins,
   what reveals, what the cursor does. Motion communicates hierarchy and
   progress, not decoration.
3. **Restraint on color, precision on layout.** One brand blue used with
   intent. Gradients and tinted glass are reserved for 1–2 signature moments
   per page — never a default card treatment.
4. **Trust through evidence, not badges.** Real numbers, named mentors, real
   companies, real projects — shown with specificity, not vague claims.
5. **Accessible by default.** 4.5:1+ contrast, visible focus rings, full
   keyboard support, and a static fallback for every animated sequence under
   `prefers-reduced-motion`.

**Explicitly avoid:** glassmorphism as a default card style, gradient
backgrounds as a default section treatment, generic centered hero →
3-up-icon-cards → testimonial-carousel → CTA-banner without a unique
structural idea, decorative blur/glow with no semantic purpose, emoji icons,
motion that can't be explained by "what is this telling the user right now."

---

## 2. Color Palette

Grounded in the client's real brand system (EduFyi Design System reference).

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#006BBF` | Primary brand blue — CTAs, links, active states |
| `--color-primary-dark` | `#004D6B` | Hover/pressed state for primary |
| `--color-primary-tint` | `#E8F4FB` | Subtle fills, selected chip backgrounds |
| `--color-secondary` | `#24C5DB` | Gradient partner to primary — used sparingly (1 signature moment/page) |
| `--color-accent` | `#04708F` | Eyebrow labels, small emphasis text |
| `--color-accent-2` | `#16A34A` | Success / confirmation states only |
| `--color-ink` | `#102A36` | Primary text, headings (not pure black) |
| `--color-background` | `#FFFFFF` | Page base |
| `--color-background-2` | `#F8FBFC` | Alternating section tint |
| `--color-muted` | `#EEF4F6` | Chip / badge fills |
| `--color-muted-foreground` | `#607D89` | Secondary text |
| `--color-border` | `#E6EEF2` | Dividers, card borders |
| `--color-destructive` | `#EF4444` | Errors |
| `--color-ring` | `#006BBF` | Focus rings |

**Rule:** the primary→secondary gradient is a *signature*, not a default —
use it for exactly one hero/CTA moment per page, never on every card or button.

---

## 3. Typography

- **Typeface:** Plus Jakarta Sans (300–800) for both headings and body — per
  client brand spec. No secondary display font; hierarchy comes from size,
  weight, and a monospace *data voice* (see below), not font-mixing.
- **Data voice:** `ui-monospace, "SF Mono", "JetBrains Mono", monospace` used
  exclusively for: section indices ("01 / 06"), stats, timestamps, code-like
  labels. This is the signature typographic device that separates this site
  from generic SaaS marketing sites.

| Element | Font | Size (desktop) | Weight | Tracking |
|---|---|---|---|---|
| Hero display | Jakarta | 4.5–6.5rem | 800 | -0.03em |
| Section H2 | Jakarta | 2.5–3rem | 700 | -0.02em |
| Card H3 | Jakarta | 1.125–1.25rem | 600 | -0.01em |
| Body | Jakarta | 1–1.125rem | 400 | normal |
| Data / index / eyebrow | Mono | 0.75–0.875rem | 500 | 0.08em (uppercase where label) |

---

## 4. Spacing, Grid & Layout

- **Base unit:** 8px grid (4/8/12/16/24/32/48/64/96/120px per brand spec).
- **Container:** `max-w-7xl` (1280px), gutters 24px mobile → 32px desktop.
- **Visible structure:** section wrappers may expose a subtle column grid
  (hairline verticals) as a *systems* motif — used deliberately, not as
  filler texture.
- **Radius:** 12px cards (`--radius`), pills `9999px` — matches brand spec
  button radius exactly.
- **Breakpoints:** 375 / 768 / 1024 / 1440.

---

## 5. Shadows

Per brand spec, rgba base `16,42,54`:

| Token | Value |
|---|---|
| `--shadow-1` | `0 2px 8px rgba(16,42,54,.06)` |
| `--shadow-2` | `0 4px 24px rgba(16,42,54,.08)` |
| `--shadow-3` | `0 16px 40px rgba(16,42,54,.10)` |
| `--shadow-4` | `0 24px 60px rgba(16,42,54,.14)` |

---

## 6. Motion Language

### Engine
- **Lenis** — physics-based smooth scroll, synced with native scroll events
  (validated: zero accessibility trade-off, no scrollbar hijack). Applied
  globally via `<SmoothScroll>` provider; disabled entirely under
  `prefers-reduced-motion`.
- **Motion (`motion/react`)** — scroll-linked transforms (`useScroll` +
  `useTransform`), layout animation, gestures.

### Easing vocabulary (used consistently everywhere, not per-component ad hoc)
| Name | Curve | Use |
|---|---|---|
| `easeOut` | `[0.16, 1, 0.3, 1]` | Entrances, reveals |
| `easeInOut` | `[0.65, 0, 0.35, 1]` | Pinned/scroll-driven transforms |
| `spring-snappy` | stiffness 300, damping 30 | Buttons, cursor, magnetic elements |
| `spring-soft` | stiffness 120, damping 20 | Cards, large panels |

### Interaction primitives (built once, reused everywhere)
- **Custom cursor** — a small dot + trailing ring that scales/labels on
  hover over interactive elements (e.g. grows and shows "View" over cards).
  Desktop-only; falls back to native cursor on touch/reduced-motion.
- **Magnetic buttons** — primary CTAs pull slightly toward the cursor within
  a radius, spring back on leave.
- **Text reveal** — headings split into lines/words that clip-reveal on
  scroll-into-view, staggered.
- **Scroll progress rail** — thin fixed indicator showing position through
  a page or a pinned sequence (already used in the ScrollStory pattern).
- **Numbered section markers** — every major section is labeled with a
  mono index (`02 / 06`) that ties to a persistent in-page nav dot.
- **Pinned storytelling** — sticky-panel sequences for multi-stage narratives
  (already implemented in `ScrollStory`), extended per-page as needed.

All primitives must degrade gracefully: static, fully legible, fully
functional with zero motion when `prefers-reduced-motion: reduce` is set.

---

## 7. Components

- **Button** — Primary (solid `#006BBF`), Accent (gradient, signature-only),
  Secondary (outline), Ghost (text+arrow), Invert/Outline-invert (on color
  banners). All magnetic on desktop pointer.
- **Navbar** — fixed, blur-on-scroll, active state, mobile drawer.
- **Footer** — brand + contact + branch addresses, link columns, legal bar.
- **ProgramCard** — ticket-stub editorial card, ghost index numeral, no glow-
  everything default; hover = precise lift + border, not neon glow.
- **SectionHeading** — mono eyebrow + Jakarta H2, text-reveal capable.
- **ScrollStory** — pinned multi-stage scrollytelling (career journey, etc).
- **Forms** — RegisterForm / ContactForm / B2BForm, token-based, inline
  validation, no dark-only literals.

---

## 8. Iconography

Custom inline SVG (`components/icons.tsx`), 2px stroke, never emoji. Domain
icons: AI/ML (brain), Data Science (chart), Cybersecurity (shield), HR
(users).

---

## 9. Pre-Delivery Checklist (per page, before lock)

- [x] No default glassmorphism/gradient — signature moments only
- [x] Every animated element has a reduced-motion static fallback
- [x] Contrast ≥ 4.5:1 on all text
- [x] Visible keyboard focus states
- [x] Responsive at 375 / 768 / 1024 / 1440
- [x] No empty/unfinished sections
- [x] Motion explainable by user intent, not decoration
- [x] Lighthouse Performance ≥ 90 (motion doesn't jank scroll)

---

## 10. Locked Pages (reference standard)

| Page | Status | Notes |
|---|---|---|
| **Home** (`/`) | 🔒 Locked | First page taken through the full 7-step process. Established: Section Navigator, kinetic hero (mount-triggered `TextReveal`), pinned `ScrollStory`, ticket-stub `ProgramCard`, native-scroll `TestimonialsCarousel` with cursor hint, one reserved gradient moment (final CTA), solid-ink Services banner. |

Every subsequent page follows this same architecture-first, no-empty-section,
one-signature-moment discipline — Home is the baseline every other page is
measured against before it can be locked.
