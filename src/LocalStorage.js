export const localStorageGet = () =>
	JSON.parse(localStorage.getItem('tasks')) || [];
export const localStorageSet = task =>
	localStorage.setItem('tasks', JSON.stringify(task));
