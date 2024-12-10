'use client'

import { useNdk } from 'nostr-hooks'
import { NDKNip07Signer, type NDKSigner } from '@nostr-dev-kit/ndk'
import { useRouter } from 'next/navigation'
import { useLogin } from 'nostr-hooks'
import { useEffect } from 'react'

const SignInButton = () => {
	const router = useRouter()
	const { setSigner } = useNdk()
	const { loginWithExtension } = useLogin()

	const onSignIn = async () => {
		const nip07signer = new NDKNip07Signer()

		setSigner(nip07signer)
		loginWithExtension({
			onSuccess: (signer: NDKSigner) => {
				signer.user().then((user) => {
					console.log(user.npub)
					localStorage.setItem('npub', user.npub)
					router.push(`/profile/${user.npub}`)
				})
			},
		})
	}

	useEffect(() => {
		if (localStorage.getItem('npub')) {
			router.push(`/profile/${localStorage.getItem('npub')}`)
		}
	}, [router])

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
