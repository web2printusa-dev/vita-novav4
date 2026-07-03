import { Reveal } from './reveal'

export function Beliefs() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-serif text-4xl font-medium text-background md:text-5xl">
            What we believe.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#f0e9dd]">
            We are people of faith. Everything we do is built on forgiveness, on hope, and on the
            belief that every single person deserves a second chance.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#f0e9dd]">
            We believe no one is beyond repair. We believe the best chapters of your life are still
            ahead. That is not a slogan. It is why Mac and Laura get up every morning.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <blockquote className="mt-14">
            <p className="font-serif text-2xl font-medium italic leading-snug text-[#e2b984] text-balance md:text-3xl md:leading-snug">
              &ldquo;You were never broken. You just needed someone to actually show up for
              you.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
