import { useEffect, useReducer } from 'react';
import './App.css';
import { reducer, STATE } from './App.state';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import List from './components/List/List';
import Main from './components/Main/Main';

function App() {
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
		<div className='app'>
			<Header />
			<Main>
				<Form addTask={addTask} />
				<List data={state} checked={checked} deleteTask={deleteTask} />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
