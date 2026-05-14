import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — Message Received',
  description: 'Thanks for getting in touch with Cover4You. We\'ll be in touch within one business day.',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Message received!</h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Thank you for reaching out. We'll review your message and get back to you within one business day.
        </p>
        <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
          Back to home
        </Link>
      </div>
    </div>
  )
}
