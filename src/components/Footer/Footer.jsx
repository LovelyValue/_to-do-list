import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<p>2 items left</p>

			<Link to='/'>All</Link>
			<Link to='/active'>Active</Link>
			<Link to='/completed'>Completed</Link>
			<Button>Clear completed</Button>
		</footer>
	);
}

export default Footer;
