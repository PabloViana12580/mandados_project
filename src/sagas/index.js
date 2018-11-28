import { fork, all } from 'redux-saga/effects';

import watchClientCreation from './client';
import watchTokenCreation from './auth';
import watchMandaderoSaga from './mandaderos';

function* mainSaga() {
  yield all([
    fork(watchClientCreation),
    fork(watchTokenCreation),
    fork(watchMandaderoSaga),
  ]);
}

export default mainSaga;
