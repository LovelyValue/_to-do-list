/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import './List.css';

function List({ data, changeChecked, deleteTask }) {
	return (
		<div className='list'>
			<Outlet context={[data, changeChecked, deleteTask]} />
		</div>
	);
}

export default List;
