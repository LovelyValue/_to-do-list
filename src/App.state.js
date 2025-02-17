import { nanoid } from 'nanoid';
import { localStorageGet, localStorageSet } from './LocalStorage';

export const STATE = [];

export function reducer(state, action) {
	switch (action.type) {
		case 'SUBMIT': {
			const newTask = {
				id: nanoid(),
				text: action.payload,
				completed: false,
			};
			const data = [...state, newTask];
			localStorageSet(data);

			return data;
		}
		case 'GET': {
			return localStorageGet();
		}
		case 'CHECKED': {
			const { id, completed } = action.payload;
			const data = state.map(task =>
				task.id === id ? { ...task, completed: completed } : task
			);
			localStorageSet(data);

			return data;
		}
		case 'DELETE': {
			const data = state.filter(task => task.id !== action.payload);
			localStorageSet(data);

			return data;
		}
	}
}
