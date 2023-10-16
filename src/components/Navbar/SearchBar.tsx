import { RefObject } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchBar = ({
	isExpanded,
	searchInput,
}: {
	isExpanded: boolean
	searchInput: RefObject<HTMLInputElement>
}) => {
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

	const handleAlcoholFilter = (alcohol: string) => {
		navigate('/cocktailist')
		searchParams.set('alcohol', alcohol)
		setSearchParams(searchParams)
	}

	return (
		<div className={`container-filters ${!isExpanded && 'hidden'}`}>
			<div className='carousel alcohol-filter'>
				<small
					className={`vodka-filter`}
					onClick={() => handleAlcoholFilter('vodka')}
				>
					Vodka
				</small>
				<small
					className={`tequila-filter`}
					onClick={() => handleAlcoholFilter('tequila')}
				>
					Tequila
				</small>
				<small
					className={`lightrum-filter`}
					onClick={() => handleAlcoholFilter('light rum')}
				>
					Light Rum
				</small>
				<small onClick={() => handleAlcoholFilter('whisky')}>Whisky</small>
				<small onClick={() => handleAlcoholFilter('gin')}>Gin</small>
				<small onClick={() => handleAlcoholFilter('triple sec')}>
					Triple Sec
				</small>
				<small onClick={() => handleAlcoholFilter('cachaça')}>Cachaça</small>
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
