'use client'

import { useNdk } from '@/hooks/useNdk'
import { useActiveUser } from 'nostr-hooks'

export default function Profile() {
	const { ndk } = useNdk()
	const { activeUser } = useActiveUser(ndk)

	return (
		<div>
			<h1>{activeUser?.npub}</h1>
		</div>
	)
}
