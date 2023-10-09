import { useContext } from 'react'
import { GlobalContext } from './Provider'
import { Link, useSearchParams } from 'react-router-dom'
import Card from './Card'
import endpoints from '../constants/endpoints'
import Container from './Container'

const Cardlist = () => {
	const { products } = useContext(GlobalContext)

	const [searchParams] = useSearchParams()

	const searchString = searchParams.get('search')

	if (products.length > 1) {
		let productsContent
		if (searchString !== null && searchString.length > 0) {
			productsContent = products
				.filter((prod) =>
					prod.name.toLowerCase().match(searchString.toLowerCase())
				)
				.map((prod) => {
					return (
						<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
							<Card productName={prod.name} />
						</Link>
					)
				})
		} else {
			productsContent = products.map((prod) => {
				return (
					<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
						<Card productName={prod.name} />
					</Link>
				)
			})
		}

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
