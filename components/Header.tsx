'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/cover4you-logo.svg" alt="Cover4You" width={140} height={36} className="h-9 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/#portfolio" className="hover:text-green-600 transition-colors">Our Sites</Link>
            <Link href="/#about" className="hover:text-green-600 transition-colors">About</Link>
            <Link href="/#partners" className="hover:text-green-600 transition-colors">Partners</Link>
            <Link href="/contact/" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-colors font-semibold">
              Partner With Us
            </Link>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-2">
          <Link href="/#portfolio" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>Our Sites</Link>
          <Link href="/#about" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>About</Link>
          <Link href="/#partners" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>Partners</Link>
          <Link href="/contact/" className="block bg-green-600 text-white text-center py-2 rounded-lg font-semibold" onClick={() => setOpen(false)}>Partner With Us</Link>
        </div>
      )}
    </header>
  )
}
