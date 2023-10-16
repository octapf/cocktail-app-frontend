import { Link, useSearchParams } from 'react-router-dom'
import TProduct from '../types/TProduct'
import Card from '../components/Card'
import endpoints from '../constants/endpoints'

const useFilterProducts = (products: TProduct[]) => {
	const [searchParams] = useSearchParams()

	const searchParam = searchParams.get('search')
	const alcoholParam = searchParams.get('alcohol')

	let productsContent: React.ReactNode[] = []
	if (searchParam !== null && searchParam.length > 0) {
		console.log('SEARCH PARAM')

		productsContent = products
			.filter((prod: TProduct) =>
				prod.name.toLowerCase().match(searchParam.toLowerCase())
			)
			.map((prod: TProduct) => {
				return (
					<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
						<Card productName={prod.name} />
					</Link>
				)
			})
	}

	if (alcoholParam !== null) {
		const filteredByAlcohol = products.filter((prod: TProduct) =>
			prod.ingredients.some((el) =>
				el.name.toLowerCase().match(new RegExp(`^${alcoholParam}$`))
			)
		)

		console.log(filteredByAlcohol)
		console.log('ALCOHOL PARAM')

		productsContent = filteredByAlcohol.map((prod: TProduct) => {
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

	return productsContent
}

export default useFilterProducts
