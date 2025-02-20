import { Outlet } from 'react-router-dom';
import './Main.css';

// eslint-disable-next-line react/prop-types
function Main({ children }) {
	return (
		<div className='main'>
			<Outlet />
			{children}
		</div>
	);
}

export default Main;
