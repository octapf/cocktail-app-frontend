import { Link, useSearchParams } from 'react-router-dom'
import { TProduct } from '../types/TProduct'
import { Card } from '../components/Card/Card'
import { ENDPOINTS } from '../constants/endpoints'
import { QUERYPARAMS } from '../constants/queryParams'

export const useFilterProducts = (products: TProduct[]) => {
	const [searchParams] = useSearchParams()

	const searchParam = searchParams.get(QUERYPARAMS.SEARCH)
	const alcoholParam = searchParams.get(QUERYPARAMS.ALCOHOL)
	const fruitParam = searchParams.get(QUERYPARAMS.FRUIT)

	let productsContent = products

	if (searchParam !== null) {
		productsContent = productsContent.filter((prod: TProduct) =>
			prod.name.toLowerCase().match(searchParam.toLowerCase())
		)
	}

	if (alcoholParam !== null) {
		productsContent = productsContent.filter((prod: TProduct) =>
			prod.ingredients.some((el) =>
				el.name.toLowerCase().match(new RegExp(`${alcoholParam}`))
			)
		)
	}

	if (fruitParam !== null) {
		productsContent = productsContent.filter((prod: TProduct) =>
			prod.ingredients.some((el) =>
				el.name.toLowerCase().match(new RegExp(`${fruitParam}`))
			)
		)
	}

	const result = productsContent?.map((prod: TProduct) => (
		<Link key={prod._id} to={`${ENDPOINTS.COCKTAIL_LIST}/${prod._id}`}>
			<Card productName={prod.name} />
		</Link>
	))

	return result
}
