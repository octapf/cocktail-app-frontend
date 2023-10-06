import Container from './Container'

const SearchBar = () => {
	return (
		<Container typeContainer='container-search-bar'>
			<input
				className='input-search'
				placeholder='search'
				type='text'
				name='inputSearch'
				id=''
			/>
		</Container>
	)
}

export default SearchBar
