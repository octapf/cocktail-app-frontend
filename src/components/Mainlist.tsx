import { useContext } from 'react'
import { GlobalContext } from './Provider'
import Container from './Container'
import { Link } from 'react-router-dom'

const Mainlist = () => {
	const { products } = useContext(GlobalContext)

	const productsContent = products.map((prod) => {
		const productClass = prod.name.replace(/[\s&]/g, '').toLowerCase()
		return (
			<Link key={prod.id} to={`/${productClass}`}>
				<Container typeContainer={`${productClass} product-card`}>
					<h2>{prod.name}</h2>
				</Container>
			</Link>
		)
	})
	return <main className='main'>{productsContent}</main>
}

export default Mainlist
