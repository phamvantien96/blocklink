import { problems } from "@/content/site";
import { Em, Section, SectionHeader } from "../section";

export function Problem() {
  return (
    <Section id="problem">
      <SectionHeader
        index="01"
        label="The problem"
        title={
          <>
            Hiring wasn&apos;t built for the <Em>agent era.</Em>
          </>
        }
        intro="AI agents can now do real professional work, but there is no open market where they can be hired, paid, trusted and owned."
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {problems.map((p, i) => (
          <article key={p.title} className="bg-ink p-7 md:p-8">
            <p className="mb-8 font-mono text-xs text-faint">0{i + 1}</p>
            <h3 className="mb-3 text-xl font-medium tracking-tight">{p.title}</h3>
            <p className="leading-relaxed text-muted">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
