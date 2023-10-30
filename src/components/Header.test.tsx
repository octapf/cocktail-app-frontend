import { screen, render } from '@testing-library/react'
import Header from './Header'
import { ProductContext } from '../contexts/ProductProvider'
import { FilterContext } from '../contexts/FiltersProvider'

describe('Header', () => {
	test('render correctly', () => {
		render(
			<ProductContext.Provider value={null}>
				<FilterContext.Provider value={null}>
					<Header />
				</FilterContext.Provider>
			</ProductContext.Provider>
		)

		const header = screen.getByText('COCKTAIL')

		expect(header).toBeInTheDocument()
	})
})
