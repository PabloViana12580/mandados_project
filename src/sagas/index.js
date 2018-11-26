import { fork, all } from 'redux-saga/effects';

import watchClientCreation from './client';

function* mainSaga() {
  yield all([
    fork(watchClientCreation),
  ]);
}

export default mainSaga;
