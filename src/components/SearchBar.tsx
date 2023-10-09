import { LegacyRef } from 'react'
import Container from './Container'

const SearchBar = ({
	isExpanded,
	searchInput,
}: {
	isExpanded: boolean
	searchInput: LegacyRef<HTMLInputElement>
}) => {
	return (
		<Container typeContainer='container-search-bar'>
			<input
				className={`navbar-input-search ${
					!isExpanded && 'navbar-input-search-hidden'
				}`}
				ref={searchInput}
				type='text'
				name='searchInput'
				placeholder='Search'
			/>
		</Container>
	)
}

export default SearchBar
