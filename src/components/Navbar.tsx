import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import endpoints from '../constants/endpoints'
import '../styles/navbar.css'

const NavBar = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const searchInput = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isExpanded) {
			searchInput.current?.focus()
		}
	}, [isExpanded])

	const toogleExpand = () => {
		setIsExpanded((prevValue) => {
			return !prevValue
		})
	}

	return (
		<nav className={`navbar ${isExpanded && 'navbar-expand'}`}>
			<input
				className={`navbar-input-search ${
					!isExpanded && 'navbar-input-search-hidden'
				}`}
				ref={searchInput}
				type='text'
				name='searchInput'
				placeholder='Search'
			/>

			<div className='navbar-links'>
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
