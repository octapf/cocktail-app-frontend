import { createContext, useMemo, useState } from 'react'
import TFilterContext from '../types/TFilterContext'
import { alcoholEnum } from '../constants/alcoholEnum'

export const FilterContext = createContext<TFilterContext>({
	filterSelected: alcoholEnum.NONE,
	setFilterSelected: () => {},
})

type TProviderProps = { children: React.ReactNode }

const FiltersProvider = ({ children }: TProviderProps) => {
	const [filterSelected, setFilterSelected] = useState<alcoholEnum>(
		alcoholEnum.NONE
	)

	const providerValue = useMemo(
		() => ({ filterSelected, setFilterSelected }),
		[filterSelected]
	)

	return (
		<FilterContext.Provider value={providerValue}>
			{children}
		</FilterContext.Provider>
	)
}

export default FiltersProvider
