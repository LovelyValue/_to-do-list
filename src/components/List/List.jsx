/* eslint-disable react/prop-types */
import Items from '../Items/Items';
import './List.css';

// eslint-disable-next-line react/prop-types
function List({ tasks }) {
	return (
		<div className='list'>
			<h3 className='list__title'>Tasks</h3>
			{tasks.map((task, index) => (
				<Items key={index} task={task} index={index} />
			))}
		</div>
	);
}

export default List;
