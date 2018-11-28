import * as types from  '../types/auth';

export const saveToken = (
	username,
	password,
) => ({
	type: types.TOKEN_REQUESTED,
	payload: {
		username,
		password,
	},
});

export const tokenObtained = () => ({
	type: types.TOKEN_OBTAINED,
})

export const confirmToken = () => ({
	type: types.TOKEN_CONFIRMED,
})