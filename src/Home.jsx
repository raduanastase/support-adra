// @flow
import React, {PureComponent} from 'react';
import styles from './Home.css';
import 'whatwg-fetch';
import Routes from './Routes';

export default class Home extends PureComponent<{}, {}> {
  async componentDidMount() {
    const response = await fetch(Routes.API_CASES);
    const jsonData = await response.json();

    console.log(jsonData);
  }

  render() {
    return (
      <div className={styles.App}>

      </div>
    );
  }
}