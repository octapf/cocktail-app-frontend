import TProduct from './TProduct'

type TProductContext = {
	products: TProduct[]
	setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>
}
export default TProductContext
