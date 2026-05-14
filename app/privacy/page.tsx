import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Cover4You privacy policy — how we collect, use and protect your personal information.',
  alternates: { canonical: 'https://www.cover4you.co.nz/privacy/' },
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: May 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who we are</h2>
            <p className="text-gray-600 leading-relaxed">Cover4You operates a portfolio of insurance information websites in New Zealand. This privacy policy applies to cover4you.co.nz and all sites operated under the Cover4You brand. We can be contacted at hello@cover4you.co.nz.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information we collect</h2>
            <p className="text-gray-600 leading-relaxed">We collect personal information you provide when submitting enquiry forms on our sites — including name, email address, phone number, and information relevant to your insurance query. We also collect standard website analytics data (pages visited, browser type, location) via analytics tools.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How we use your information</h2>
            <p className="text-gray-600 leading-relaxed">We use enquiry information to connect you with licensed insurance advisers and brokers who can respond to your query. We may also use your contact details to follow up on your enquiry. We do not sell personal information to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Your rights</h2>
            <p className="text-gray-600 leading-relaxed">Under the Privacy Act 2020 (NZ) you have the right to access and correct personal information we hold about you. To make a request, contact us at hello@cover4you.co.nz.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
