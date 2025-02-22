import { useOutletContext } from 'react-router-dom';
import Items from '../../components/Items/Items';

function All() {
	const [data, checked, deleteTask] = useOutletContext();

	return (
		<>
			{data.map(task => (
				<Items
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
