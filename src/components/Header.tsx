import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-uh.svg'
import endpoints from '../constants/endpoints'

import '../styles/header.css'

const Header = () => {
	const location = useLocation()

	console.log(location.pathname)

	return (
		<header className='header'>
			<Link to={endpoints.HOME}>
				<img className='logo-navbar' src={logo} alt='logo' />
				<h1>COCKTAIL BAR</h1>
			</Link>
		</header>
	)
}

export default Header
