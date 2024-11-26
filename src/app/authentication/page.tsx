import SignInButton from '@/components/authentication/sign-in-button'

export default async function Authentication() {
	return (
		<div className='flex flex-col items-center h-full gap-8 justify-center'>
			<h1 className='text-4xl font-bold text-white'>Blogstr</h1>
			<SignInButton />
		</div>
	)
}
