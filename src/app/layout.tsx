import type { Metadata } from 'next'
import './globals.css'
import ClientProviders from '@/components/providers/client-providers'

export const metadata: Metadata = {
	title: 'Blogstr',
	description: 'A blog platform',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='bg-gray-900 h-screen'>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}
