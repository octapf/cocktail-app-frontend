import { render } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
	test('render correctly', () => {
		const app = render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		)

		const link = app.getByRole('link', { name: /logo cocktail bar/i })

		expect(link).toBeInTheDocument()
	})
})
