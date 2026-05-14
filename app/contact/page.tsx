import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Cover4You',
  description: 'Get in touch with Cover4You to discuss partnership opportunities, broker referral arrangements, or any other enquiries.',
  alternates: { canonical: 'https://www.cover4you.co.nz/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get in touch</h1>
          <p className="text-green-200 text-lg">
            Interested in partnering, advertising, or listing on our portfolio sites? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Let's talk</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We work with insurers, brokers, advisers and technology partners across New Zealand and internationally. Whether you want to receive leads from one of our sites or explore a broader partnership, fill in the form and we'll get back to you within one business day.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Email</div>
                    <a href="mailto:hello@cover4you.co.nz" className="text-green-600 hover:underline">hello@cover4you.co.nz</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Location</div>
                    <div className="text-gray-600">Auckland, New Zealand</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🕐</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Response time</div>
                    <div className="text-gray-600">Within 1 business day</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3">Partnership types</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span> Broker lead referral arrangements</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span> Insurer advertising and sponsorship</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span> Comparison platform integration</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span> White-label and co-branding</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span> New site joint ventures</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="font-extrabold text-gray-900 text-xl mb-6">Send us a message</h3>
                <form
                  action="https://formsubmit.co/hello@cover4you.co.nz"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="Cover4You Partnership Enquiry" />
                  <input type="hidden" name="_next" value="https://www.cover4you.co.nz/thank-you/" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">What best describes you? *</label>
                    <select
                      name="type"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your partnership interest…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors text-lg"
                  >
                    Send message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
