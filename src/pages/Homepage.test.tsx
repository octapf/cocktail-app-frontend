import { screen, render } from '@testing-library/react'
import Homepage from './Homepage'

describe('homepage', () => {
	test('renders correctly', () => {
		render(<Homepage />)

		const logo = screen.getByRole('image')

		expect(logo).toBeInTheDocument()
	})
})
