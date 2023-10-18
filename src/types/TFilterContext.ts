import productsEnum from '../constants/alcoholEnum'

type TFilterContext = {
	filterSelected: productsEnum
	setFilterSelected: React.Dispatch<React.SetStateAction<productsEnum>>
}

export default TFilterContext
