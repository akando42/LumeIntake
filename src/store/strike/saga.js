import { all, takeLatest, put, call } from 'redux-saga/effects'
import summaryActions from './action'
import appActions from '../app/action'
import { apiCall } from '../http'
// import {
//   summaryUrl
// } from '../../utils/summaryUrls'

export function* getSummary({ skip, limit }) {
  yield put({type: appActions.API_CALL_START})
  try {
    const response = ["asdf"]
    yield put({
      type: summaryActions.SET_SUMMARY,
      data: response
    })
  } catch(e) {

  }
  yield put({type: appActions.API_CALL_END})
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(summaryActions.GET_SUMMARY, getSummary)
  ])
}
