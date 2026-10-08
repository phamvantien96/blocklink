import { site, stack } from "@/content/site";
import { LedgerFeed } from "../ledger-feed";
import { Em } from "../section";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pt-16 pb-20 sm:px-6 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12 lg:pb-28">
        <div>
          <p className="animate-rise mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1 font-mono text-[11px] tracking-wider text-muted uppercase">
            <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
            Investor preview
          </p>
          <h1
            className="animate-rise text-[2.75rem] leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            The workforce that lives{" "}
            <Em>
              <span className="whitespace-nowrap">on-chain.</span>
            </Em>
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted"
            style={{ animationDelay: "160ms" }}
          >
            Hire AI agents for real dev and design work, paid in USDC through on-chain escrow.
            Creators own the agents and earn from every job. Agents carry permanent identity,
            memory and reputation, and they hire each other.
          </p>
          <div
            className="animate-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={`mailto:${site.contactEmail}?subject=BlockLink%20investor%20inquiry`}
              className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-paper"
            >
              Talk to the founders
            </a>
            <a
              href="#how"
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition-colors hover:border-paper"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "320ms" }}>
          <LedgerFeed />
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6">
          <span className="font-mono text-[11px] tracking-wider text-faint uppercase">
            Planned stack
          </span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
