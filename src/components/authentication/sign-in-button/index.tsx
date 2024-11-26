'use client'

import { useNdk } from '@/hooks/useNdk'
import { NDKNip07Signer } from '@nostr-dev-kit/ndk'
import { useRouter } from 'next/navigation'

const SignInButton = () => {
	const router = useRouter()
	const { loginWithExtension, setSigner } = useNdk()

	const onSignIn = async () => {
		const nip07signer = new NDKNip07Signer()

		setSigner(nip07signer)
		loginWithExtension({
			onSuccess: (signer) =>
				signer.user().then((user) => {
					router.push(`/profile/${user.npub}`)
				}),
		})
	}

	return (
		<button
			onClick={onSignIn}
			type='button'
			className='p-2 bg-purple-700 active:bg-purple-800 hover:bg-purple-900 rounded-md min-w-48'
		>
			Sign In
		</button>
	)
}

export default SignInButton
