import { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { capitalize } from '../../../utils/capitalize'
import { removeSpaces } from '../../../utils/removeSpaces'
import { ALCOHOL } from '../../../constants/alcoholEnum'
import { FilterContext } from '../../../contexts/FiltersProvider'
import { ENDPOINTS } from '../../../constants/endpoints'
import { QUERYPARAMS } from '../../../constants/queryParams'

type TFilterAlcoholProps = {
	alcoholName: ALCOHOL
}

export const FilterAlcohol = ({ alcoholName }: TFilterAlcoholProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { filterAlcoholSelected, setFilterAlcoholSelected } =
		useContext(FilterContext)

	const navigate = useNavigate()

	const handleAlcoholFilter = (alcohol: ALCOHOL) => {
		navigate(ENDPOINTS.COCKTAIL_LIST)
		if (searchParams.get(QUERYPARAMS.ALCOHOL) === alcohol) {
			searchParams.delete(QUERYPARAMS.ALCOHOL)
		} else {
			searchParams.set(QUERYPARAMS.ALCOHOL, alcohol)
		}
		setSearchParams(searchParams)
	}

	return (
		<button
			type='button'
			className={`${removeSpaces(alcoholName)}-filter${
				filterAlcoholSelected === alcoholName ? `${' '}alcohol-selected` : ''
			}`}
			tabIndex={0}
			onKeyDown={() => {
				handleAlcoholFilter(alcoholName)
				setFilterAlcoholSelected((prev: ALCOHOL) => {
					if (prev === alcoholName) {
						return ALCOHOL.NONE
					}
					return alcoholName
				})
			}}
			onClick={() => {
				handleAlcoholFilter(alcoholName)
				setFilterAlcoholSelected((prev: ALCOHOL) => {
					if (prev === alcoholName) {
						return ALCOHOL.NONE
					}
					return alcoholName
				})
			}}
		>
			{capitalize(alcoholName)}
		</button>
	)
}
