import { createContext, useMemo, useState } from 'react'
import { TFilterContext } from '../types/TFilterContext'
import { ALCOHOL } from '../constants/alcoholEnum'
import { FRUIT } from '../constants/fruitEnum'

export const FilterContext = createContext<TFilterContext>({
	filterAlcoholSelected: ALCOHOL.NONE,
	filterFruitSelected: FRUIT.NONE,
	isExpandedNavBar: false,
	setFilterAlcoholSelected: () => {},
	setFilterFruitSelected: () => {},
	setIsExpandedNavBar: () => {},
})

type TProviderProps = { children: React.ReactNode }

const FiltersProvider = ({ children }: TProviderProps) => {
	const [filterAlcoholSelected, setFilterAlcoholSelected] = useState<ALCOHOL>(
		ALCOHOL.NONE
	)
	const [filterFruitSelected, setFilterFruitSelected] = useState<FRUIT>(
		FRUIT.NONE
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
