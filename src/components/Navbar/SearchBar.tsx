import { RefObject } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { alcoholEnum } from '../../constants/alcoholEnum'
import FilterAlcohol from './FilterAlcohol'
import { endpoints } from '../../constants/endpoints'
import { queryParams } from '../../constants/queryParams'
import { fruitEnum } from '../../constants/fruitEnum'
import FilterFruit from './FilterFruit'

type TSearchBarPros = {
	isExpanded: boolean
	searchInput: RefObject<HTMLInputElement>
}

const SearchBar = ({ isExpanded, searchInput }: TSearchBarPros) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const navigate = useNavigate()

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		navigate(endpoints.COCKTAIL_LIST)
		if (e.target.value === '') {
			searchParams.delete(queryParams.SEARCH)
			setSearchParams(searchParams)
		} else {
			searchParams.set(queryParams.SEARCH, e.target.value)
			setSearchParams(searchParams)
		}
	}

	return (
		<div className={`container-filters ${!isExpanded ? 'hidden' : ''}`}>
			<div className='carousel alcohol-filter'>
				<FilterAlcohol alcoholName={alcoholEnum.VODKA} />
				<FilterAlcohol alcoholName={alcoholEnum.TEQUILA} />
				<FilterAlcohol alcoholName={alcoholEnum.LIGHT_RUM} />
				<FilterAlcohol alcoholName={alcoholEnum.WHISKY} />
				<FilterAlcohol alcoholName={alcoholEnum.GIN} />
				<FilterAlcohol alcoholName={alcoholEnum.TRIPLE_SEC} />
				<FilterAlcohol alcoholName={alcoholEnum.CACHAÇA} />
			</div>
			<div className='carousel fruit-filter'>
				<FilterFruit fruitName={fruitEnum.COCONUT} />
				<FilterFruit fruitName={fruitEnum.PEACH} />
				<FilterFruit fruitName={fruitEnum.ORANGE} />
				<FilterFruit fruitName={fruitEnum.TOMATO} />
				<FilterFruit fruitName={fruitEnum.MINT} />
				<FilterFruit fruitName={fruitEnum.PINEAPPLE} />
				<FilterFruit fruitName={fruitEnum.LEMON} />
				<FilterFruit fruitName={fruitEnum.LIME} />
			</div>
			<input
				className={`navbar-input-search`}
				ref={searchInput}
				type='text'
				name='searchInput'
				placeholder='Search'
				onChange={handleSearchChange}
			/>
		</div>
	)
}

export default SearchBar
