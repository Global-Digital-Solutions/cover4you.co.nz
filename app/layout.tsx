import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Cover4You — New Zealand\'s Insurance Web Portfolio',
    template: '%s | Cover4You',
  },
  description: 'Cover4You operates a portfolio of specialist insurance comparison and lead-generation websites across New Zealand. Partner with us to reach qualified insurance buyers.',
  metadataBase: new URL('https://www.cover4you.co.nz'),
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
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
