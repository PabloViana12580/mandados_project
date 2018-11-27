import * as types from '../types';

const selectMandador = (state = [], action) => {
  switch(action.type){
		case types.MANDADERO_SELECTED: {
			return {
				state
			};
		default: 	return state;
		  }
  	}
  };
  