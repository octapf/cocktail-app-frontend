import { screen, render, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import '@testing-library/dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Navbar'

const mockClick = vi.fn()

describe('Navbar', async () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		)
	})

	test('renders correctly', () => {
		const loupe = screen.getByTestId('loupe')

		expect(loupe).toBeInTheDocument()
	})

	test('should expand when loupe gets clicked', async () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		)

		const nav = await screen.findAllByTestId('nav')
		await act(async () => {
			userEvent.click((await screen.findAllByTestId('loupe'))[0])
		})

		await waitFor(
			() => {
				expect(nav[0]).toHaveClass('navbar-expand')
			},
			{ timeout: 2000 }
		)
	})
})
