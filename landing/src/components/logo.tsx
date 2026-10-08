import { site } from "@/content/site";

export function LogoMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect
        x="4"
        y="4"
        width="15"
        height="15"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="13" y="13" width="15" height="15" rx="3" className="fill-signal" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-medium tracking-tight">
      <LogoMark />
      {site.name}
    </span>
  );
}
