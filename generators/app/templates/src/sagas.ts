import { all, call, put } from 'redux-saga/effects'

import * as api from './api/actions'

function* fetchData(uri: string) {
  try {
    let response = yield call(fetch, uri)
    let data = yield call(response.text.bind(response))
    if (response.ok) yield put(api.succeed({ data, uri }))
    else yield put(api.fail({ error: data, uri }))
  } catch (error) {
    yield put(api.fail({ error, uri }))
  }
}

export default function*() {
  yield all([
    
  ])
}
