import { useReducer } from 'react';
import Button from '../Button/Button';
import './Form.css';
import { INITIAL_STATE, reducer } from './Form.state';

// eslint-disable-next-line react/prop-types
function Form({ addTask }) {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
	const { values } = state;

	//Функция отправки формы
	const submitForm = e => {
		e.preventDefault();
		const newTask = values.trim();
		if (!newTask) return; //Не добавляет пустую строку
		dispatch({ type: 'SUBMIT', payload: newTask });
		addTask(values);

		dispatch({ type: 'RESET' }); //Очистка состояния формы
	};

	const changeInput = e => {
		dispatch({ type: 'CHANGE', payload: e.target.value }); //Получение состояния input
	};

	return (
		<form className='form' onSubmit={submitForm}>
			<input
				type='text'
				name='task'
				value={values}
				placeholder='Enter the task'
				className='form__input'
				onChange={changeInput}
			/>
			<Button type='submit'>Send</Button>
		</form>
	);
}

export default Form;
