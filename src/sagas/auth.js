import {
	call,
	takeLatest,
	put,
} from 'redux-saga/effects';

import saveToken from '../apis/authApi';
import * as types from '../types/auth';
import * as authActions from '../actions/auth';

function* tokenGenerator(action) {
	const {
		payload: {
			username,
			password,
		},
	} = action;
	try {
		yield call(
			saveToken,
			username,
			password,
		);
		yield put(authActions.confirmToken());
	}catch(e){
		//error
	}
}

function* watchTokenCreation() {
	yield takeLatest(
		types.TOKEN_REQUESTED,
		tokenGenerator,
	);
}

export default watchTokenCreation;