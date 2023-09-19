import { useContext } from 'react'
import { GlobalContext } from './Provider'
import { Link } from 'react-router-dom'
import Card from './Card'
import Container from './Container'
import endpoints from '../constants/endpoints'

const Cardlist = () => {
	const { products } = useContext(GlobalContext)

	const productsContent = products.map((prod) => {
		return (
			<Link key={prod.id} to={`${endpoints.COCKTAIL_LIST}/${prod.id}`}>
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
