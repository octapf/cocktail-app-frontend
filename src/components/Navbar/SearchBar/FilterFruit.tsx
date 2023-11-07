import { useContext } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { removeSpaces } from '../../../utils/removeSpaces'
import { FilterContext } from '../../../contexts/FiltersProvider'
import { ENDPOINTS } from '../../../constants/endpoints'
import { QUERYPARAMS } from '../../../constants/queryParams'
import { FRUIT } from '../../../constants/fruitEnum'
import Container from '../../Container/Container'
import { capitalize } from '../../../utils/capitalize'

type TFilterFruitProps = {
	fruitName: FRUIT
}

const FilterFruit = ({ fruitName }: TFilterFruitProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { filterFruitSelected, setFilterFruitSelected } =
		useContext(FilterContext)

	const navigate = useNavigate()

	const handleFruitFilter = (fruit: FRUIT) => {
		navigate(ENDPOINTS.COCKTAIL_LIST)
		if (searchParams.get(QUERYPARAMS.FRUIT) === fruit) {
			searchParams.delete(QUERYPARAMS.FRUIT)
		} else {
			searchParams.set(QUERYPARAMS.FRUIT, fruit)
		}
		setSearchParams(searchParams)
	}

	return (
		<Container typeContainer='container-fruit-filter'>
			<button
				type='button'
				aria-label='fruit-filter'
				className={`${removeSpaces(fruitName)}-filter${
					filterFruitSelected === fruitName ? `${' '}fruit-selected` : ''
				}`}
				onClick={() => {
					handleFruitFilter(fruitName)
					setFilterFruitSelected((prev: FRUIT) => {
						if (prev === fruitName) {
							return FRUIT.NONE
						}
						return fruitName
					})
				}}
			/>
			{capitalize(fruitName)}
		</Container>
	)
}

export default FilterFruit
