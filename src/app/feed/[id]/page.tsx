'use client'
import ArticleContent from '@/components/feed/article-content'
import ArticleHeader from '@/components/feed/article-header'
import { type NDKFilter, NDKKind } from '@nostr-dev-kit/ndk'
import { useSubscription } from 'nostr-hooks'
import { Suspense, use, useEffect } from 'react'

type PageParams = Promise<{ id: string }>

export default function ArticlePage({ params }: { params: PageParams }) {
	const { id } = use(params)

	const {
		events: articles,
		isLoading,
		createSubscription,
		removeSubscription,
	} = useSubscription(`article-${id}`)

	const article = articles?.[0]

	useEffect(() => {
		const filters: NDKFilter[] = [
			{ kinds: [NDKKind.Article], ids: [id], limit: 1 },
		]

		createSubscription(filters)

		return () => {
			removeSubscription()
		}
	}, [createSubscription, removeSubscription, id])

	if (isLoading) {
		return (
			<div className='flex flex-col w-full max-h-[80vh] gap-2'>
				<div className='flex flex-col items-start rounded gap-2 animate-pulse'>
					<div className='h-8 bg-gray-700 rounded w-1/3' />
					<div className='h-6 bg-gray-700 rounded w-1/3' />
				</div>
				{Array.from({ length: 5 }).map((_, index) => (
					<div
						key={index}
						className='flex flex-col items-center rounded gap-2 p-4 animate-pulse'>
						<div className='h-8 bg-gray-700 rounded w-1/2' />
						<div className='h-6 bg-gray-700 rounded w-1/2' />
						<div className='h-4 bg-gray-700 rounded w-1/2' />
					</div>
				))}
			</div>
		)
	}

	return (
		<Suspense>
			<ArticleHeader article={article} />
			<ArticleContent article={article} />
		</Suspense>
	)
}
