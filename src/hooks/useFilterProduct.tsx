import { Link, useSearchParams } from 'react-router-dom'
import TProduct from '../types/TProduct'
import Card from '../components/Card'
import endpoints from '../constants/endpoints'

const useFilterProducts = (products: TProduct[]) => {
	const [searchParams] = useSearchParams()

	const searchParam = searchParams.get('search')
	const alcoholParam = searchParams.get('alcohol')

	let productsContent = products

	if (searchParam !== null && searchParam.length > 0) {
		console.log('SEARCH PARAM')

		productsContent = productsContent.filter((prod: TProduct) =>
			prod.name.toLowerCase().match(searchParam.toLowerCase())
		)
	}

	if (alcoholParam !== null) {
		console.log('ALCOHOL PARAM')

		productsContent = productsContent.filter((prod: TProduct) =>
			prod.ingredients.some((el) =>
				el.name.toLowerCase().match(new RegExp(`^${alcoholParam}$`))
			)
		)
	}

	console.log(productsContent)

	const result = productsContent?.map((prod: TProduct) => {
		return (
			<Link key={prod._id} to={`${endpoints.COCKTAIL_LIST}/${prod._id}`}>
				<Card productName={prod.name} />
			</Link>
		)
	})

	return result
}

export default useFilterProducts
