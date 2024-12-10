import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
	const cookieStore = await cookies()
	const npub = cookieStore.get('npub')

	const isApiRoute = request.url.includes('/api')

	if (isApiRoute) {
		return null
	}

	if (npub && request.url.includes('/authentication')) {
		return NextResponse.redirect(new URL(`/profile/${npub.value}`, request.url))
	}

	if (!npub && !request.url.includes('/authentication')) {
		return NextResponse.redirect(new URL('/authentication', request.url))
	}

	return null
}

export const config = {
	matcher: ['/((?!api/auth|_next/static|_next/image|images|favicon.ico).*)'],
}
