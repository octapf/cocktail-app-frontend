import { useContext } from 'react'
import { GlobalContext } from './Provider'
import Container from './Container'

const Main = () => {
	const { products } = useContext(GlobalContext)

	const productsContent = products.map((prod) => {
		return (
			<Container typeContainer={prod.name}>
				<h2>{prod.name}</h2>
			</Container>
		)
	})
	return <main>{productsContent}</main>
}

export default Main
