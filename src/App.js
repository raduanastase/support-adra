// @flow
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <div>
      <Header/>

      <hr/>

      <Route exact path={Routes.HOME} component={Home}/>
      <Route exact path={Routes.ABOUT} component={About}/>
    </div>
  </Router>
);

export default App;
