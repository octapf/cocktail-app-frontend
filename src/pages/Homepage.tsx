import { Link } from 'react-router-dom'
import logo from '../assets/logo-uh.svg'
import { endpoints } from '../constants/endpoints'

const Homepage = () => {
	return (
		<div>
			<Link to={endpoints.COCKTAIL_LIST}>
				<img className='logo-home' src={logo} alt='logo' />
			</Link>
		</div>
	)
}

export default Homepage
