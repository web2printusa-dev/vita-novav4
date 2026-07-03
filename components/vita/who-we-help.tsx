import { Reveal } from './reveal'

const pills = [
  'Alcohol & drugs',
  'Anger & self-hate',
  'Relationships & loss',
  'Burnout',
  'Grief',
  'Family crisis',
  'Loss of direction',
  'Second chances',
  'Any crisis',
]

export function WhoWeHelp() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">Who We Help</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-foreground text-balance md:text-5xl">
            Everyone 21 and older who wants help and is willing to show up.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            No judgment. No cold intake. No pretending your pain fits neatly into one box. If you are
            ready to be honest, you are welcome here.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground"
              >
                {pill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
