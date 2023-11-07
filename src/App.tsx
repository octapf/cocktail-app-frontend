import { Outlet } from 'react-router-dom'
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

export function App() {
	return (
		<Container typeContainer='container-app'>
			<Header />
			<Outlet />
			<Navbar />
		</Container>
	)
}
