import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Image src="/cover4you-logo-white.svg" alt="Cover4You" width={192} height={48} className="h-11 w-auto mb-4" />
            <p className="text-sm leading-relaxed max-w-sm">
              Cover4You operates a portfolio of specialist insurance information and lead-generation websites across New Zealand and beyond. We connect insurance buyers with licensed advisers and brokers.
            </p>
            <p className="text-xs mt-4 text-gray-500">
              Cover4You is not a licensed financial advice provider. We connect consumers with licensed insurance advisers and brokers who provide advice and quotes.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link href="/#partners" className="hover:text-white transition-colors">Partner With Us</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@cover4you.co.nz" className="hover:text-white transition-colors">hello@cover4you.co.nz</a></li>
              <li className="text-gray-500">Auckland, New Zealand</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Cover4You. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
