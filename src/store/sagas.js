import { all } from 'redux-saga/effects'

import strikeSaga from './strike/saga'

export default function* rootSaga(getState) {
  yield all([
    strikeSaga()
  ]);
}
