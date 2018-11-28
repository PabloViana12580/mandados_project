import {
  call,
  takeLatest,
  put,
} from 'redux-saga/effects';

import * as mandaderoActions from '../actions/mandaderos';
import * as types from '../types/mandadero';
import { fetchData } from  '../apis/mandaderoApi';

function* getApiData(action) {
	try{
		const data = yield call(fetchData);
		yield put(mandaderoActions.receivedApi(data));
	}catch (e){
		console.log(e);
	}
}

export default function* watchMandaderoSaga() {
	yield takeLatest(
		types.REQUESTED_API,
		getApiData
	);
}


