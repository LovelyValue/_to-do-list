import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';

function Active() {
	const [data, checked, deleteTask] = useOutletContext();

	function filter(task) {
		return task.completed === false;
	}

	return (
		<>
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
		</>
	);
}

export default Active;
