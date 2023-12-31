/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import Container from '../components/Container/Container'

const Profilepage = () => {
	const [user, setUser] = useState<any>([])
	const [profile, setProfile] = useState<any>(null)

	const login = useGoogleLogin({
		onSuccess: (codeResponse) => setUser(codeResponse),
		onError: (error) => console.error('Login Failed:', error),
	})

	useEffect(() => {
		if (user.access_token) {
			const fetchUser = async () => {
				const response = await fetch(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${user.access_token}`,
							Accept: 'application/json',
						},
					}
				)

				const data = await response.json()

				return data
			}

			fetchUser().then((fetchedUser) => {
				setProfile(fetchedUser)
			})
		}
	}, [user])

	const logOut = () => {
		googleLogout()
		setProfile(null)
	}
	return (
		<div>
			<Container typeContainer='container-profile'>
				<div>
					<h2>React Google Login</h2>
					<br />
					<br />
					{profile ? (
						<div>
							<img src={profile.picture} alt='user' />
							<h3>User Logged in</h3>
							<p>Name: {profile.name}</p>
							<p>Email Address: {profile.email}</p>
							<br />
							<br />
							<button type='button' onClick={logOut}>
								Log out
							</button>
						</div>
					) : (
						<button type='button' onClick={() => login()}>
							Sign in with Google 🚀{' '}
						</button>
					)}
				</div>
			</Container>
		</div>
	)
}

export default Profilepage
