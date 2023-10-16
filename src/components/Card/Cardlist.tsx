/* eslint-disable @typescript-eslint/no-explicit-any */
import { useProductContext } from '../../hooks/useProductContext'
import Container from '../Container'
import { useFilterProducts } from '../../hooks/useFilterProduct'

const Cardlist = () => {
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

export default Cardlist
