'use client'

import type { NDKEvent } from '@nostr-dev-kit/ndk'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
	article: NDKEvent | undefined
}

const ArticleContent = ({ article }: Props) => {
	return (
		<Markdown
			className='w-1/2 space-y-6 self-center pb-10'
			remarkPlugins={[remarkGfm]}>
			{article?.content}
		</Markdown>
	)
}

export default ArticleContent
