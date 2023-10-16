import { useNavigate, useSearchParams } from 'react-router-dom'
import { capitalize } from '../../utils/capitalize'
import { removeSpaces } from '../../utils/removeSpaces'

type FilterAlcoholProps = {
	productName: string
}

const FilterAlcohol = ({ productName }: FilterAlcoholProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	const navigate = useNavigate()

	const handleAlcoholFilter = (alcohol: string) => {
		navigate('/cocktailist')
		searchParams.set('alcohol', alcohol)
		setSearchParams(searchParams)
	}

	return (
		<small
			className={`${removeSpaces(productName)}-filter`}
			onClick={() => handleAlcoholFilter(productName)}
		>
			{capitalize(productName)}
		</small>
	)
}

export default FilterAlcohol
