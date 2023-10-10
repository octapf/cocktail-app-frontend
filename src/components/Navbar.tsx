import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import endpoints from '../constants/endpoints'
import '../styles/navbar.css'

const NavBar = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const [searchParams, setSearchParams] = useSearchParams()

	const navigate = useNavigate()

	const searchInput = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (isExpanded) {
			setTimeout(() => {
				searchInput.current?.focus()
			}, 100)
		}
	}, [isExpanded, searchParams])

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		navigate('/cocktailist')
		setSearchParams({ search: e.target.value })
	}

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
		<nav className={`navbar ${isExpanded && 'navbar-expand'}`}>
			<div className={`container-filters ${!isExpanded && 'hidden'}`}>
				<div className='carousel alcohol-filter'>
					<small>Vodka</small>
					<small>Tequila</small>
					<small>Light Rum</small>
					<small>Whisky</small>
					<small>Gin</small>
					<small>Triple Sec</small>
					<small>Cachaça</small>
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
					onBlur={handleBlur}
				/>
			</div>

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
