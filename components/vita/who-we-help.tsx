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
          <ul className="mt-12 flex flex-wrap gap-3 md:gap-4">
            {pills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border-2 border-accent/35 bg-accent/10 px-6 py-3 text-base font-semibold text-foreground shadow-sm transition-colors hover:border-accent/60 hover:bg-accent/15 md:px-7 md:py-3.5 md:text-lg"
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
