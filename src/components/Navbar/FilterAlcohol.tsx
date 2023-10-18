import { useNavigate, useSearchParams } from 'react-router-dom'
import { capitalize } from '../../utils/capitalize'
import { removeSpaces } from '../../utils/removeSpaces'
import productsEnum from '../../constants/productsEnum'
import { FilterContext } from '../../contexts/FiltersProvider'
import { useContext } from 'react'
import endpoints from '../../constants/endpoints'
import queryParams from '../../constants/queryParams'

type TFilterAlcoholProps = {
	productName: productsEnum
}

const FilterAlcohol = ({ productName }: TFilterAlcoholProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { filterSelected, setFilterSelected } = useContext(FilterContext)

	const navigate = useNavigate()

	const handleAlcoholFilter = (alcohol: productsEnum) => {
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
			className={`${removeSpaces(productName)}-filter${
				filterSelected == productName ? `${' '}alcohol-selected` : ''
			}`}
			onClick={() => {
				handleAlcoholFilter(productName)
				setFilterSelected((prev) => {
					prev == productName
						? (prev = productsEnum.NONE)
						: (prev = productName)

					return prev
				})
			}}
		>
			{capitalize(productName)}
		</small>
	)
}

export default FilterAlcohol
