import { EstateImage } from './estate-image'
import { Reveal } from './reveal'

const founders = [
  {
    src: '/images/mac-portrait.png',
    name: 'Mac McGeorge',
    role: 'Founder',
    bio: "Mac's bio coming soon.",
    alt: 'Portrait of Mac McGeorge, Founder of Vita Nova',
  },
  {
    src: '/images/laura-portrait.png',
    name: 'Laura McGeorge',
    role: 'Co-Founder',
    bio: "Laura's bio coming soon.",
    alt: 'Portrait of Laura McGeorge, Co-Founder of Vita Nova',
  },
]

export function WhoWeAre() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">Who We Are</p>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-foreground text-balance md:text-5xl">
          People who have lived it. People who overcame it.
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Mac and Laura were both alcoholics — and worse. They came back from the bottom. Now every
          day of their lives is dedicated to helping you do the same. No judgment. No pretense. Just
          two people who know exactly where you are.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <blockquote className="mt-14 border-l-2 border-accent pl-6 md:mt-16 md:pl-10">
          <p className="font-serif text-2xl font-medium italic leading-snug text-foreground text-pretty md:text-3xl md:leading-snug">
            &ldquo;We&apos;ve done it all — sex, drugs, rock &apos;n&apos; roll. We&apos;ve lived it.
            We overcame it. Don&apos;t be afraid to tell us everything. We only help.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            — Mac &amp; Laura McGeorge
          </footer>
        </blockquote>
      </Reveal>

      {/* Founder cards */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {founders.map((founder, i) => (
          <Reveal key={founder.name} delay={i * 120}>
            <article className="overflow-hidden rounded-lg border border-border bg-card">
              <EstateImage
                src={founder.src}
                alt={founder.alt}
                className="aspect-[4/5] w-full"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {founder.name}
                  <span className="ml-2 align-middle text-sm font-normal uppercase tracking-[0.16em] text-accent">
                    {founder.role}
                  </span>
                </h3>
                <p className="mt-2 text-sm italic text-muted-foreground">{founder.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Together image */}
      <Reveal delay={120}>
        <EstateImage
          src="/images/mac-laura-together.png"
          alt="Mac and Laura McGeorge together"
          className="mt-8 aspect-[16/9] w-full rounded-lg border border-border"
          sizes="(min-width: 1024px) 1024px, 100vw"
        />
      </Reveal>
    </section>
  )
}
