import { takeEvery, put } from 'redux-saga/effects';
import * as types from '../types';
import * as actions from '../actions';

function* userGenerator() {
	yield put(actions.UserCreationConfirmed());
}

function* watchUserCreation() {
	yield takeEvery(
		types.USER_CREATED,
		userGenerator,
	);
}

export default watchUserCreation;
