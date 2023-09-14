import { useContext } from 'react'
import { GlobalContext } from './Provider'
import { Link } from 'react-router-dom'
import Card from './Card'
import Container from './Container'

const Cardlist = () => {
	const { products } = useContext(GlobalContext)

	const productsContent = products.map((prod) => {
		const productClass = prod.name.replace(/[\s&]/g, '').toLowerCase()
		return (
			<Link key={prod.id} to={`/${productClass}`}>
				<Card product={prod} />
			</Link>
		)
	})
	return (
		<main className='main'>
			<Container typeContainer={'container-cardlist'}>
				{productsContent}
			</Container>
		</main>
	)
}

export default Cardlist
