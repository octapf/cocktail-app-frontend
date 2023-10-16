import { RefObject } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import productsEnum from '../../constants/productsEnum'
import FilterAlcohol from './FilterAlcohol'

type SearchBarPros = {
	isExpanded: boolean
	searchInput: RefObject<HTMLInputElement>
}

const SearchBar = ({ isExpanded, searchInput }: SearchBarPros) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const navigate = useNavigate()

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		navigate('/cocktailist')
		if (e.target.value === '') {
			searchParams.delete('search')
			setSearchParams(searchParams)
		} else {
			searchParams.set('search', e.target.value)
			setSearchParams(searchParams)
		}
	}

	return (
		<div className={`container-filters ${!isExpanded && 'hidden'}`}>
			<div className='carousel alcohol-filter'>
				<FilterAlcohol productName={productsEnum.VODKA} />
				<FilterAlcohol productName={productsEnum.TEQUILA} />
				<FilterAlcohol productName={productsEnum.LIGHT_RUM} />
				<FilterAlcohol productName={productsEnum.WHISKY} />
				<FilterAlcohol productName={productsEnum.GIN} />
				<FilterAlcohol productName={productsEnum.TRIPLE_SEC} />
				<FilterAlcohol productName={productsEnum.CACHAÇA} />
			</div>
			<div className='carousel ingredient-filter'>
				<p>Hola</p>
				<p>Hola</p>
				<p>Hola</p>
				<p>Hola</p>
				<p>Hola</p>
				<p>Hola</p>
				<p>Hola</p>
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
