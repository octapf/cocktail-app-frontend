import { useContext } from 'react'
import { GlobalContext } from './Provider'
import Container from './Container'

const Main = () => {
	const { products } = useContext(GlobalContext)

	const productsContent = products.map((prod) => {
		const productClass = prod.name.replace(/[\s&]/g, '').toLowerCase()
		return (
			<Container key={prod.id} typeContainer={`${productClass} product-card`}>
				<h2>{prod.name}</h2>
			</Container>
		)
	})
	return <main className='main'>{productsContent}</main>
}

export default Main
