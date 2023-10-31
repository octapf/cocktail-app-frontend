import { screen, render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
	test('renders correctly', () => {
		render(<Footer />)

		const footer = screen.getByRole('footer')

		expect(footer).toBeInTheDocument()
	})
})
