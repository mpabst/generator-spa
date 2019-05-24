import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

import App from './App'
import store from './store'
import { history } from './routes/reducer'

const bootApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={App} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )  
}

// Need to delay our call to ReactDOM.render because the root elem doesn't yet
// exist when we evaluate this script
declare global {
  interface Window { bootApp: typeof bootApp }
}

window.bootApp = bootApp
