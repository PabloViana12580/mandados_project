const defaultState = {
	clientCreated: false,
};

export const clientHandler = (state = defaultState, action) => {
	switch(action){
		case 'CLIENT_TOGGLE': {
			return {
				...state,
				clientCreated: !state,
			};
		}
		default: {
			return false;
		};
	}
}

export default clientHandler;