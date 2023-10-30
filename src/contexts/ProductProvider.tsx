import { createContext, useEffect, useMemo, useState } from 'react'
import { TProductContext } from '../types/TProductContext'
import { TProduct } from '../types/TProduct'

export const ProductContext = createContext<TProductContext | null>({
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

type TProviderProps = { children: React.ReactNode }

const Provider = ({ children }: TProviderProps) => {
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
		<ProductContext.Provider value={providerValue}>
			{children}
		</ProductContext.Provider>
	)
}

export default Provider
