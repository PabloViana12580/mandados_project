import {
	call,
	takeLatest,
	put,
} from 'redux-saga/effects';

import saveClient from '../apis/clientApi';
import * as types from '../types/client'
import * as clientActions from '../actions/client';

function* clientGenerator(action) {
	const {
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
	} = action;
	try {
		yield call(
			saveClient,
			username,
			genre,
			name,
			email,
			last_name,
			id_document,
			telephone,
			age,
		);
		yield put(clientActions.confirmClient());
	}catch(e){
		//error
	}
}

function* watchClientCreation() {
	yield takeLatest(
		types.CLIENT_CREATED,
		clientGenerator,
	);
}

export default watchClientCreation;