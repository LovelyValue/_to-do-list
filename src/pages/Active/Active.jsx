import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';
import styles from './Active.module.css';

function Active() {
	const [data, changeChecked, deleteTask] = useOutletContext();

	//Фильтрация задач
	function filter(task) {
		return task.completed === false;
	}

	return (
		<>
			<h3 className={styles['active__title']}>Active</h3>
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

export default Active;
