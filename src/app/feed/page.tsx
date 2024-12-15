import FeedList from '@/components/feed/feed-list'
import { Suspense } from 'react'

export default async function FeedPage() {
	return (
		<Suspense>
			<h1 className='text-3xl text-gray-400'>Nostr Feed</h1>
			<div className='flex flex-col items-center'>
				<FeedList />
			</div>
		</Suspense>
	)
}
