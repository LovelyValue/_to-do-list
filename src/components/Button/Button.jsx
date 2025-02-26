import cn from 'classnames';

import styles from './Button.module.css';

// eslint-disable-next-line react/prop-types
function Button({ children, type, onClick, className }) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn(styles['button'], className)}
		>
			{children}
		</button>
	);
}

export default Button;
