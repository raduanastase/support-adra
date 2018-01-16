// @flow
import React, {PureComponent} from 'react';

type TypeProps = {};
type TypeState = {};

export default class CaseEdit extends PureComponent<TypeProps, TypeState> {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nume
          <input/>
        </label>
      </form>
    );
  }

  handleSubmit() {

  }
}