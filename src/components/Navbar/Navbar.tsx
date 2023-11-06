import { Link } from 'react-router-dom'
import { endpoints } from '../../constants/endpoints'
import '../../styles/navbar.css'
import SearchBar from './SearchBar/SearchBar'
import { useContext, useRef } from 'react'
import { FilterContext } from '../../contexts/FiltersProvider'

const NavBar = () => {
	const { isExpandedNavBar, setIsExpandedNavBar } = useContext(FilterContext)

	const searchInput = useRef<HTMLInputElement>(null)

	const handleBlur = () => {
		searchInput.current!.value = ''
		setIsExpandedNavBar(false)
	}

	const toogleExpand = () => {
		setIsExpandedNavBar((prevValue: boolean) => {
			return !prevValue
		})
	}

	return (
		<nav
			data-testid={'nav'}
			className={`navbar ${isExpandedNavBar ? 'navbar-expand' : ''}`}
		>
			<SearchBar
				isExpandedNavBar={isExpandedNavBar}
				searchInput={searchInput}
			/>

			<div className='navbar-links' onFocus={handleBlur}>
				<Link to={endpoints.COCKTAIL_LIST}>
					<i className='fa-solid fa-house'></i>
				</Link>
				<Link to={endpoints.FAVORITES}>
					<i className='fa-solid fa-heart'></i>
				</Link>
				<div
					onClick={toogleExpand}
					className='search-button'
					data-testid={'loupe'}
				>
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
