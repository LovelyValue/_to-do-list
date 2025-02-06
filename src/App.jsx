import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Form from './components/Form/form';
import Header from './components/Header/Header';
import List from './components/List/List';
import Main from './components/Main/Main';

function App() {
	const [tasks, setTasks] = useState([]);

	//Загрузка списка задач при первом рендере
	useEffect(() => {
		const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		setTasks(savedTasks);
	}, []);

	//Функция для добавления новой задачи
	const addTask = task => {
		const updatedTasks = [...tasks, task];
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	//Функция для удаления задачи
	const deleteTask = index => {
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
		localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	};

	//Готовность задачи

	return (
		<div className='app'>
			<Header />
			<Main>
				<Form addTask={addTask} />
				<List
					tasks={tasks}
					deleteTask={deleteTask}
					// completedTask={completedTask}
				/>
			</Main>
			<Footer />
		</div>
	);
}

export default App;
