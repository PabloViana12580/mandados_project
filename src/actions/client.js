import * as types from '../types/client';

export const createClient = (
	username = '',
	password = '',
	genre = '',
	name = '',
	email = '',
	last_name = '',
	id_document = '',
	telephone = 0,
	age = 0,
) => ({
	type: types.CLIENT_TOGGLE,
	payload: {
		username,
		password,
		genre,
		name,
		email,
		last_name,
		id_document,
		telephone,
		age,
	},
});

export const confirmClient = () => ({
	type: types.CLIENT_CONFIRMED,
});