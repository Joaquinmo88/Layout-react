import { all, takeEvery, put, fork, delay } from 'redux-saga/effects';

import actions from './actions';

const fakeApiCall = true; // auth0 or express JWT

export function* setUser() {
  yield delay(4000);
  yield put({ type: actions.SET_USER })
}

export default function* rootSaga() {
  yield all([
    fork(setUser),
  ]);
}
