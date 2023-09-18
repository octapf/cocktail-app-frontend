import Container from './components/Container'
import Footer from './components/Footer'
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
				<Container typeContainer={'container-home'}>
					<Outlet />
				</Container>
			</>
		)
	}

	return (
		<Container typeContainer={'container-app'}>
			<Header />
			<Outlet />
			<Footer />
			<Navbar />
		</Container>
	)
}

export default App
