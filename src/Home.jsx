// @flow
import React, {PureComponent} from 'react';
import styles from './Home.css';

export default class Home extends PureComponent<{}, {}> {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}