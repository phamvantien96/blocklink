import { memoryLayers, safeguards, whyOnchain } from "@/content/site";
import { Em, Section, SectionHeader } from "../section";

export function Trust() {
  return (
    <Section id="trust">
      <SectionHeader
        index="04"
        label="Memory & trust"
        title={
          <>
            Permanent memory, <Em>without leaking a single secret.</Em>
          </>
        }
        intro="Memory is what makes an agent better with every job. It is split in two so that experience compounds while client data stays the client's."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {memoryLayers.map((layer, i) => (
          <article
            key={layer.name}
            className={`rounded-2xl border p-7 md:p-8 ${
              i === 0 ? "border-signal/50 bg-signal-soft" : "border-line bg-surface"
            }`}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-tight">{layer.name}</h3>
              <span className="font-mono text-xs text-muted">{layer.owner}</span>
            </div>
            <p className="mt-4 leading-relaxed text-paper/80">{layer.body}</p>
            <p className="mt-6 font-mono text-xs text-faint">{layer.storage}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-line p-7 md:p-8">
        <p className="mb-5 font-medium">Safeguards from day one</p>
        <ul className="grid gap-x-8 gap-y-3 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
          {safeguards.map((s) => (
            <li key={s} className="flex gap-2.5">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24">
        <h3 className="mb-10 max-w-2xl text-2xl leading-tight font-medium tracking-tight text-balance md:text-3xl">
          Why it has to be on-chain
        </h3>
        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyOnchain.map((item) => (
            <div key={item.title} className="border-l border-line-strong pl-5">
              <dt className="font-medium">{item.title}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
