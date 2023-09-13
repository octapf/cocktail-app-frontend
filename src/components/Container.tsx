import IContainer from '../interfaces/IContainer'
import '../styles/container.css'

const Container = ({ typeContainer, children, myStyle }: IContainer) => {
	return (
		<div className={typeContainer} style={myStyle}>
			{children}
		</div>
	)
}

export default Container
