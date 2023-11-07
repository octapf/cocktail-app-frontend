import { RefObject } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ALCOHOL } from '../../../constants/alcoholEnum'
import { FilterAlcohol } from './FilterAlcohol'
import { ENDPOINTS } from '../../../constants/endpoints'
import { QUERYPARAMS } from '../../../constants/queryParams'
import { FRUIT } from '../../../constants/fruitEnum'
import FilterFruit from './FilterFruit'

type TSearchBarPros = {
	isExpandedNavBar: boolean
	searchInput: RefObject<HTMLInputElement>
}

const SearchBar = ({ isExpandedNavBar, searchInput }: TSearchBarPros) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const navigate = useNavigate()

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		navigate(ENDPOINTS.COCKTAIL_LIST)
		if (e.target.value === '') {
			searchParams.delete(QUERYPARAMS.SEARCH)
			setSearchParams(searchParams)
		} else {
			searchParams.set(QUERYPARAMS.SEARCH, e.target.value)
			setSearchParams(searchParams)
		}
	}

	return (
		<div className={`container-filters ${!isExpandedNavBar ? 'hidden' : ''}`}>
			<div className='carousel alcohol-filter'>
				<FilterAlcohol alcoholName={ALCOHOL.VODKA} />
				<FilterAlcohol alcoholName={ALCOHOL.TEQUILA} />
				<FilterAlcohol alcoholName={ALCOHOL.LIGHT_RUM} />
				<FilterAlcohol alcoholName={ALCOHOL.WHISKY} />
				<FilterAlcohol alcoholName={ALCOHOL.GIN} />
				<FilterAlcohol alcoholName={ALCOHOL.TRIPLE_SEC} />
				<FilterAlcohol alcoholName={ALCOHOL.CACHAÇA} />
			</div>
			<div className='carousel fruit-filter'>
				<FilterFruit fruitName={FRUIT.COCONUT} />
				<FilterFruit fruitName={FRUIT.PEACH} />
				<FilterFruit fruitName={FRUIT.ORANGE} />
				<FilterFruit fruitName={FRUIT.TOMATO} />
				<FilterFruit fruitName={FRUIT.MINT} />
				<FilterFruit fruitName={FRUIT.PINEAPPLE} />
				<FilterFruit fruitName={FRUIT.LEMON} />
				<FilterFruit fruitName={FRUIT.LIME} />
			</div>
			<input
				className='navbar-input-search'
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
