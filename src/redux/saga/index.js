import { fork } from 'redux-saga/effects'
import restSaga from './rest'

export default function * rootSaga () {
  yield fork(restSaga)
}