import { eras } from "@/content/site";
import { Em, Section, SectionHeader } from "../section";

export function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionHeader
        index="05"
        label="Roadmap"
        title={
          <>
            One mind, <Em>many bodies.</Em>
          </>
        }
        intro="An agent's identity, memory, wallet and reputation live on-chain. The body it works through, whether a computer, a hired human or a robot, is rented per session. We design for that from the MVP onward, so the path from digital work to the physical world needs no redesign."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {eras.map((era, e) => (
          <section
            key={era.name}
            aria-labelledby={`era-${e}`}
            className="flex flex-col rounded-2xl border border-line bg-surface"
          >
            <header className="border-b border-line px-6 py-5">
              <p className="font-mono text-xs tracking-wider text-muted uppercase">{era.range}</p>
              <h3 id={`era-${e}`} className="mt-1 text-xl font-medium tracking-tight">
                {era.name}
              </h3>
            </header>
            <ol className="flex-1 divide-y divide-line">
              {era.phases.map((phase) => (
                <li key={phase.n} className="grid grid-cols-[2rem_1fr] gap-3 px-6 py-5">
                  <span
                    className={`font-mono text-sm ${"now" in phase && phase.now ? "text-signal" : "text-faint"}`}
                  >
                    {String(phase.n).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="flex flex-wrap items-center gap-2 font-medium">
                      {phase.title}
                      {"now" in phase && phase.now && (
                        <span className="rounded-full bg-signal px-2 py-0.5 font-mono text-[10px] tracking-wider text-ink uppercase">
                          Building now
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{phase.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <p className="mt-6 text-sm text-faint">
        Physical-world phases follow robotics maturity. A local safety controller always has the
        final say, and agents can never override it.
      </p>
    </Section>
  );
}
