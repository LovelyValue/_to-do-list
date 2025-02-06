import { useState } from 'react';
import './Items.css';

// eslint-disable-next-line react/prop-types
function Items({ task, index, deleteTask }) {
	const [state, setState] = useState(false);

	const completedTask = e => {
		if (e.target.checked) {
			return setState(true);
		}
		return setState(false);
	};

	const className = state ? ' items__span active' : 'items__span';

	return (
		<>
			<label htmlFor={index} className='items__label'>
				<input
					id={index}
					type='checkbox'
					className='items__input'
					onClick={completedTask}
				/>
				<span className={className}>{task}</span>
				<button className='items__button' onClick={() => deleteTask(index)}>
					x
				</button>
			</label>
		</>
	);
}

export default Items;
