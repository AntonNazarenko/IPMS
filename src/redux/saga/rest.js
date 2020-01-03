/* eslint-disable require-yield */
import axios from 'axios'
import _toUpper from 'lodash/toUpper'
import {
  takeEvery, put, call, select,
} from 'redux-saga/effects'

axios.defaults.baseURL = 'https://DescriptiveBlaringSubversion--five-nine.repl.co/'

function getState(state) {
  return state
}

function* onREST(action = {}) {
  const {
     meta = {},
  } = action
  const { payload = {} } = meta
  try {
    const res = yield call(axios, {
      method: meta.method || payload.method,
      url: `${axios.defaults.baseURL}${meta.url || payload.path }`,
      data: payload.body || payload,
      params: payload.params,
    })
    
    const { data } = res
    
    yield put({
        type: 'REST_SUCCESS',
        payload: data,
        meta,
    })
  } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
  }
}

function* onRESTSuccess(action = {}) {
  const {
    payload = {},
    meta = {},
  } = action
  const { handler, method } = meta

  yield put({
    type: `${handler}_${method}_RES`,
    payload,
    meta,
  })
}

function onRESTError() {
  // TODO:
}

export function* restSaga() {
  yield takeEvery('REST_SUCCESS', onRESTSuccess)
  yield takeEvery('REST_ERROR', onRESTError)
  yield takeEvery('REST', onREST)
}

export default restSaga