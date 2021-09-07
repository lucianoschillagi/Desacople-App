import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import HomePage from './ui//pages/home/home.component';

// v.1.0
import AnotherOneBitesTheDust_Page from './ui/pages/analysis/v.1.0/1.Another/another-one-bites-the-dust.component';
import Satisfaction_Page from './ui/pages/analysis/v.1.0/2.Satisfaction/satisfaction.component';
import TheGoodTheBadAndTheUgly_Page from './ui/pages/analysis/v.1.0/3.The-Good/the-good.component';
import NoCoke_Page from './ui/pages/analysis/v.1.0/4.No-Coke/no-coke.component';

// v.1.1
import AnalysisPage from './ui/pages/analysis/analysis.component';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />

          {/* v.1.0 */}
          <Route exact path='/another-one-bites-the-dust' component={AnotherOneBitesTheDust_Page} />
          <Route exact path='/satisfaction' component={Satisfaction_Page} />
          <Route exact path='/the-good-the-bad-and-the-ugly' component={TheGoodTheBadAndTheUgly_Page} />
          <Route exact path='/no-coke' component={NoCoke_Page} />

          {/* For v.1.1. */}
          <Route path='/analysis' component={AnalysisPage} />    
        </Switch>
      </div>
    )
  } 
}

export default App

