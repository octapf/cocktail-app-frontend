import { Link } from 'react-router-dom'
import logo from '../../assets/logo-uh.svg'
import { endpoints } from '../../constants/endpoints'
import Container from '../../components/Container/Container'

const Homepage = () => {
	return (
		<>
			<div className='background-home'></div>
			<Container typeContainer='contanier-logo'>
				<div>
					<Link to={endpoints.COCKTAIL_LIST}>
						<img className='logo-home' src={logo} alt='logo' />
					</Link>
				</div>
			</Container>
		</>
	)
}

export default Homepage
