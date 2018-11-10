import React from 'react'
import{Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import Diary from './Diary'


const App = () => {
  return (
    <Router>
    <Fragment>
    
    <h1>My Baby Growing Journey</h1>
    <Route path='/' component={Diary} />
    
    </Fragment>
    </Router>
  )
}

export default App

