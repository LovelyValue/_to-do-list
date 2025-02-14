/* eslint-disable react/prop-types */
import Items from '../Items/Items';
import './List.css';

function List({ data, checked }) {
	return (
		<div className='list'>
			<h3 className='list__title'>Tasks</h3>
			{data.map(task => (
				<Items
					key={task.id}
					text={task.text}
					id={task.id}
					completed={task.completed}
					checked={checked}
				/>
			))}
		</div>
	);
}

export default List;
