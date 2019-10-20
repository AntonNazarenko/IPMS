import { combineReducers } from 'redux'

import course from './course'

const reducers = optionalReducers => combineReducers({
  ...optionalReducers,
  course
})

export default reducers