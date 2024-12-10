'use client'
import { type PropsWithChildren, useEffect } from 'react'
import { useNdk } from 'nostr-hooks'

const NostrProvider = ({ children }: PropsWithChildren) => {
	const { initNdk, ndk } = useNdk()

	const connectedRelays = ['wss://relay.primal.net/', 'wss://relay.damus.io/']

	useEffect(() => {
		initNdk({
			explicitRelayUrls: connectedRelays,
		})
	}, [initNdk])

	useEffect(() => {
		ndk?.connect()
	}, [ndk])

	return <>{children}</>
}

export default NostrProvider
