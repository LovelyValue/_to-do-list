import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({ children, type, onClick }) {
	return (
		<>
			<button type={type} onClick={onClick} className='button'>
				{children}
			</button>
		</>
	);
}

export default Button;
