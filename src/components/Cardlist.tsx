import { useContext } from 'react'
import { GlobalContext } from './Provider'
import { Link } from 'react-router-dom'
import Card from './Card'
import endpoints from '../constants/endpoints'
import Container from './Container'

const Cardlist = () => {
	const { products } = useContext(GlobalContext)

	if (products.length > 1) {
		const productsContent = products.map((prod) => {
			return (
				<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
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
	} else {
		return <>Loading</>
	}
}

export default Cardlist
