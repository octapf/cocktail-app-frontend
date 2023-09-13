import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
	return (
		<Container typeContainer={'container-app'}>
			<Header />
			<Main />
			<Footer />
		</Container>
	)
}

export default App
