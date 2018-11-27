export const clientHandler = (state, action) => {
	switch(action){
		case 'CLIENT_CREATED': {
			return {
				state
			};
		default: {
			return state;
		}
		}
	}
}