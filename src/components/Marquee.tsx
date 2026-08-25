type Props = {
  items: string[];
  reverse?: boolean;
};

export function Marquee({ items, reverse = false }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-[var(--color-border)]/60 py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div
        className="flex w-max items-center gap-10 animate-marquee group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-semibold tracking-wide text-[var(--color-muted-foreground)]/70 transition-colors hover:text-[var(--color-foreground)]"
          >
            {item}
            <span className="h-1 w-1 rotate-45 bg-[var(--color-accent)]/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
