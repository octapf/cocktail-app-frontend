import Container from './components/Container'
import Header from './components/Header'
import Navbar from './components/Navbar/Navbar'
import { useLocation, Outlet } from 'react-router-dom'
import endpoints from './constants/endpoints'
import Provider from './contexts/Provider'

function App() {
	const location = useLocation()

	return (
		<Provider>
			{location.pathname == endpoints.HOME ? (
				<>
					<div className='background-home'></div>
					<Container typeContainer='contanier-logo'>
						<Outlet />
					</Container>
				</>
			) : (
				<Container typeContainer={'container-app'}>
					<Header />
					<Outlet />
					<Navbar />
				</Container>
			)}
		</Provider>
	)
}

export default App
