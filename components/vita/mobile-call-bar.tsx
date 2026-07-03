import { Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={PHONE_HREF}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm transition-colors hover:bg-accent"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {`Call Mac or Laura — ${PHONE_DISPLAY}`}
      </a>
    </div>
  )
}
