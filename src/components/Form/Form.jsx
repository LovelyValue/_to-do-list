import Button from '../Button/Button';
import './Form.css';

function Form() {
	return (
		<>
			<form className='form'>
				<input placeholder='Enter the task' className='form__input' />
				<Button>Send</Button>
			</form>
		</>
	);
}

export default Form;
