import Button from '../Button/Button';
import './Footer.css';

function Footer() {
	return (
		<>
			<footer className='footer'>
				<p>2 items left</p>
				<Button>All</Button>
				<Button>Active</Button>
				<Button>Completed</Button>
				<Button>Clear completed</Button>
			</footer>
		</>
	);
}

export default Footer;
