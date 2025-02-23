import { useEffect, useReducer } from 'react';
import { STATE, reducer } from '../../App.state';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import styles from './Layout.module.css';

function Layout() {
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

	const deleteTaskCompleted = updatedTasks => {
		dispatch({ type: 'DELETE_COMPLETED', payload: updatedTasks });
	};
	return (
		<div className={styles['layout']}>
			<Header />
			<Main
				addTask={addTask}
				data={state}
				checked={checked}
				deleteTask={deleteTask}
			/>
			<Footer data={state} deleteTaskCompleted={deleteTaskCompleted} />
		</div>
	);
}

export default Layout;
