import { useProductContext } from '../hooks/useProductContext'
import Container from '../components/Container/Container'
import { useFilterProducts } from '../hooks/useFilterProduct'

export const ProductListpage = () => {
	const { products } = useProductContext()

	const productsContent = useFilterProducts(products)

	return (
		<main className='main'>
			{products.length < 1 ? (
				<>Loading</>
			) : (
				<Container typeContainer={'container-cardlist'}>
					{productsContent}
				</Container>
			)}
		</main>
	)
}
