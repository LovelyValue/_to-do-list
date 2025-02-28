import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css';

// eslint-disable-next-line react/prop-types
function Form({ addTask }) {
	const [state, setState] = useState('');

	//Функция отправки form
	const submitForm = e => {
		e.preventDefault();
		const trimmedText = state.trim();

		if (!trimmedText) return;

		const maxLength = 35;
		const text =
			trimmedText.length > maxLength
				? trimmedText.slice(0, maxLength) + '...'
				: trimmedText;

		addTask(text);
		setState('');
	};

	//Функция отслеживания изменения input
	const changeInput = e => {
		setState(e.target.value);
	};

	return (
		<form className={styles['form']} onSubmit={submitForm}>
			<input
				type='text'
				name='task'
				placeholder='Enter the task'
				className={styles['form__input']}
				onChange={changeInput}
				value={state}
			/>
			<Button type='submit' className={styles['form__button']}>
				Send
			</Button>
		</form>
	);
}

export default Form;
