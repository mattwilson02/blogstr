'use client'

import { useActiveUser } from 'nostr-hooks'

export default function Profile() {
	const { activeUser } = useActiveUser(true)

	return (
		<div>
			<h1>{activeUser?.npub}</h1>
		</div>
	)
}
