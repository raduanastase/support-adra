// @flow
import React, {PureComponent} from 'react';
import logo from './logo.svg';
import styles from './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Header/>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
);

const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </div>
);

class Home extends PureComponent<{}, {}> {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class About extends PureComponent<{}, {}> {
  render() {
    return (
      <div className={styles.App}>
        ABOUT
      </div>
    );
  }
}

export default App;
