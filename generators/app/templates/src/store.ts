import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { history } from './routes/reducer'

import { reducer } from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    )
  )
)

sagaMiddleware.run(sagas)
