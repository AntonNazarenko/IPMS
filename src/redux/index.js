/* eslint-disable no-unused-vars */
import { createStore } from 'redux'

import reducer from './reducers'
import actions from './actions'

export function configureStore(
  options = {},
  optionalReducers = {},
  optionalMiddleware = null,
) {

  const store = createStore(
    reducer(optionalReducers),
    {}
  )

  return store
}

export default {
  configureStore,
  actions
}