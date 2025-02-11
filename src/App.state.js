export const STATE = [];

export function reducer(state, action) {
	switch (action.type) {
		case 'SUBMIT': {
			const newTask = {
				id: state.length + 1,
				text: action.payload,
				completed: false,
			};
			return [...state, newTask];
		}
	}
}
