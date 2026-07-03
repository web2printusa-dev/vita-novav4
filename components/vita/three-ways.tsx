import { Reveal } from './reveal'

const rows = [
  {
    lead: 'Ready now',
    rest: ' — Same-day admission available.',
  },
  {
    lead: 'Need the first step too',
    rest: ' — We coordinate the medical pathway and bring you to us when safe.',
  },
  {
    lead: 'Calling for someone I love',
    rest: ' — Families, spouses, attorneys, physicians. We talk to people who love someone every day.',
  },
]

export function ThreeWays() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
            Three ways people come to us
          </h2>
        </Reveal>

        <ul className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
          {rows.map((row, i) => (
            <Reveal key={row.lead} delay={i * 100} as="li">
              <div className="flex items-start gap-4 py-7">
                <span className="font-serif text-2xl leading-none text-accent" aria-hidden="true">
                  →
                </span>
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  <span className="font-medium">{row.lead}</span>
                  <span className="text-muted-foreground">{row.rest}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
