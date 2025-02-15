import './Items.css';

// eslint-disable-next-line react/prop-types
function Items({ text, id, completed, checked, deleteTask }) {
	//Функция проверки состояния checkbox
	const isChecked = e => {
		checked(id, e.target.checked);
	};

	return (
		<>
			<label htmlFor={id} className='items__label'>
				<input
					id={id}
					type='checkbox'
					className='items__input'
					onChange={isChecked}
					checked={completed}
				/>
				<span className={completed ? 'items__span active' : 'items__span'}>
					{text}
				</span>
				<button className='items__button' onClick={() => deleteTask(id)}>
					x
				</button>
			</label>
		</>
	);
}

export default Items;
