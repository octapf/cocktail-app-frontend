import { useParams } from 'react-router-dom'
import Container from './Container'
import { useContext } from 'react'
import { GlobalContext } from './Provider'

const CardDetail = () => {
	const { id } = useParams()

	const { products } = useContext(GlobalContext)

	let filteredProduct
	if (id) {
		console.log(id)

		filteredProduct = products.filter((prod) => prod.id == parseInt(id))[0]

		const productClass = filteredProduct.name
			.replace(/[\s&]/g, '')
			.toLowerCase()

		return (
			<Container typeContainer={`container-card-detail ${productClass}`}>
				<h1>{filteredProduct.name}</h1>
			</Container>
		)
	}

	console.log(filteredProduct)
}

export default CardDetail
