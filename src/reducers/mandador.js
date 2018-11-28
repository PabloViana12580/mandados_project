import * as types from '../types/mandadero';

const selectMandador = (state = {}, action) => {
  switch(action.type){
		case types.MANDADERO_SELECTED: 
			return state;
		case types.RECEIVED_API:
			return action.payload;
		default:
			return state;
  }
};

export default selectMandador;
  