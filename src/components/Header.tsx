import logo from '../assets/logo-uh.svg'

import '../styles/header.css'

const Header = () => {
	return (
		<header className='header'>
			<img className='logo' src={logo} alt='logo' />
			<h1>COCKTAIL BAR</h1>
		</header>
	)
}

export default Header
