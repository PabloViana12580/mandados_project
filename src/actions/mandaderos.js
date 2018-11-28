import * as types from '../types/mandadero';

export const requestedApi = () =>({
	type: types.REQUESTED_API
});

export const receivedApi = data => ({
	type: types.RECEIVED_API,
	payload: data
});

export const selectMandadero = () => ({
  type: types.MANDADERO_SELECTED,
});
