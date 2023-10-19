import { useNavigate, useSearchParams } from 'react-router-dom'
import { capitalize } from '../../utils/capitalize'
import { removeSpaces } from '../../utils/removeSpaces'
import { alcoholEnum } from '../../constants/alcoholEnum'
import { FilterContext } from '../../contexts/FiltersProvider'
import { useContext } from 'react'
import { endpoints } from '../../constants/endpoints'
import { queryParams } from '../../constants/queryParams'

type TFilterAlcoholProps = {
	alcoholName: alcoholEnum
}

const FilterAlcohol = ({ alcoholName }: TFilterAlcoholProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { filterAlcoholSelected, setFilterAlcoholSelected } =
		useContext(FilterContext)

	const navigate = useNavigate()

	const handleAlcoholFilter = (alcohol: alcoholEnum) => {
		navigate(endpoints.COCKTAIL_LIST)
		if (searchParams.get(queryParams.ALCOHOL) == alcohol) {
			searchParams.delete(queryParams.ALCOHOL)
		} else {
			searchParams.set(queryParams.ALCOHOL, alcohol)
		}
		setSearchParams(searchParams)
	}

	return (
		<small
			className={`${removeSpaces(alcoholName)}-filter${
				filterAlcoholSelected == alcoholName ? `${' '}alcohol-selected` : ''
			}`}
			onClick={() => {
				handleAlcoholFilter(alcoholName)
				setFilterAlcoholSelected((prev: alcoholEnum) => {
					prev == alcoholName ? (prev = alcoholEnum.NONE) : (prev = alcoholName)

					return prev
				})
			}}
		>
			{capitalize(alcoholName)}
		</small>
	)
}

export default FilterAlcohol
