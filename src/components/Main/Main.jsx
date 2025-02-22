import { useEffect, useReducer } from 'react';
import { reducer, STATE } from '../../App.state';
import List from '../../components/List/List';
import Form from '../Form/Form';
import './Main.css';

// eslint-disable-next-line react/prop-types
function Main() {
	const [state, dispatch] = useReducer(reducer, STATE);

	//Загрузка состояния при первом рендеринге
	useEffect(() => {
		dispatch({ type: 'GET' });
	}, []);

	//Функция добавления задачи
	const addTask = text => {
		dispatch({ type: 'SUBMIT', payload: text });
	};

	//Функция изменения checkbox
	const checked = (id, completed) => {
		dispatch({ type: 'CHECKED', payload: { id, completed } });
	};

	//Функция удаления задачи
	const deleteTask = id => {
		dispatch({ type: 'DELETE', payload: id });
	};

	return (
		<div className='main'>
			<Form addTask={addTask} />
			<List data={state} checked={checked} deleteTask={deleteTask} />
		</div>
	);
}

export default Main;
