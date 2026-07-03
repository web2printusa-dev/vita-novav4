import { Phone } from 'lucide-react'
import { EstateImage } from './estate-image'
import { Reveal } from './reveal'
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

const stats = [
  { value: '4–5 days', label: 'One-on-one with Mac or Laura every week' },
  { value: '6 clients', label: 'Only. Never more.' },
  { value: 'Same day', label: 'Admission available' },
  { value: 'Zero', label: 'Judgment. For anything.' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Full-bleed background */}
      <EstateImage
        src="/images/hero-residence.png"
        alt="A warm South Florida coastal residence glowing at golden hour"
        className="absolute inset-0 h-full w-full"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#26241f]/85 via-[#26241f]/45 to-[#26241f]/35"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8 md:pb-28 md:pt-36">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-[#e9dcc7]">
            South Florida · Private Wellness Residence
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.02] text-background text-balance sm:text-6xl md:text-7xl">
            This is not a facility.
            <span className="mt-1 block italic text-[#e2b984]">This is a home.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f0e9dd] md:text-lg">
            And when you walk through our doors, you become family. Mac and Laura are here with you —
            at least 5 days a week, no exceptions.
          </p>
        </Reveal>

        {/* Stats bar */}
        <Reveal delay={300}>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/20 pt-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-serif text-2xl font-medium text-[#e2b984] md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-[#e9dcc7]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* CTA */}
        <Reveal delay={400}>
          <div className="mt-12 flex flex-col items-start gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-3 rounded-md bg-background px-7 py-4 text-base font-semibold text-foreground shadow-lg transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {`Call ${PHONE_DISPLAY}`}
            </a>
            <p className="text-sm italic text-[#e9dcc7]">Mac or Laura answers personally</p>
            <a
              href={EMAIL_HREF}
              className="text-sm text-[#f0e9dd] underline decoration-white/40 underline-offset-4 transition-colors hover:text-background"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
