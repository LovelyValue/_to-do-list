/* eslint-disable react/prop-types */
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Footer.module.css';

// eslint-disable-next-line react/prop-types
function Footer({ data, deleteTasksCompleted }) {
	//Удаление выполненных задач
	const clearCompleted = () => {
		const updatedTasks = data.filter(task => !task.completed);
		deleteTasksCompleted(updatedTasks);
	};

	//Проверка оставшихся не выполненных задач
	const itemsLeft = data.filter(task => !task.completed).length;

	return (
		<footer className={styles['footer']}>
			<p className={styles['footer__counter']}>{itemsLeft} items left</p>

			<NavLink
				className={({ isActive }) =>
					cn(styles['footer__link'], {
						[styles.active]: isActive,
					})
				}
				to='/'
			>
				All
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					cn(styles['footer__link'], {
						[styles.active]: isActive,
					})
				}
				to='/active'
			>
				Active
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					cn(styles['footer__link'], {
						[styles.active]: isActive,
					})
				}
				to='/completed'
			>
				Completed
			</NavLink>
			<Button
				type='button'
				onClick={clearCompleted}
				className={styles['footer__button']}
			>
				Clear completed
			</Button>
		</footer>
	);
}

export default Footer;
