import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<Container typeContainer={'container-app'}>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	)
}

export default App
