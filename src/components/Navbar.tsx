import { Link } from 'react-router-dom'
import endpoints from '../constants/endpoints'
import '../styles/navbar.css'

const NavBar = () => {
	return (
		<nav className='navbar'>
			<Link to={endpoints.COCKTAIL_LIST}>
				<i className='fa-solid fa-house'></i>
			</Link>
			<Link to={endpoints.FAVORITES}>
				<i className='fa-solid fa-heart'></i>
			</Link>
			<Link to={endpoints.PROFILE}>
				<i className='fa-regular fa-user'></i>
			</Link>
		</nav>
	)
}

export default NavBar
