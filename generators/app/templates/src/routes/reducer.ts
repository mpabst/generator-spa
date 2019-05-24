import {
  LocationChangeAction,
  RouterState,
  connectRouter,
} from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { Action } from 'redux'

type State = RouterState & { params: URLSearchParams }

const history = createBrowserHistory()

const initialState = () => {
  // Have to paste in connected-react-router's initial state construction,
  // because it doesn't export it, and Redux really doesn't want us listening to
  // INIT actions
  return {
    location: history.location,
    action: history.action,
    params: new URLSearchParams(),
  }
}

const innerReducer = connectRouter(history)

function reducer(state: State = initialState(), action: Action) {
  let newState = innerReducer(state, action as LocationChangeAction)
  return { ...newState, params: new URLSearchParams(newState.location.search) }
}

export { State, history, reducer }
