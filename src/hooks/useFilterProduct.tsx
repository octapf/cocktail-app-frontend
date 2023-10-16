import { Link, useSearchParams } from 'react-router-dom'
import TProduct from '../types/TProduct'
import Card from '../components/Card/Card'
import endpoints from '../constants/endpoints'

export const useFilterProducts = (products: TProduct[]) => {
	const [searchParams] = useSearchParams()

	const searchParam = searchParams.get('search')
	const alcoholParam = searchParams.get('alcohol')

	let productsContent = products

	if (searchParam !== null && searchParam.length > 0) {
		productsContent = productsContent.filter((prod: TProduct) =>
			prod.name.toLowerCase().match(searchParam.toLowerCase())
		)
	}

	if (alcoholParam !== null) {
		productsContent = productsContent.filter((prod: TProduct) =>
			prod.ingredients.some((el) =>
				el.name.toLowerCase().match(new RegExp(`^${alcoholParam}$`))
			)
		)
	}

	const result = productsContent?.map((prod: TProduct) => {
		return (
			<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
				<Card productName={prod.name} />
			</Link>
		)
	})

	return result
}
