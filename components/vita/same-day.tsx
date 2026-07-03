import { Reveal } from './reveal'

const steps = [
  {
    time: '10:20am',
    text: 'One document signed. Plain language. Three minutes. Done.',
  },
  {
    time: '10:45am',
    text: 'Private car dispatched. To your door. You arrange nothing.',
  },
  {
    time: '3:00pm',
    text: 'Mac & Laura at the doors. Welcome home.',
  },
]

export function SameDay() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
          Same-Day Admission
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.time} delay={i * 120} as="li">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl font-semibold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="hidden h-px flex-1 bg-border md:block"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-5 font-serif text-2xl font-medium text-foreground">{step.time}</p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
