import { nav, site } from "@/content/site";
import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" aria-label={`${site.name} home`}>
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#raise"
          className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-signal"
        >
          Invest
        </a>
      </div>
    </header>
  );
}
