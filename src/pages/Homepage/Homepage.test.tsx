import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage'

describe('Homepage', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Homepage />
			</BrowserRouter>
		)
	})
	test('renders correctly', async () => {
		const logo = screen.getByRole('img', {
			name: /logo/i,
		})

		expect(logo).toBeInTheDocument()
	})
})
