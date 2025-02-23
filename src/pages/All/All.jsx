import { useOutletContext } from 'react-router-dom';
import Item from '../../components/Item/Item';

function All() {
	const [data, checked, deleteTask] = useOutletContext();

	return (
		<>
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
		</>
	);
}

export default All;
