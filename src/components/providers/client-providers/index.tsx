'use client'

import type { PropsWithChildren } from 'react'
import NostrProvider from '../nostr-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ClientProviders = ({ children }: PropsWithChildren) => {
	const queryClient = new QueryClient()

	return (
		<NostrProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</NostrProvider>
	)
}

export default ClientProviders
