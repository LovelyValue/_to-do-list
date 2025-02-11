import './Items.css';

// eslint-disable-next-line react/prop-types
function Items() {
	return (
		<>
			<label className='items__label'>
				<input type='checkbox' className='items__input' />
				<span className='items__span'></span>
				<button className='items__button'>x</button>
			</label>
		</>
	);
}

export default Items;
