/* eslint-disable react/prop-types */
import Items from '../Items/Items';
import './List.css';

function List({ tasks, deleteTask }) {
	return (
		<div className='list'>
			<h3 className='list__title'>Tasks</h3>
			{tasks.map((task, index, completed) => (
				<Items
					key={index}
					task={task}
					index={index}
					deleteTask={deleteTask}
					// completedTask={completedTask}
					completed={completed}
				/>
			))}
		</div>
	);
}

export default List;
