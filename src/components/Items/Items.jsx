import './Items.css';

function Items() {
	return (
		<>
			<div className='items'>
				<label className='items__label'>
					<input type='checkbox' value='value-1' className='items__input' />
					<span className='items__span'>sometime text</span>
				</label>
			</div>
		</>
	);
}

export default Items;
