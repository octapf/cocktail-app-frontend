import { createContext, useMemo, useState } from 'react'
import { TFilterContext } from '../types/TFilterContext'
import { alcoholEnum } from '../constants/alcoholEnum'
import { fruitEnum } from '../constants/fruitEnum'

export const FilterContext = createContext<TFilterContext>({
	filterAlcoholSelected: alcoholEnum.NONE,
	filterFruitSelected: fruitEnum.NONE,
	isExpandedNavBar: false,
	setFilterAlcoholSelected: () => {},
	setFilterFruitSelected: () => {},
	setIsExpandedNavBar: () => {},
})

type TProviderProps = { children: React.ReactNode }

const FiltersProvider = ({ children }: TProviderProps) => {
	const [filterAlcoholSelected, setFilterAlcoholSelected] =
		useState<alcoholEnum>(alcoholEnum.NONE)
	const [filterFruitSelected, setFilterFruitSelected] = useState<fruitEnum>(
		fruitEnum.NONE
	)

	const [isExpandedNavBar, setIsExpandedNavBar] = useState(false)

	const providerValue = useMemo(
		() => ({
			filterAlcoholSelected,
			filterFruitSelected,
			isExpandedNavBar,
			setFilterAlcoholSelected,
			setFilterFruitSelected,
			setIsExpandedNavBar,
		}),
		[filterAlcoholSelected, filterFruitSelected, isExpandedNavBar]
	)

	return (
		<FilterContext.Provider value={providerValue}>
			{children}
		</FilterContext.Provider>
	)
}

export default FiltersProvider
