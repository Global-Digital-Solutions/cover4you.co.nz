import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
// Cache screenshots for 24 hours
export const revalidate = 86400

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')

  if (!url) {
    return new NextResponse('Missing url parameter', { status: 400 })
  }

  try {
    const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=800`

    const res = await fetch(screenshotUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Cover4You/1.0)',
      },
      // 8 second timeout
      signal: AbortSignal.timeout(8000),
    })

    if (!res.ok) {
      return new NextResponse('Screenshot service error', { status: 502 })
    }

    const contentType = res.headers.get('content-type') || 'image/png'
    const buffer = await res.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      },
    })
  } catch {
    return new NextResponse('Failed to fetch screenshot', { status: 502 })
  }
}
