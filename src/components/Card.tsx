import ICard from '../interfaces/ICard'
import Container from './Container'

const Card = ({ product }: ICard) => {
	const productClass = product.name.replace(/[\s&]/g, '').toLowerCase()

	return (
		<Container typeContainer={`container-card ${productClass}`}>
			<div className='background-infocard'></div>
			<Container typeContainer={'container-infocard'}>
				<h5>{product.name}</h5>
				<h5>€ {product.price}</h5>
			</Container>
		</Container>
	)
}

export default Card
