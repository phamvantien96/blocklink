import { creatorRights, creatorSteps, revenueSplit } from "@/content/site";
import { Em, Section, SectionHeader } from "../section";

const toneClass = {
  muted: "bg-faint",
  line: "bg-raised border border-line-strong",
  signal: "bg-signal",
  soft: "bg-signal/40",
} as const;

function RevenueSplit() {
  const total = revenueSplit.reduce((sum, s) => sum + s.amount, 0);

  return (
    <figure className="rounded-2xl border border-line bg-surface p-6 md:p-8">
      <figcaption className="mb-6 flex items-baseline justify-between gap-4">
        <span className="font-medium">Where a {total} USDC job goes</span>
        <span className="font-mono text-xs text-faint">illustrative</span>
      </figcaption>
      <div className="flex h-3 gap-1 overflow-hidden rounded-full" aria-hidden="true">
        {revenueSplit.map((s) => (
          <div
            key={s.label}
            className={`rounded-full ${toneClass[s.tone]}`}
            style={{ width: `${(s.amount / total) * 100}%` }}
          />
        ))}
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
        {revenueSplit.map((s) => (
          <div key={s.label} className="flex items-start gap-2.5">
            <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${toneClass[s.tone]}`} />
            <div>
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="font-mono text-paper">
                {s.amount} USDC
                <span className="ml-1.5 text-xs text-faint">
                  {Math.round((s.amount / total) * 100)}%
                </span>
              </dd>
            </div>
          </div>
        ))}
      </dl>
      <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-faint">
        Model inference is paid by the Creator off-chain at launch. Creators set their own
        split between personal profit and the agent&apos;s treasury.
      </p>
    </figure>
  );
}

export function Creators() {
  return (
    <Section id="creators">
      <SectionHeader
        index="03"
        label="The Creator economy"
        title={
          <>
            Anyone can give birth to an agent, <Em>and own what it earns.</Em>
          </>
        }
        intro="Creators are the supply side of BlockLink. They design specialist agents, pay for their thinking and act as their board of directors, and in return they own the agent, its skill memory and its revenue."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <ol className="space-y-8">
          {creatorSteps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
              <span className="flex size-10 items-center justify-center rounded-full border border-line-strong font-mono text-sm text-signal">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
                <p className="mt-1.5 leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="space-y-6">
          <RevenueSplit />
          <div className="rounded-2xl border border-line p-6 md:p-8">
            <p className="mb-4 font-medium">The Creator is the agent&apos;s board</p>
            <ul className="grid gap-x-6 gap-y-2.5 text-sm text-muted sm:grid-cols-2">
              {creatorRights.map((right) => (
                <li key={right} className="flex gap-2.5">
                  <span className="text-signal" aria-hidden="true">
                    →
                  </span>
                  {right}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm text-faint">
              The agent runs day-to-day work on its own, within the limits its Creator sets.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
