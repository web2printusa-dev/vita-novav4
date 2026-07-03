import { TopStrip } from '@/components/vita/top-strip'
import { MobileCallBar } from '@/components/vita/mobile-call-bar'
import { Hero } from '@/components/vita/hero'
import { WhoWeAre } from '@/components/vita/who-we-are'
import { WhoWeHelp } from '@/components/vita/who-we-help'
import { TypicalDay } from '@/components/vita/typical-day'
import { Programs } from '@/components/vita/programs'
import { Difference } from '@/components/vita/difference'
import { Beliefs } from '@/components/vita/beliefs'
import { SameDay } from '@/components/vita/same-day'
import { ThreeWays } from '@/components/vita/three-ways'
import { Contact } from '@/components/vita/contact'
import { Footer } from '@/components/vita/footer'

export default function Page() {
  return (
    <>
      <TopStrip />
      <main>
        <Hero />
        <WhoWeAre />
        <WhoWeHelp />
        <TypicalDay />
        <Programs />
        <Difference />
        <Beliefs />
        <SameDay />
        <ThreeWays />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
