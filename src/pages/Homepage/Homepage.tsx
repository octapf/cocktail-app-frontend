import { Link } from 'react-router-dom'
import logo from '../../assets/logo-uh.svg'
import { ENDPOINTS } from '../../constants/endpoints'
import Container from '../../components/Container/Container'

const Homepage = () => (
	<>
		<div className='background-home' />
		<Container typeContainer='contanier-logo'>
			<div>
				<Link to={ENDPOINTS.COCKTAIL_LIST}>
					<img className='logo-home' src={logo} alt='logo' />
				</Link>
			</div>
		</Container>
	</>
)

export default Homepage
