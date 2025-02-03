import Button from '../Button/Button';
import './Form.css';

// eslint-disable-next-line react/prop-types
function Form({ addTask }) {
	//Функция отправки формы
	const submitForm = e => {
		e.preventDefault();
		const newTask = e.target.task.value.trim();
		if (!newTask) return; // Не добавляем пустую строку
		addTask(newTask);
		e.target.reset();
	};

	return (
		<form className='form' onSubmit={submitForm}>
			<input
				type='text'
				name='task'
				placeholder='Enter the task'
				className='form__input'
			/>
			<Button>Send</Button>
		</form>
	);
}

export default Form;
