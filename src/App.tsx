import Container from './components/Container'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import endpoints from './constants/endpoints'

function App() {
	const location = useLocation()

	if (location.pathname == endpoints.HOME) {
		return (
			<>
				<div className='background-home'></div>
				<Container typeContainer='contanier-logo'>
					<Outlet />
				</Container>
			</>
		)
	}

	return (
		<Container typeContainer={'container-app'}>
			<Header />
			<Outlet />
			<Navbar />
		</Container>
	)
}

export default App
