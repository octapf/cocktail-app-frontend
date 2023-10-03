import { createContext, useEffect, useState } from 'react'
import IGlobalContext from '../interfaces/IGlobalContext'
import IProduct from '../interfaces/IProduct'

export const GlobalContext = createContext<IGlobalContext>({
	products: [
		{
			_id: '',
			user: '',
			name: '',
			type: '',
			price: 0,
			ingredients: [{ name: '', quantity: '' }],
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
	const URL_PRODUCTS =
		'https://cocktail-app-backend-qibnll7xh-octavio-frangipanis-projects.vercel.app/products'

	const [products, setProducts] = useState<IProduct[]>([
		{
			_id: '',
			user: '',
			name: '',
			type: '',
			price: 0,
			ingredients: [{ name: '', quantity: '' }],
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

	return (
		<GlobalContext.Provider
			value={{
				products,
				setProducts,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}

export default Provider
