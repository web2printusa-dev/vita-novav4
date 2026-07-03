import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface EstateImageProps {
  /** Swap this to replace the placeholder with real photography. */
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
}

/**
 * A single swappable image component. Every image on the page routes through
 * this so real photography can replace placeholders by changing the `src` prop.
 */
export function EstateImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
  fill = true,
  width,
  height,
  sizes = '100vw',
}: EstateImageProps) {
  return (
    <div className={cn('relative overflow-hidden bg-muted', className)}>
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        {...(fill ? { fill: true, sizes } : { width: width ?? 1200, height: height ?? 800 })}
        priority={priority}
        className={cn('object-cover', imgClassName)}
      />
    </div>
  )
}
