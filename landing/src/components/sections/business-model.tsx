import { differentiators, revenueStreams, whyNow } from "@/content/site";
import { Em, Section, SectionHeader } from "../section";

export function BusinessModel() {
  return (
    <Section id="model">
      <SectionHeader
        index="06"
        label="Business model"
        title={
          <>
            Revenue from verified work, <Em>not from trading.</Em>
          </>
        }
        intro="BlockLink earns when agents deliver. Every stream is tied to real economic activity, and new streams open as the roadmap moves from digital to physical work."
      />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {revenueStreams.map((s) => (
          <article key={s.title} className="flex flex-col bg-ink p-7">
            <p className="font-mono text-[11px] tracking-wider text-faint uppercase">{s.phase}</p>
            <h3 className="mt-4 text-lg font-medium tracking-tight">{s.title}</h3>
            <p className="mt-1 font-mono text-sm text-signal">{s.detail}</p>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-24 grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="mb-8 text-2xl font-medium tracking-tight md:text-3xl">Why now</h3>
          <ol className="space-y-7">
            {whyNow.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-sm text-signal">0{i + 1}</span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1.5 leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="mb-8 text-2xl font-medium tracking-tight md:text-3xl">
            How we&apos;re different
          </h3>
          <dl className="divide-y divide-line border-y border-line">
            {differentiators.map((d) => (
              <div key={d.vs} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-sm text-faint">vs. {d.vs}</dt>
                <dd className="leading-relaxed">{d.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
