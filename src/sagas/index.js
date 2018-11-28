import { fork, all } from 'redux-saga/effects';

import watchClientCreation from './client';
import watchTokenCreation from './auth';

function* mainSaga() {
  yield all([
    fork(watchClientCreation),
    fork(watchTokenCreation),
  ]);
}

export default mainSaga;
