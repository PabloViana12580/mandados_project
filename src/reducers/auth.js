const inicialState = {
	token: undefined,
	tokenConfirmed: false,
	requested: false,
}

export const authHandler = (state = inicialState, action) => {
	switch(action){
		case 'TOKEN_REQUESTED' : {
			return {
				...state,
				requested: true,
			}
		}
		case 'TOKEN_OBTAINED': {
				return {
					...state,
					token: action.payload,
				};
		}
		case 'TOKEN_CONFIRMED': {
				return {
					...state,
					tokenConfirmed: true,
				};
		}	
		default: {
			return state;
		};
	}
}

export default authHandler;