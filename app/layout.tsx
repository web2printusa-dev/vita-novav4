import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const description =
  'This is not a facility. This is a home. A private wellness residence in South Florida — Mac and Laura are here with you, at least 5 days a week. Only 6 clients. Same-day admission. Call (954) 355-2040.'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Vita Nova — Private Wellness Residence · South Florida',
  description,
  generator: 'v0.app',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Vita Nova — Private Wellness Residence · South Florida',
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Vita Nova',
    images: [
      {
        url: '/images/hero-residence.png',
        width: 1200,
        height: 630,
        alt: 'A warm South Florida coastal residence at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vita Nova — Private Wellness Residence · South Florida',
    description,
    images: ['/images/hero-residence.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#faf7f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
