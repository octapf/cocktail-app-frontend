import { useParams } from 'react-router-dom'
import Container from './Container'
import { useProductContext } from '../hooks/useProductContext'
import TIngredients from '../types/TIngredients'

const CardDetail = () => {
	const { id } = useParams()

	const { products } = useProductContext()

	let filteredProduct
	if (id && products.length > 1) {
		filteredProduct = products.filter((prod) => prod._id == id)[0]

		const productIngredients = filteredProduct.ingredients.map(
			(ingredient: TIngredients) => (
				<small className={'ingredient-text'} key={ingredient._id}>
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
				<div className={'history-container'}>
					<small
						className={'card-detail-history'}
					>{`"${filteredProduct.history}"`}</small>
				</div>
				<h4 className={'card-detail-title'}>INGREDIENTS</h4>
				<small className={'card-detail-ingredients'}>
					{productIngredients}
				</small>
			</Container>
		)
	}
}

export default CardDetail
