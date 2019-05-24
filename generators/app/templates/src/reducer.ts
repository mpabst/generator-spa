import { combineReducers } from 'redux'

import * as api from './api/reducer'
import * as errors from './errors/reducer'
import * as router from './routes/reducer'

// Would it be better to remove references to this, as much as possible, and
// just use structural typing instead? See connect() call in Funktion.tsx. Ditto
// for reducer args
export interface State {
  api: api.State
  errors: errors.State
  router: router.State
}

export const reducer = combineReducers({
  api: api.reducer,
  errors: errors.reducer,
  router: router.reducer
})
