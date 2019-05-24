import { Action } from '../actions'

export interface State {

}

export function reducer(
  state: State = { },
  { type, payload }: Action
) {
  switch (type) {
    default: return state
  }
}
