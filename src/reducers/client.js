const defaultState = {
	clientCreated: false,
};

export const clientHandler = (state = defaultState, action) => {
	switch(action){
		case 'CLIENT_CREATED': {
			console.log("hola");
			return {
				...state,
				clientCreated: true,
			};
		}
		default: {
			return state;
		};
	}
}

export default clientHandler;