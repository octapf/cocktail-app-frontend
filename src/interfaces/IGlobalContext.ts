import IProduct from './IProduct'

export default interface IGlobalContext {
	products: IProduct[]
	setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}
