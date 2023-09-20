import { useParams } from 'react-router-dom'
import Container from './Container'
import { useContext } from 'react'
import { GlobalContext } from './Provider'

const CardDetail = () => {
	const { id } = useParams()

	const { products } = useContext(GlobalContext)

	let filteredProduct
	if (id) {
		filteredProduct = products.filter((prod) => prod.id == parseInt(id))[0]

		const productIngredients = filteredProduct.ingredients.map(
			(ingredient, i) => (
				<small key={i} className={'card-detail-ingredients'}>
					{ingredient.quantity} {ingredient.name}
				</small>
			)
		)

		const productClass = filteredProduct.name
			.replace(/[\s&]/g, '')
			.toLowerCase()

		return (
			<Container typeContainer={`container-card-detail ${productClass}`}>
				<h1 className='card-detail-maintitle'>
					{filteredProduct.name.toUpperCase()}
				</h1>
				<small
					className={'card-detail-history'}
				>{`"${filteredProduct.history}"`}</small>
				<h4 className={'card-detail-title'}>INGREDIENTS</h4>
				{productIngredients}
			</Container>
		)
	}

	console.log(filteredProduct)
}

export default CardDetail
