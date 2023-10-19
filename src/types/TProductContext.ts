import { TProduct } from './TProduct'

export type TProductContext = {
	products: TProduct[]
	setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>
}
