import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';
import styles from './Active.module.css';

function Active() {
	const [data, checked, deleteTask] = useOutletContext();

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
						checked={checked}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</>
	);
}

export default Active;
