import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';
import styles from './Completed.module.css';

function Completed() {
	const [data, changeChecked, deleteTask] = useOutletContext();

	//Фильтрация задач
	function filter(task) {
		return task.completed === true;
	}

	return (
		<>
			<h3 className={styles['completed__title']}>Completed</h3>
			<div className={styles['tasks']}>
				{data.filter(filter).map(task => (
					<Item
						key={task.id}
						text={task.text}
						id={task.id}
						completed={task.completed}
						changeChecked={changeChecked}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</>
	);
}

export default Completed;
