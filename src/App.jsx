import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Form from './components/Form/form';
import Header from './components/Header/Header';
import List from './components/List/List';
import Main from './components/Main/Main';

function App() {
	const [tasks, setTask] = useState([]);

	//Загрузка списка задач при первом рендере
	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		setTask(savedTasks);
	}, []);

	//Функция для добавления новой задачи
	const addTask = task => {
		const updatedTasks = [...tasks, task];
		setTask(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	return (
		<div className='app'>
			<Header />
			<Main>
				<Form addTask={addTask} />
				<List tasks={tasks} />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
