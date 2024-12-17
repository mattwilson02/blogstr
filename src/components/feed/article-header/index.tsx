'use client'
import type { NDKEvent } from '@nostr-dev-kit/ndk'
import dayjs from 'dayjs'

type Props = {
	article: NDKEvent | undefined
}

const ArticleHeader = ({ article }: Props) => {
	return (
		<div className='flex flex-col gap-2'>
			<h1 className='text-3xl overflow-x-hidden'>{article?.tags[1][1]}</h1>
			<div className='flex flex-row gap-2 items-center'>
				<p className='text-lg text-gray-400'>
					{article?.created_at
						? dayjs(new Date(article?.created_at * 1000)).format('DD MMM, YYYY')
						: ''}
				</p>
				<p className='text-md text-gray-400'>{article?.author.profile?.name}</p>
			</div>
		</div>
	)
}

export default ArticleHeader
