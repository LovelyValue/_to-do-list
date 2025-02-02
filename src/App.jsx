import './App.css';
import Footer from './components/Footer/Footer';
import Form from './components/Form/form';
import Header from './components/Header/Header';
import List from './components/List/List';
import Main from './components/Main/Main';

function App() {
	return (
		<>
			<div className='app'>
				<Header />
				<Main>
					<Form />
					<List />
				</Main>
				<Footer />
			</div>
		</>
	);
}

export default App;
