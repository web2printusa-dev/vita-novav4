import { ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'

export function Difference() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
          What Makes Vita Nova Different
        </p>
      </Reveal>

      <Reveal delay={100}>
        <blockquote className="mt-10 max-w-4xl">
          <p className="font-serif text-3xl font-medium leading-[1.15] text-foreground text-balance md:text-4xl md:leading-[1.15]">
            &ldquo;Most places give you 45 minutes, two to three times a week. We give you everything
            we have — four to five days a week, one on one, with people who have been exactly where
            you are.&rdquo;
          </p>
          <footer className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            — Mac &amp; Laura McGeorge
          </footer>
        </blockquote>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-16 flex max-w-3xl items-start gap-5 rounded-lg border border-accent/40 bg-secondary p-8 md:p-10">
          <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-accent" aria-hidden="true" />
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            Every contractor — physician, therapist, security, chef — signs a perpetual NDA before
            entering the home. Your privacy is not a feature. It is the foundation.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
