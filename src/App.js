import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import './icon.config.js'

import Landing from './components/Landing'
import ResultPage from './components/ResultPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = { Landing } />
        <Route path = "/results" component = { ResultPage } />
      </Switch>
    </div>
  );
}

export default App
