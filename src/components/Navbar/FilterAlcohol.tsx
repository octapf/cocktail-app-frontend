import { useNavigate, useSearchParams } from 'react-router-dom'
import { capitalize } from '../../utils/capitalize'
import { removeSpaces } from '../../utils/removeSpaces'

type TFilterAlcoholProps = {
	productName: string
}

const FilterAlcohol = ({ productName }: TFilterAlcoholProps) => {
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
