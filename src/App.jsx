import { useReducer } from 'react';
import './App.css';
import { reducer, STATE } from './App.state';
import Footer from './components/Footer/Footer';
import Form from './components/Form/form';
import Header from './components/Header/Header';
import List from './components/List/List';
import Main from './components/Main/Main';

function App() {
	const [state, dispatch] = useReducer(reducer, STATE);

	//Функция добавления задачи
	const addTask = task => {
		dispatch({ type: 'SUBMIT', payload: task });
	};

	return (
		<div className='app'>
			<Header />
			<Main>
				<Form addTask={addTask} />
				<List />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
