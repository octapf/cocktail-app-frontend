import { createContext, useMemo, useState } from 'react'
import TFilterContext from '../types/TFilterContext'
import productsEnum from '../constants/productsEnum'

export const FilterContext = createContext<TFilterContext>({
	filterSelected: productsEnum.NONE,
	setFilterSelected: () => {},
})

type TProviderProps = { children: React.ReactNode }

const FiltersProvider = ({ children }: TProviderProps) => {
	const [filterSelected, setFilterSelected] = useState<productsEnum>(
		productsEnum.NONE
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
