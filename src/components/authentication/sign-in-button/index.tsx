'use client'

import { api } from '@/lib/api'
import type { NDKSigner } from '@nostr-dev-kit/ndk'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useLogin } from 'nostr-hooks'

const SignInButton = () => {
	const router = useRouter()
	const { loginWithExtension } = useLogin()

	const { mutateAsync: signIn } = useMutation<
		{ status: number },
		AxiosError,
		string
	>({
		mutationKey: ['sign-in'],
		mutationFn: async (npub: string) => {
			const response = await api.post('/user-npub', {
				npub,
			})

			return response.data
		},
	})

	const onSignIn = async () => {
		loginWithExtension({
			onSuccess: (signer: NDKSigner) => {
				signer.user().then(async (user) => {
					const response = await signIn(user.npub)

					if (response.status === 200) {
						router.push(`/profile/${user.npub}`)
					}
				})
			},
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
