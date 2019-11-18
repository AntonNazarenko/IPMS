/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import actions from './actions'

const sagaMiddleware = createSagaMiddleware()

export function configureStore(
  options = {},
  optionalReducers = {},
  optionalMiddleware = null,
) {

  const {
    development = false,
  } = options

  let middleware = [
    sagaMiddleware,
  ]

  if(optionalMiddleware) {
    middleware = [...middleware, ...optionalMiddleware]
  }

  const composeEnhancers = development
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

  const sagas = options.sagas ? options.sagas : function* saga() {}

  const enhancers = composeEnhancers(
    applyMiddleware(...middleware),
  )

  const store = createStore(
    reducer(optionalReducers),
    {},
    enhancers,
  )

  sagaMiddleware.run(sagas)

  return store
}

export default {
  configureStore,
  actions
}