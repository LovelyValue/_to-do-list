import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({ children, type }) {
	return (
		<>
			<button type={type} className='button'>
				{children}
			</button>
		</>
	);
}

export default Button;
