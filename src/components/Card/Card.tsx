import { TCard } from '../../types/TCard'
import Container from '../Container/Container'

export const Card = ({ productName }: TCard) => {
	const productClass = productName.replace(/[\s&]/g, '').toLowerCase()

	return (
		<Container typeContainer={`container-card ${productClass}`}>
			<div className='background-infocard' />
			<Container typeContainer='container-infocard'>
				<h5>{productName}</h5>
			</Container>
		</Container>
	)
}
