import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Cover4You — New Zealand\'s Insurance Web Portfolio',
    template: '%s | Cover4You',
  },
  description: 'Cover4You operates a portfolio of specialist insurance comparison and lead-generation websites across New Zealand. Partner with us to reach qualified insurance buyers.',
  metadataBase: new URL('https://www.cover4you.co.nz'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    siteName: 'Cover4You',
    locale: 'en_NZ',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.cover4you.co.nz/#organization',
  name: 'Cover4You',
  url: 'https://www.cover4you.co.nz',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.cover4you.co.nz/cover4you-logo.svg',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@cover4you.co.nz',
    contactType: 'customer service',
    areaServed: 'NZ',
  },
  description: 'Cover4You operates a portfolio of specialist insurance comparison and lead-generation websites across New Zealand.',
  areaServed: { '@type': 'Country', name: 'New Zealand' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="bg-white text-gray-900" style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
