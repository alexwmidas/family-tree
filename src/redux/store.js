import { createStore, combineReducers } from 'redux'

import user from './reducers/user'
import data from './reducers/data'

const initialState = {}

const reducers = combineReducers({
  user,
  data,
})

const store = createStore(reducers, initialState)

export default store
