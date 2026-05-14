import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sites, categories, categoryColours } from '@/data/sites'

export const metadata: Metadata = {
  title: 'Cover4You — New Zealand\'s Insurance Web Portfolio',
  description: 'Cover4You operates a portfolio of specialist insurance comparison and lead-generation websites across New Zealand. Partner with us to reach qualified insurance buyers.',
  alternates: { canonical: 'https://www.cover4you.co.nz/' },
}

const stats = [
  { value: '25+', label: 'Live websites' },
  { value: '3', label: 'Countries' },
  { value: '50k+', label: 'Monthly visitors' },
  { value: '100%', label: 'NZ-focused' },
]

const partnerTypes = [
  {
    number: '01',
    title: 'Insurance Companies',
    body: 'Reach thousands of qualified buyers already searching for your products. We drive high-intent traffic to niche insurance verticals.',
    stat: '25+ niche sites',
  },
  {
    number: '02',
    title: 'Insurance Brokers',
    body: 'Receive warm, pre-qualified leads from consumers actively comparing cover options. We handle the marketing — you handle the advice.',
    stat: '50k+ monthly visitors',
  },
  {
    number: '03',
    title: 'Comparison Platforms',
    body: 'White-label our traffic or co-brand specific sites. We\'re open to integration and revenue-share arrangements.',
    stat: 'Revenue-share ready',
  },
]

export default function HomePage() {
  const nzSites = sites.filter((s) => s.market === 'NZ')
  const intlSites = sites.filter((s) => s.market !== 'NZ')

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-between text-white overflow-hidden">
        {/* Background photo — Auckland city aerial */}
        <Image
          src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1920&q=80"
          alt="Auckland city"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Dark overlay — heavier at bottom for stats readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />

        {/* Hero content */}
        <div className="relative flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center w-full">
            <span className="inline-block bg-white/10 border border-white/20 text-green-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
              Insurance Web Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Connecting NZ insurance buyers<br className="hidden md:block" /> with the right advice
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
              Cover4You operates a growing portfolio of specialist insurance websites — each one a focused, high-intent destination that connects consumers with licensed NZ advisers, brokers and insurers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#portfolio" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg">
                View Our Sites
              </Link>
              <Link href="/contact/" className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg backdrop-blur-sm">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-extrabold text-white">{s.value}</div>
                  <div className="text-green-300 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                Who we are
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Cover4You is a New Zealand owned digital publishing company built around one simple idea: helping Kiwis find the right insurance without the fuss. We build and operate a portfolio of authoritative, niche insurance websites — each one designed to cut through the noise and connect consumers with the cover that actually suits their needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We don't sell insurance directly — our business is building the digital infrastructure that brings buyers and sellers together. Each site in our portfolio is purpose-built for a specific insurance vertical, with expert content, comparison tools, and seamless adviser referral flows.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All consumer referrals are handled by licensed insurance advisers and brokers operating under the Financial Markets Conduct Act 2013.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', title: 'Niche focus', body: 'Each site targets a single insurance vertical for maximum relevance and conversion.' },
                { icon: '🔍', title: 'SEO-first', body: 'Authoritative content built to rank for high-intent queries in Google and AI search.' },
                { icon: '✅', title: 'Licensed referrals', body: 'All consumer leads are passed to licensed NZ financial advisers and brokers.' },
                { icon: '📈', title: 'Growing portfolio', body: 'We launch new sites regularly — expanding our reach across insurance categories.' },
              ].map((item) => (
                <div key={item.title} className="bg-green-50 rounded-2xl p-6 border border-green-100">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our portfolio</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {sites.length} live websites spanning {categories.length} insurance categories across New Zealand and international markets.
            </p>
          </div>

          {/* Category legend */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => {
              const c = categoryColours[cat] || { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' }
              return (
                <span key={cat} className={`text-xs font-bold px-3 py-1 rounded-full border ${c.bg} ${c.text} ${c.border}`}>
                  {cat}
                </span>
              )
            })}
          </div>

          {/* NZ Sites grid */}
          <h3 className="text-xl font-bold text-gray-700 mb-6">🇳🇿 New Zealand</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {nzSites.map((site) => {
              const c = categoryColours[site.category] || { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' }
              return (
                <a
                  key={site.slug}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all flex flex-col overflow-hidden"
                >
                  {/* Site screenshot */}
                  <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/api/screenshot?url=${encodeURIComponent(site.url)}`}
                      alt={`${site.domain} screenshot`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.bg} ${c.text} ${c.border}`}>
                        {site.category}
                      </span>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <h3 className="font-extrabold text-gray-900 group-hover:text-green-700 transition-colors mb-1 text-sm">
                      {site.domain}
                    </h3>
                    <p className="text-xs text-green-600 font-semibold mb-2">{site.tagline}</p>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">{site.description}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-xs text-green-600 font-bold">Visit site →</span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* International Sites */}
          <h3 className="text-xl font-bold text-gray-700 mb-6">🌏 International</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {intlSites.map((site) => {
              const c = categoryColours[site.category] || { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' }
              const flag = site.market === 'ZA' ? '🇿🇦' : site.market === 'UK' ? '🇬🇧' : '🌏'
              return (
                <a
                  key={site.slug}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all flex flex-col overflow-hidden"
                >
                  {/* Site screenshot */}
                  <div className="relative w-full h-40 bg-gray-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/api/screenshot?url=${encodeURIComponent(site.url)}`}
                      alt={`${site.domain} screenshot`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${c.bg} ${c.text} ${c.border}`}>
                        {flag} {site.market}
                      </span>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <h3 className="font-extrabold text-gray-900 group-hover:text-green-700 transition-colors mb-1 text-sm">
                      {site.domain}
                    </h3>
                    <p className="text-xs text-green-600 font-semibold mb-2">{site.tagline}</p>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1">{site.description}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-xs text-green-600 font-bold">Visit site →</span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(22,163,74,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(22,163,74,0.08)_0%,_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Work with us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Partner with Cover4You
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We work with insurers, brokers and comparison platforms who want to reach motivated, high-intent insurance buyers across New Zealand.
            </p>
          </div>

          {/* Partner cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partnerTypes.map((p) => (
              <div key={p.title} className="relative group bg-gray-900 border border-gray-800 hover:border-green-500/50 rounded-2xl p-8 transition-all duration-300 hover:bg-gray-900/80">
                {/* Green top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Number */}
                <div className="text-6xl font-black text-gray-800 group-hover:text-green-900 transition-colors leading-none mb-6 select-none">
                  {p.number}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{p.body}</p>
                <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  {p.stat}
                </div>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
            <div className="relative px-10 py-14 text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to reach NZ insurance buyers?
              </h3>
              <p className="text-green-100/80 text-lg mb-10 max-w-xl mx-auto">
                Get in touch to discuss partnership opportunities, lead referral arrangements, or white-label options.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-xl transition-colors text-lg shadow-xl shadow-black/20"
              >
                Get in touch <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
