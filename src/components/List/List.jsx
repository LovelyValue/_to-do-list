/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import './List.css';

function List({ data, checked, deleteTask }) {
	return (
		<div className='list'>
			<Outlet context={[data, checked, deleteTask]} />
		</div>
	);
}

export default List;
