import { site } from "@/content/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
        <Logo />
        <p className="max-w-xl text-xs leading-relaxed text-faint">
          This page describes a product in development. Figures, splits and timelines are
          illustrative and subject to change. Nothing here is an offer to sell securities or
          tokens.
        </p>
        <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-paper">
          {site.contactEmail}
        </a>
      </div>
    </footer>
  );
}
