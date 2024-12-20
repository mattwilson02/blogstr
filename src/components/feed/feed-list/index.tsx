'use client'

import { type NDKFilter, NDKKind } from '@nostr-dev-kit/ndk'
import { useSubscription } from 'nostr-hooks'
import { useEffect } from 'react'
import ArticleCard from '../article-card'

const FeedList = () => {
	const {
		events: blogPosts,
		isLoading,
		createSubscription,
		removeSubscription,
	} = useSubscription('long-form-notes')

	useEffect(() => {
		/** TODO: implement pagination */
		const filters: NDKFilter[] = [{ kinds: [NDKKind.Article], limit: 25 }]

		createSubscription(filters)

		return () => {
			removeSubscription()
		}
	}, [createSubscription, removeSubscription])

	if (isLoading) {
		return (
			<div className='flex flex-col w-1/2 max-h-[80vh] gap-2'>
				{Array.from({ length: 7 }).map((_, index) => (
					<div
						key={index}
						className='flex flex-col rounded gap-2 p-4 border border-gray-700 animate-pulse'>
						<div className='h-6 bg-gray-700 rounded w-3/4' />
						<div className='h-4 bg-gray-700 rounded w-full' />
					</div>
				))}
			</div>
		)
	}

	return (
		<ul className='flex w-1/2 flex-col gap-2 max-h-[80vh] overflow-y-scroll'>
			{blogPosts?.map((post) => (
				<ArticleCard
					key={post.id}
					id={post.id}
					title={post.tags[1][1]}
					bodyPreview={post.content.slice(0, 100)}
				/>
			))}
		</ul>
	)
}

export default FeedList
