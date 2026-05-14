import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Cover4You',
  description: 'Get in touch with Cover4You to discuss partnership opportunities, broker referral arrangements, or any other enquiries.',
  alternates: { canonical: 'https://www.cover4you.co.nz/contact/' },
}

const trustPills = [
  { icon: '⚡', label: 'Reply within 1 business day' },
  { icon: '🔒', label: 'Your details stay private' },
  { icon: '🤝', label: 'No obligation' },
  { icon: '🇳🇿', label: 'NZ owned & operated' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gray-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(22,163,74,0.15)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Partner with Cover4You</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Interested in receiving qualified insurance leads, advertising, or a broader partnership? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — info */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Let's talk</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We work with insurers, brokers, advisers and technology partners across New Zealand and internationally. Whether you want to receive leads from one of our sites or explore a broader partnership, fill in the form and we'll get back to you within one business day.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">📧</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Email</div>
                    <a href="mailto:hello@cover4you.co.nz" className="text-green-600 hover:underline">hello@cover4you.co.nz</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">📍</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Location</div>
                    <div className="text-gray-600">Auckland, New Zealand</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">🕐</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Response time</div>
                    <div className="text-gray-600">Within 1 business day</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Partnership types</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {[
                    'Broker lead referral arrangements',
                    'Insurer advertising and sponsorship',
                    'Comparison platform integration',
                    'White-label and co-branding',
                    'New site joint ventures',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {trustPills.map((pill) => (
                  <span key={pill.label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <span>{pill.icon}</span>
                    {pill.label}
                  </span>
                ))}
              </div>

              {/* Form card */}
              <div className="bg-white rounded-2xl border-2 border-green-100 shadow-lg shadow-green-50 p-8 relative">
                {/* Green top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-t-2xl" />

                <h3 className="font-extrabold text-gray-900 text-xl mb-1">Send us a message</h3>
                <p className="text-gray-500 text-sm mb-6">Fill in the form and we'll be in touch shortly.</p>

                <form
                  action="https://formsubmit.co/hello@cover4you.co.nz"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="Cover4You Partnership Enquiry" />
                  <input type="hidden" name="_next" value="https://www.cover4you.co.nz/thank-you/" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full name <span className="text-green-500">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full border-2 border-gray-200 hover:border-gray-300 focus:border-green-500 rounded-xl px-4 py-3 text-gray-900 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        name="company"
                        className="w-full border-2 border-gray-200 hover:border-gray-300 focus:border-green-500 rounded-xl px-4 py-3 text-gray-900 focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address <span className="text-green-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border-2 border-gray-200 hover:border-gray-300 focus:border-green-500 rounded-xl px-4 py-3 text-gray-900 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">What best describes you? <span className="text-green-500">*</span></label>
                    <select
                      name="type"
                      required
                      className="w-full border-2 border-gray-200 hover:border-gray-300 focus:border-green-500 rounded-xl px-4 py-3 text-gray-900 focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select one…</option>
                      <option>Insurance broker / adviser</option>
                      <option>Insurance company / underwriter</option>
                      <option>Comparison platform</option>
                      <option>Technology / software provider</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message <span className="text-green-500">*</span></label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full border-2 border-gray-200 hover:border-gray-300 focus:border-green-500 rounded-xl px-4 py-3 text-gray-900 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your partnership interest…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-md shadow-green-200 flex items-center justify-center gap-2"
                  >
                    Send message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    We respect your privacy. Your details will never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
