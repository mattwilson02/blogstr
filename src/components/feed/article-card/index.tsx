import { useRouter } from 'next/navigation'

type Props = {
	title: string
	bodyPreview: string
	id: string
}

const ArticleCard = ({ title, bodyPreview, id }: Props) => {
	const router = useRouter()

	return (
		<li
			onClick={() => router.push(`/feed/${id}`)}
			className='flex flex-col rounded gap-2 cursor-pointer p-4 border border-gray-700'>
			<h1 className='text-2xl overflow-x-hidden'>{title}</h1>
			<p className='overflow-x-hidden text-xs text-gray-400'>{bodyPreview}</p>
		</li>
	)
}

export default ArticleCard
