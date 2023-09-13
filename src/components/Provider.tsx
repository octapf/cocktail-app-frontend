import { createContext, useState } from 'react'
import productsData from '../data/products.json'
import IGlobalContext from '../interfaces/IGlobalContext'
import IProduct from '../interfaces/IProduct'

export const GlobalContext = createContext<IGlobalContext>({
	products: productsData,
	setProducts: () => {},
})

const Provider = ({ children }: { children: React.ReactNode }) => {
	const [products, setProducts] = useState<IProduct[]>(productsData)

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
