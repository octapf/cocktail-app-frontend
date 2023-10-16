import { createContext, useEffect, useMemo, useState } from 'react'
import TProductContext from '../types/TProductContext'
import TProduct from '../types/TProduct'

export const GlobalContext = createContext<TProductContext>({
	products: [
		{
			_id: '',
			user: '',
			name: '',
			type: '',
			price: 0,
			ingredients: [{ name: '', quantity: '', _id: '' }],
			method: '',
			glass: '',
			ice: '',
			garnish: '',
			optional: [''],
			history: '',
		},
	],
	setProducts: () => {},
})

const Provider = ({ children }: { children: React.ReactNode }) => {
	const URL_PRODUCTS = 'https://cocktailapp-backend.vercel.app/products'

	const [products, setProducts] = useState<TProduct[]>([
		{
			_id: '',
			user: '',
			name: '',
			type: '',
			price: 0,
			ingredients: [{ name: '', quantity: '', _id: '' }],
			method: '',
			glass: '',
			ice: '',
			garnish: '',
			optional: [''],
			history: '',
		},
	])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(`${URL_PRODUCTS}`)

			const data = await response.json()

			setProducts(data)
		}

		fetchProducts()
	}, [])

	const providerValue = useMemo(() => ({ products, setProducts }), [products])

	return (
		<GlobalContext.Provider value={providerValue}>
			{children}
		</GlobalContext.Provider>
	)
}

export default Provider
