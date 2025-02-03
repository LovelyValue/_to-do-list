import './Items.css';

// eslint-disable-next-line react/prop-types
function Items({ task }) {
	return (
		<div className='items'>
			<label className='items__label'>
				<input type='checkbox' className='items__input' />
				<span className='items__span'>{task}</span>
			</label>
		</div>
	);
}

export default Items;
