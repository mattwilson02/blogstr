type Props = {
	title: string
	bodyPreview: string
}

const PostCard = ({ title, bodyPreview }: Props) => {
	return (
		<li className='flex flex-col rounded gap-2 cursor-pointer p-4 border border-gray-700'>
			<h1 className='text-2xl overflow-x-hidden'>{title}</h1>
			<p className='overflow-x-hidden text-xs text-gray-400'>{bodyPreview}</p>
		</li>
	)
}

export default PostCard
