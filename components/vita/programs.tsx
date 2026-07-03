import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const programs = [
  {
    title: 'THE RESET',
    tag: 'Intensive · Typically 2–4 weeks',
    body: 'For people who need to stop, breathe, and reset. Length determined together on the first call.',
    footer: 'All-inclusive. Investment discussed personally on your first call.',
    featured: false,
  },
  {
    title: 'THE REBUILD',
    tag: 'Deep work · As long as it takes — up to 90 days',
    body: 'For people ready to do the real work. Mac and Laura stay with you as long as you need.',
    footer: 'All-inclusive. Investment discussed personally on your first call.',
    featured: true,
    badge: 'MOST SELECTED',
  },
  {
    title: 'TOGETHER (FOR COUPLES)',
    tag: 'Together · Up to 30 days · Second person at half price',
    body: 'Mac and Laura did it together. They know what it takes.',
    footer: 'All-inclusive. Investment discussed personally on your first call.',
    featured: false,
  },
]

export function Programs() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">Programs</p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-foreground text-balance md:text-5xl">
            Two paths. We help you choose the right one.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We will tell you honestly on that first call what we think you need — not what costs
            more. What will actually work.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.title} delay={i * 120} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col rounded-lg border p-8 transition-shadow',
                  program.featured
                    ? 'border-accent bg-primary text-primary-foreground shadow-lg'
                    : 'border-border bg-card text-card-foreground',
                )}
              >
                {program.badge ? (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent-foreground">
                    {program.badge}
                  </span>
                ) : null}
                <h3 className="font-serif text-2xl font-semibold tracking-wide">{program.title}</h3>
                <p
                  className={cn(
                    'mt-3 text-sm font-medium uppercase tracking-[0.12em]',
                    program.featured ? 'text-[#e2b984]' : 'text-accent',
                  )}
                >
                  {program.tag}
                </p>
                <p
                  className={cn(
                    'mt-6 text-base leading-relaxed',
                    program.featured ? 'text-[#f0e9dd]' : 'text-muted-foreground',
                  )}
                >
                  {program.body}
                </p>
                <p
                  className={cn(
                    'mt-8 border-t pt-5 text-sm',
                    program.featured
                      ? 'border-white/20 text-[#e9dcc7]'
                      : 'border-border text-muted-foreground',
                  )}
                >
                  {program.footer}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic leading-relaxed text-muted-foreground text-pretty">
            All programs include Mac &amp; Laura one-on-one 4–5 days/week, private home, all meals,
            licensed ******** massage, 24/7 security, and same-day admission. Age 21+.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
