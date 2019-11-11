import { combineReducers } from 'redux'

import course from './course'
import itc from './itc'

const reducers = optionalReducers => combineReducers({
  ...optionalReducers,
  course,
  itc
})

export default reducers