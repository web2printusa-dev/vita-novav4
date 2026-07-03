import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

export function TopStrip() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <span className="font-serif text-lg font-semibold tracking-[0.28em] text-foreground">
          VITA NOVA
        </span>
        <a
          href={PHONE_HREF}
          className="group flex items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-accent"
        >
          <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  )
}
