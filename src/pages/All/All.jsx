import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';
import styles from './All.module.css';

function All() {
	const [data, checked, deleteTask] = useOutletContext();

	return (
		<>
			<h3 className={styles['app__title']}>All</h3>
			<div className={styles['tasks']}>
				{data.map(task => (
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

export default All;
