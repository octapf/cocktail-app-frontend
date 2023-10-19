import { alcoholEnum } from '../constants/alcoholEnum'
import { fruitEnum } from '../constants/fruitEnum'

export type TFilterContext = {
	filterAlcoholSelected: alcoholEnum
	filterFruitSelected: fruitEnum
	isExpandedNavBar: boolean
	setFilterAlcoholSelected: React.Dispatch<React.SetStateAction<alcoholEnum>>
	setFilterFruitSelected: React.Dispatch<React.SetStateAction<fruitEnum>>
	setIsExpandedNavBar: React.Dispatch<React.SetStateAction<boolean>>
}
