import { Link } from 'react-router-dom'
import logo from '../../assets/logo-uh.svg'
import { ENDPOINTS } from '../../constants/endpoints'

import '../../styles/header.css'

const Header = () => (
	<header className='header'>
		<Link to={ENDPOINTS.HOME}>
			<img className='logo-navbar' src={logo} alt='logo' />
			<h1>COCKTAIL BAR</h1>
		</Link>
	</header>
)

export default Header
