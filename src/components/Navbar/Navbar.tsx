import { Link } from 'react-router-dom'
import { endpoints } from '../../constants/endpoints'
import '../../styles/navbar.css'
import SearchBar from './SearchBar'
import { useRefInputFocus } from '../../hooks/useRefInputFocus'

const NavBar = () => {
	const {
		expandNav: [isExpanded, setIsExpanded],
		searchInput,
	} = useRefInputFocus()

	const handleBlur = () => {
		searchInput.current!.value = ''
		setIsExpanded(false)
	}

	const toogleExpand = () => {
		setIsExpanded((prevValue) => {
			return !prevValue
		})
	}

	return (
		<nav className={`navbar ${isExpanded ? 'navbar-expand' : ''}`}>
			<SearchBar isExpanded={isExpanded} searchInput={searchInput} />

			<div className='navbar-links' onFocus={handleBlur}>
				<Link to={endpoints.COCKTAIL_LIST}>
					<i className='fa-solid fa-house'></i>
				</Link>
				<Link to={endpoints.FAVORITES}>
					<i className='fa-solid fa-heart'></i>
				</Link>
				<div onClick={toogleExpand} className='search-button'>
					<i className='fa-solid fa-magnifying-glass'></i>
				</div>
				<Link to={endpoints.PROFILE}>
					<i className='fa-regular fa-user'></i>
				</Link>
			</div>
		</nav>
	)
}

export default NavBar
