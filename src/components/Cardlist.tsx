/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react'
import { GlobalContext } from './Provider'
import { Link, useSearchParams } from 'react-router-dom'
import Card from './Card'
import endpoints from '../constants/endpoints'
import Container from './Container'

const Cardlist = () => {
	const { products } = useContext(GlobalContext)

	const [searchParams] = useSearchParams()

	const searchParam = searchParams.get('search')
	const alcoholParam = searchParams.get('alcohol')

	if (products.length > 1) {
		let productsContent: any[] = []
		if (searchParam !== null && searchParam.length > 0) {
			console.log('SEARCH PARAM')

			productsContent = products
				.filter((prod) =>
					prod.name.toLowerCase().match(searchParam.toLowerCase())
				)
				.map((prod) => {
					return (
						<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
							<Card productName={prod.name} />
						</Link>
					)
				})
		}

		if (alcoholParam !== null) {
			const filteredByAlcohol = products.filter((prod) =>
				prod.ingredients.some((el) =>
					el.name.toLowerCase().match(new RegExp(`^${alcoholParam}$`))
				)
			)

			console.log(filteredByAlcohol)
			console.log('ALCOHOL PARAM')

			productsContent = filteredByAlcohol.map((prod) => {
				return (
					<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
						<Card productName={prod.name} />
					</Link>
				)
			})
		}

		if (searchParam == null && alcoholParam == null) {
			console.log('NO PARAM')

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
