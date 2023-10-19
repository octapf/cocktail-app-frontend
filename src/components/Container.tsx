import { TContainer } from '../types/TContainer'
import '../styles/container.css'

const Container = ({ typeContainer, children, myStyle }: TContainer) => {
	return (
		<div className={typeContainer} style={myStyle}>
			{children}
		</div>
	)
}

export default Container
