import { ALCOHOL } from '../constants/alcoholEnum'
import { FRUIT } from '../constants/fruitEnum'

export type TFilterContext = {
	filterAlcoholSelected: ALCOHOL
	filterFruitSelected: FRUIT
	isExpandedNavBar: boolean
	setFilterAlcoholSelected: React.Dispatch<React.SetStateAction<ALCOHOL>>
	setFilterFruitSelected: React.Dispatch<React.SetStateAction<FRUIT>>
	setIsExpandedNavBar: React.Dispatch<React.SetStateAction<boolean>>
}
