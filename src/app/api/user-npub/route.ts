import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'

export async function GET() {
	const cookieStore = await cookies()
	const npub = cookieStore.get('npub')

	return Response.json({
		npub,
	})
}

export async function POST(request: NextRequest) {
	const requestBody = await request.json()

	const npub = requestBody.npub

	const cookieStore = await cookies()
	cookieStore.set('npub', npub)

	return Response.json({
		status: 200,
	})
}
