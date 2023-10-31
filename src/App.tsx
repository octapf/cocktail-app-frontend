import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { useLocation, Outlet } from 'react-router-dom'
import { endpoints } from './constants/endpoints'
import ProductProvider from './contexts/ProductProvider'
import FiltersProvider from './contexts/FiltersProvider'

function App() {
	const location = useLocation()

	return (
		<ProductProvider>
			<FiltersProvider>
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
			</FiltersProvider>
		</ProductProvider>
	)
}

export default App
