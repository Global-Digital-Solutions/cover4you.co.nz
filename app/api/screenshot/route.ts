import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
// Cache screenshots for 24 hours
export const revalidate = 86400

/**
 * Screenshot proxy — tries Microlink (headless browser, reliable for newer
 * domains) then falls back to thum.io (lightweight, no API key needed).
 * Caches successful responses for 24 h.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return new NextResponse('Missing url parameter', { status: 400 })
  }

  // — 1. Microlink (free tier, headless Chromium, handles JS-rendered sites) —
  try {
    const microlinkUrl =
      `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`

    const res = await fetch(microlinkUrl, {
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
    })

    if (res.ok) {
      const contentType = res.headers.get('content-type') || ''
      // Microlink returns JSON when there's an error even with a 200
      if (contentType.includes('image')) {
        const buffer = await res.arrayBuffer()
        return new NextResponse(buffer, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
          },
        })
      }
    }
  } catch {
    // fall through to next service
  }

  // — 2. Thum.io (no registration, synchronous, free) —
  try {
    const thumUrl = `https://image.thum.io/get/width/1200/crop/800/${url}`

    const res = await fetch(thumUrl, {
      signal: AbortSignal.timeout(10000),
    })

    if (res.ok) {
      const contentType = res.headers.get('content-type') || 'image/jpeg'
      if (contentType.includes('image')) {
        const buffer = await res.arrayBuffer()
        return new NextResponse(buffer, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
          },
        })
      }
    }
  } catch {
    // fall through to SVG fallback
  }

  // — 3. SVG fallback card (always works) —
  const domain = new URL(url).hostname.replace(/^www\./, '')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0f172a"/>
        <stop offset="100%" style="stop-color:#1e3a5f"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bg)"/>
    <rect x="40" y="40" width="120" height="8" rx="4" fill="#0ea5e9" opacity="0.6"/>
    <rect x="40" y="60" width="200" height="8" rx="4" fill="#334155" opacity="0.5"/>
    <rect x="40" y="80" width="160" height="8" rx="4" fill="#334155" opacity="0.4"/>
    <text x="600" y="380" font-family="system-ui,sans-serif" font-size="52" font-weight="700" fill="white" text-anchor="middle">${domain}</text>
    <text x="600" y="440" font-family="system-ui,sans-serif" font-size="28" fill="#94a3b8" text-anchor="middle">NZ Insurance Specialists</text>
    <rect x="520" y="470" width="160" height="4" rx="2" fill="#0ea5e9" opacity="0.5"/>
  </svg>`

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
