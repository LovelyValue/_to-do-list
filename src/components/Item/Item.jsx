import cn from 'classnames';
import DeleteIcon from '../../assets/delete-icon.svg?react';
import styles from './Item.module.css';

// eslint-disable-next-line react/prop-types
function Item({ text, id, completed, changeChecked, deleteTask }) {
	//Функция проверки состояния checkbox
	const isChecked = e => {
		changeChecked(id, e.target.checked);
	};

	return (
		<label htmlFor={id} className={styles['item__label']}>
			<input
				id={id}
				type='checkbox'
				className={styles['item__input']}
				onChange={isChecked}
				checked={completed}
			/>
			<span
				className={cn(styles['item__span'], {
					[styles['active']]: completed,
				})}
			>
				{text}
			</span>
			<button className={styles['item__button']} onClick={() => deleteTask(id)}>
				<DeleteIcon className={styles['item__img']} />
			</button>
		</label>
	);
}

export default Item;
