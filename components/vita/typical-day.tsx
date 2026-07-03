import { Reveal } from './reveal'

const schedule = [
  {
    time: '6am',
    text: 'Morning movement with Mac & Laura. Swimming, beach walks, working out — right there with you.',
  },
  {
    time: '8am',
    text: 'Breakfast together. Mac and Laura at the table. Walls come down here.',
  },
  {
    time: '10am',
    text: 'One-on-one with Mac or Laura. Private, dedicated, yours. Four to five days every week.',
  },
  {
    time: '12pm',
    text: 'Therapist visits the home. Licensed, warm — comes to you.',
  },
  {
    time: '3pm',
    text: "Massage & free time. Twice a week. Bodies carry what minds haven't processed.",
  },
  {
    time: '5pm',
    text: 'Cooking & eating together. Mac and Laura in the kitchen. Weekends — private chef.',
  },
  {
    time: '7pm',
    text: 'Dinner as family. Everyone around the table. Always hope.',
  },
]

export function TypicalDay() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
          A Typical Day at Vita Nova
        </p>
      </Reveal>

      <ol className="mt-14 max-w-3xl">
        {schedule.map((item, i) => (
          <Reveal key={item.time} delay={i * 80} as="li">
            <div className="grid grid-cols-[4.5rem_1fr] gap-x-5 md:grid-cols-[7rem_1fr] md:gap-x-8">
              {/* Time */}
              <div className="pt-0.5 text-right font-serif text-xl font-medium text-accent md:text-2xl">
                {item.time}
              </div>
              {/* Connector + text */}
              <div className="relative border-l border-border pb-10 pl-6 md:pl-8">
                <span
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="text-base leading-relaxed text-foreground md:text-lg">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
