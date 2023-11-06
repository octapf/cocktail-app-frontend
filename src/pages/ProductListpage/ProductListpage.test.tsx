import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductListpage } from './ProductListpage'
import NavBar from '../../components/Navbar/Navbar'

describe('ProductListpage', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<ProductListpage />
				<NavBar />
			</BrowserRouter>
		)
	})

	test('renders correctly', () => {})
})
