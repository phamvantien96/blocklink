import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">{children}</div>
    </section>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="mb-12 max-w-3xl md:mb-16">
      <p className="mb-5 font-mono text-xs tracking-wider text-muted uppercase">
        <span className="text-signal">{index}</span>
        <span className="mx-2 text-faint">/</span>
        {label}
      </p>
      <h2 className="text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{intro}</p>
      )}
    </header>
  );
}

// Serif italic accent used inside headlines.
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal text-[1.08em] italic">{children}</em>;
}
