import Items from '../Items/Items';
import './List.css';

function List() {
	return (
		<>
			<div className='list'>
				<h3 className='list__title'>Tasks</h3>
				<Items />
			</div>
		</>
	);
}

export default List;
