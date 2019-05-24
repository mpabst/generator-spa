import React from 'react'
import { connect } from 'react-redux'

import { State } from './reducer'

const App = (state: State) => {
  return <h1>Current time: {new Date().toISOString()}</h1>
}

export default connect(state => state)(App)
