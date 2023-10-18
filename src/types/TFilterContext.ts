import productsEnum from '../constants/productsEnum'

type TFilterContext = {
	filterSelected: productsEnum
	setFilterSelected: React.Dispatch<React.SetStateAction<productsEnum>>
}

export default TFilterContext
