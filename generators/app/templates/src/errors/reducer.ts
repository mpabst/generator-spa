import { Action } from '../actions'
import * as api from '../api/actions'

export type State = api.FailPayload[]

// I put this in an 'errors' folder so keep all common error handling code
// together, but I'm not sure that's the best thing. Then again, if we package
// error handling per component, then how can we work with all errors at once?
// Maybe we can make use of the graphy nature of the central store? Maybe
// components which produce errors can export an action+state+reducer set via
// some well known names?
export function reducer(state: State = [], {type, payload}: Action) {
  switch (type) {
    case api.Type.FAIL: return [...state, payload as api.FailPayload]
    default: return state
  }
}
