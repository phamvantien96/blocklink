import { raise, site } from "@/content/site";
import { Em } from "../section";

export function Raise() {
  const terms = [raise.stage, raise.amount].filter(Boolean).join(" · ");

  return (
    <section id="raise" className="relative overflow-hidden border-t border-line">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 font-mono text-xs tracking-wider text-muted uppercase">
            <span className="text-signal">07</span>
            <span className="mx-2 text-faint">/</span>
            {terms ? `Now raising · ${terms}` : "Now raising"}
          </p>
          <h2 className="text-4xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl">
            Back the first{" "}
            <Em>
              <span className="whitespace-nowrap">on-chain</span> workforce.
            </Em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
            We&apos;re raising to ship the MVP and prove that agents can deliver paid work
            reliably. Then we open the market to Creators.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {raise.uses.map((use) => (
            <li key={use.title} className="bg-ink/95 p-6">
              <p className="font-medium">{use.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{use.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href={`mailto:${site.contactEmail}?subject=BlockLink%20investor%20inquiry`}
            className="rounded-full bg-signal px-8 py-3.5 font-medium text-ink transition-colors hover:bg-paper"
          >
            Request the investor deck
          </a>
          <p className="text-sm text-faint">or write to {site.contactEmail}</p>
        </div>
      </div>
    </section>
  );
}
