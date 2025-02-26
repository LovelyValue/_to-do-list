import List from '../../components/List/List';
import Form from '../Form/Form';
import './Main.css';

// eslint-disable-next-line react/prop-types
function Main({ addTask, data, changeChecked, deleteTask }) {
	return (
		<div className='main'>
			<Form addTask={addTask} />
			<List data={data} changeChecked={changeChecked} deleteTask={deleteTask} />
		</div>
	);
}

export default Main;
