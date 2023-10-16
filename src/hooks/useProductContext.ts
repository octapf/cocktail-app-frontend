import { useContext } from 'react'
import { GlobalContext } from '../contexts/Provider'

export const useProductContext = () => {
	const context = useContext(GlobalContext)

	if (!context) {
		throw new Error(
			'useProductContext must be used within a ProductContextProvider'
		)
	}
	return context
}
