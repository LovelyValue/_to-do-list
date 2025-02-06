export const INITIAL_STATE = {
	values: [],
};

export function reducer(state, action) {
	switch (action.type) {
		case 'SUBMIT': {
			return {
				...state,
				values: [...state.values, state.values],
			};
		}
		case 'RESET': {
			return {
				...state,
				values: '',
			};
		}
		case 'CHANGE': {
			return {
				...state,
				values: action.payload,
			};
		}
	}
}
