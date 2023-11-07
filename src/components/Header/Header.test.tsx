import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
	const MockHeader = () => (
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	)

	beforeEach(() => {
		render(<MockHeader />)
	})

	test('renders correctly', () => {
		const link = screen.getByRole('link', { name: /logo cocktail bar/i })

		expect(link).toBeInTheDocument()
	})

	test('should render as visible', () => {
		const link = screen.getByRole('link', { name: /logo cocktail bar/i })
		expect(link).toBeVisible()
	})

	/* test('should not be on the DOM when clicked', () => {
		const link = screen.getByRole('link', { name: /logo cocktail bar/i })

		fireEvent.click(link)

		expect(link).not.toBeInTheDocument()
	}) */

	test('contains an image tag with class "logo-navbar"', () => {
		const image = screen.getByRole('img', { name: /logo/i })

		expect(image).toContainHTML('img')
		expect(image).toHaveClass('logo-navbar')
	})

	test('contains an h1 tag', () => {
		const heading = screen.getByRole('heading', { name: /cocktail bar/i })

		expect(heading).toContainHTML('h1')
	})
})
