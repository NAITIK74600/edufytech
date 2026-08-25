import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "invert" | "outline-invert";
type Size = "sm" | "md" | "lg";

// Matches the EduFyi Design System button spec:
// Primary (solid #006BBF, hover #004D6B) · Accent (gradient, used sparingly for
// hero/high-emphasis CTAs) · Secondary (white + blue outline) · Ghost (text link + arrow)
// · Invert (solid white, for CTAs placed on top of a colored/gradient banner)
// · Outline-invert (transparent + white outline, secondary CTA on a colored banner).
const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-[var(--shadow-2)] hover:bg-[var(--color-primary-dark)] hover:shadow-[var(--shadow-3)]",
  accent:
    "brand-gradient text-white shadow-[var(--shadow-2)] hover:shadow-[var(--shadow-3)]",
  secondary:
    "bg-white border-[1.5px] border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-tint)]",
  ghost:
    "text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] px-0 py-0 hover:underline underline-offset-4",
  invert:
    "bg-white text-[var(--color-primary)] shadow-[var(--shadow-2)] hover:shadow-[var(--shadow-3)]",
  "outline-invert":
    "border-[1.5px] border-white/70 text-white hover:bg-white/10 hover:border-white",
};

// Magnetic pull is reserved for high-emphasis CTAs — not every link, to
// keep the effect meaningful rather than a blanket gimmick.
const magneticVariants: Variant[] = ["primary", "accent", "invert"];

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled,
}: Props) {
  const sizeCls = variant === "ghost" ? "text-sm" : sizes[size];
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizeCls} ${className}`;

  const content = href ? (
    <Link href={href} className={cls}>
      {children}
    </Link>
  ) : (
    <button type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );

  if (magneticVariants.includes(variant) && !disabled) {
    return <Magnetic>{content}</Magnetic>;
  }
  return content;
}

