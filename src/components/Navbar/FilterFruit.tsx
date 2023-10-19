import { useNavigate, useSearchParams } from 'react-router-dom'
import { removeSpaces } from '../../utils/removeSpaces'
import { FilterContext } from '../../contexts/FiltersProvider'
import { useContext } from 'react'
import { endpoints } from '../../constants/endpoints'
import { queryParams } from '../../constants/queryParams'
import { fruitEnum } from '../../constants/fruitEnum'
import Container from '../Container'
import { capitalize } from '../../utils/capitalize'

type TFilterFruitProps = {
	fruitName: fruitEnum
}

const FilterFruit = ({ fruitName }: TFilterFruitProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { filterFruitSelected, setFilterFruitSelected } =
		useContext(FilterContext)

	const navigate = useNavigate()

	const handleFruitFilter = (fruit: fruitEnum) => {
		navigate(endpoints.COCKTAIL_LIST)
		if (searchParams.get(queryParams.FRUIT) == fruit) {
			searchParams.delete(queryParams.FRUIT)
		} else {
			searchParams.set(queryParams.FRUIT, fruit)
		}
		setSearchParams(searchParams)
	}

	return (
		<Container typeContainer={'container-fruit-filter'}>
			<small
				className={`${removeSpaces(fruitName)}-filter${
					filterFruitSelected == fruitName ? `${' '}fruit-selected` : ''
				}`}
				onClick={() => {
					handleFruitFilter(fruitName)
					setFilterFruitSelected((prev: fruitEnum) => {
						if (prev == fruitName) {
							prev = fruitEnum.NONE
						} else {
							prev = fruitName
						}

						return prev
					})
				}}
			></small>
			{capitalize(fruitName)}
		</Container>
	)
}

export default FilterFruit
