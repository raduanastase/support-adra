// @flow
import React, {PureComponent} from 'react';
import styles from './ThumbnailCaseView.css';

type TypeProps = {
  name: string,
  description: string,
  imagePath: string,
};
type TypeState = {};

export default class ThumbnailCaseView extends PureComponent<TypeProps, TypeState> {
  render() {
    return (
      <div className={styles.main}>
        <img src={this.props.imagePath} alt="case thumbnail" className={styles.image}/>
        <h2>{this.props.name}</h2>
        <div>{this.props.description}</div>
      </div>
    );
  }
}