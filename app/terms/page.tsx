import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Cover4You terms of use — the conditions governing use of our websites.',
  alternates: { canonical: 'https://www.cover4you.co.nz/terms/' },
}

export default function TermsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2026</p>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. General</h2>
            <p className="text-gray-600 leading-relaxed">By using cover4you.co.nz or any site in the Cover4You portfolio you agree to these terms. Cover4You reserves the right to modify these terms at any time. Continued use of our sites constitutes acceptance of updated terms.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. No financial advice</h2>
            <p className="text-gray-600 leading-relaxed">Cover4You is an information and referral service. Content on our sites is general in nature and does not constitute personalised financial advice. We connect consumers with licensed financial advisers and brokers who provide regulated advice. Insurance decisions should be made in consultation with a licensed adviser.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accuracy</h2>
            <p className="text-gray-600 leading-relaxed">We take care to ensure information is accurate and up to date but cannot guarantee completeness or currency of all content. Insurance products, pricing and availability change frequently. Always verify details with the insurer or adviser before making a decision.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Governing law</h2>
            <p className="text-gray-600 leading-relaxed">These terms are governed by the laws of New Zealand. Disputes are subject to the exclusive jurisdiction of the courts of New Zealand.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
