import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export const IconBrain = (p: IconProps) => (
  <svg {...base} {...p}><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.5A2.5 2.5 0 0 0 4.5 8 2.5 2.5 0 0 0 4 12a2.5 2.5 0 0 0 .5 4A2.5 2.5 0 0 0 7 18.5v.5a2.5 2.5 0 0 0 5 0V4.5A2.5 2.5 0 0 0 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5A2.5 2.5 0 0 1 19.5 8 2.5 2.5 0 0 1 20 12a2.5 2.5 0 0 1-.5 4A2.5 2.5 0 0 1 17 18.5v.5a2.5 2.5 0 0 1-5 0"/></svg>
);

export const IconChart = (p: IconProps) => (
  <svg {...base} {...p}><path d="M3 3v18h18"/><path d="M7 15l3-4 3 3 5-7"/></svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export const IconRocket = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
);

export const IconSparkle = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/></svg>
);

export const IconStar = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2Z"/></svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 6L9 17l-5-5"/></svg>
);

export const IconPlay = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none"><path d="M7 4.5v15a1 1 0 0 0 1.53.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z"/></svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
);

export const IconTag = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z"/><circle cx="7" cy="7" r="1.2" fill="currentColor"/></svg>
);

export const IconLevel = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export const IconLinkedin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2" fill="currentColor" stroke="none"/></svg>
);

export const IconInstagram = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
);

export const IconWhatsapp = (p: IconProps) => (
  <svg {...base} {...p} fill="currentColor" stroke="none" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.84 14.05c-.24.68-1.4 1.3-1.94 1.38-.49.08-1.11.11-1.8-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.09-4.85-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.68-.79.87-1.06.18-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.33.07.12.07.68-.17 1.36Z"/>
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 6h16M4 12h16M4 18h16"/></svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>
);

export const IconChevronDown = (p: IconProps) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6"/></svg>
);

export const domainIcon: Record<string, (p: IconProps) => React.JSX.Element> = {
  "AI/ML": IconBrain,
  "Data Science": IconChart,
  Cybersecurity: IconShield,
  HR: IconUsers,
};
