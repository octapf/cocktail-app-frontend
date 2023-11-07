import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ENDPOINTS } from '../../constants/endpoints'
import '../../styles/navbar.css'
import SearchBar from './SearchBar/SearchBar'
import { FilterContext } from '../../contexts/FiltersProvider'

const NavBar = () => {
	const { isExpandedNavBar, setIsExpandedNavBar } = useContext(FilterContext)

	const searchInput = useRef<HTMLInputElement>(null)

	const handleBlur = () => {
		searchInput.current!.value = ''
		setIsExpandedNavBar(false)
	}

	const toogleExpand = () => {
		setIsExpandedNavBar((prevValue: boolean) => !prevValue)
	}

	return (
		<nav
			data-testid='nav'
			className={`navbar ${isExpandedNavBar ? 'navbar-expand' : ''}`}
		>
			<SearchBar
				isExpandedNavBar={isExpandedNavBar}
				searchInput={searchInput}
			/>

			<div className='navbar-links' onFocus={handleBlur}>
				<Link to={ENDPOINTS.COCKTAIL_LIST}>
					<i className='fa-solid fa-house' />
				</Link>
				<Link to={ENDPOINTS.FAVORITES}>
					<i className='fa-solid fa-heart' />
				</Link>
				<button
					type='button'
					onKeyDown={toogleExpand}
					tabIndex={0}
					onClick={toogleExpand}
					className='search-button'
					data-testid='loupe'
				>
					<i className='fa-solid fa-magnifying-glass' />
				</button>
				<Link to={ENDPOINTS.PROFILE}>
					<i className='fa-regular fa-user' />
				</Link>
			</div>
		</nav>
	)
}

export default NavBar
