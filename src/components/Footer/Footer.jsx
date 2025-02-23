/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Footer.module.css';

// eslint-disable-next-line react/prop-types
function Footer({ data, deleteTaskCompleted }) {
	const clear = () => {
		const updatedTasks = data.filter(task => !task.completed);
		deleteTaskCompleted(updatedTasks);
	};

	return (
		<footer className={styles['footer']}>
			<p>{data.filter(task => !task.completed).length} items left</p>

			<Link className={styles['footer__link']} to='/'>
				All
			</Link>
			<Link className={styles['footer__link']} to='/active'>
				Active
			</Link>
			<Link className={styles['footer__link']} to='/completed'>
				Completed
			</Link>
			<Button type='button' onClick={clear} className={styles['padding']}>
				Clear completed
			</Button>
		</footer>
	);
}

export default Footer;
