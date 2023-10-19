import { alcoholEnum } from '../constants/alcoholEnum'

type TFilterContext = {
	filterSelected: alcoholEnum
	setFilterSelected: React.Dispatch<React.SetStateAction<alcoholEnum>>
}

export default TFilterContext
