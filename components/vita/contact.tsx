import { EstateImage } from './estate-image'
import { Reveal } from './reveal'
import { EMAIL, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

const residences = [
  {
    name: 'South Florida',
    detail: 'Primary residence · Year-round',
    primary: true,
  },
  {
    name: 'Richmond, Virginia',
    detail: 'Available selectively',
    primary: false,
  },
  {
    name: 'Wilmington, North Carolina',
    detail: 'Available selectively',
    primary: false,
  },
]

export function Contact() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: message + contact */}
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl font-medium text-background text-balance md:text-5xl">
                One message. We call you back.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#f0e9dd]">
                Mac or Laura will call you personally — usually within the hour. No call center. No
                automated response. Two people who have lived it, overcame it, and genuinely want to
                help you do the same.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-12 border-t border-white/20 pt-8">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#e2b984]">
                  Mac &amp; Laura McGeorge · Vita Nova
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-4 block font-serif text-4xl font-semibold text-background transition-colors hover:text-[#e2b984] md:text-5xl"
                >
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={EMAIL_HREF}
                  className="mt-4 block text-base text-[#f0e9dd] underline decoration-white/40 underline-offset-4 transition-colors hover:text-background"
                >
                  {EMAIL}
                </a>
                <p className="mt-4 text-sm text-[#e9dcc7]">Mac and Mac Power Partnership LLC</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#e2b984]">
                  Our Residences
                </p>
                <ul className="mt-5 space-y-3">
                  {residences.map((r) => (
                    <li key={r.name} className="flex items-baseline gap-3">
                      <span
                        className={r.primary ? 'text-[#e2b984]' : 'text-[#e9dcc7]/70'}
                        aria-hidden="true"
                      >
                        {r.primary ? '●' : '○'}
                      </span>
                      <span className="text-base text-background">
                        <span className="font-medium">{r.name}</span>
                        <span className="text-[#e9dcc7]"> — {r.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: property collage */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <EstateImage
                src="/images/residence-florida.png"
                alt="The primary Vita Nova residence in South Florida"
                className="col-span-2 aspect-[16/10] w-full rounded-lg"
                sizes="(min-width: 1024px) 512px, 100vw"
              />
              <EstateImage
                src="/images/residence-richmond.png"
                alt="The Vita Nova residence in Richmond, Virginia"
                className="aspect-square w-full rounded-lg"
                sizes="(min-width: 1024px) 256px, 50vw"
              />
              <EstateImage
                src="/images/residence-wilmington.png"
                alt="The Vita Nova residence in Wilmington, North Carolina"
                className="aspect-square w-full rounded-lg"
                sizes="(min-width: 1024px) 256px, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
