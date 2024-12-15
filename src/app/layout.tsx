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
			<body className='bg-gray-900 h-screen flex flex-col gap-8 px-8 pb-2 pt-8'>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}
