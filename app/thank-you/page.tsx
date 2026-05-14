import type { Metadata } from 'next'
import Link from 'next/link'
import { sites } from '@/data/sites'

export const metadata: Metadata = {
  title: 'Thank You — Message Received | Cover4You',
  description: 'Thanks for getting in touch with Cover4You. We\'ll be in touch within one business day.',
  robots: { index: false },
}

// Pick a curated selection of 6 flagship NZ sites to showcase
const featuredSlugs = [
  'tradie-insurance',
  'best-health-insurance',
  'cruise-insurance',
  'directors-insurance',
  'equine-insurance',
  'cyber-cover',
]

const featuredSites = featuredSlugs
  .map((slug) => sites.find((s) => s.slug === slug))
  .filter(Boolean) as typeof sites

export default function ThankYouPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Success hero */}
      <div className="bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15)_0%,_transparent_65%)]" />
        <div className="relative max-w-2xl mx-auto px-4 py-20 text-center">
          {/* Animated check */}
          <div className="w-20 h-20 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">Message received!</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Thanks for reaching out. We'll review your enquiry and get back to you within one business day.
          </p>
          {/* What happens next */}
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { step: '1', title: 'We review', body: 'Your message lands directly with our partnership team.' },
              { step: '2', title: 'We respond', body: 'Expect a reply within one business day — usually sooner.' },
              { step: '3', title: 'We connect', body: "We'll match you with the right sites and opportunities." },
            ].map((item) => (
              <div key={item.step} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <div className="text-3xl font-black text-gray-700 leading-none mb-2">{item.step}</div>
                <div className="text-white font-bold text-sm mb-1">{item.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio showcase */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-2">While you wait</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Explore our insurance portfolio</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Take a look at some of the sites we operate. Each one is a specialist, high-intent destination connecting Kiwis with the right cover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {featuredSites.map((site) => (
              <a
                key={site.slug}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all flex flex-col overflow-hidden"
              >
                {/* Screenshot */}
                <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/api/screenshot?url=${encodeURIComponent(site.url)}`}
                    alt={`${site.domain} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-extrabold text-gray-900 group-hover:text-green-700 transition-colors text-sm mb-1">
                    {site.domain}
                  </h3>
                  <p className="text-xs text-green-600 font-semibold mb-2">{site.tagline}</p>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{site.description}</p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-green-600 font-bold">Visit site →</span>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-2 py-0.5 rounded-full border border-green-100">
                      {site.category}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-md shadow-green-100"
            >
              View all {sites.length} sites
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
