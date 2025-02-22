/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import './List.css';

function List({ data, checked, deleteTask }) {
	return (
		<div className='list'>
			<h3 className='list__title'>Tasks</h3>
			<Outlet context={[data, checked, deleteTask]} />
		</div>
	);
}

export default List;
