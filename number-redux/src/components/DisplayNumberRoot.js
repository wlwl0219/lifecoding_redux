import React, { Component } from 'react';
import DisplayNumberRedux from '../containers/DisplayNumberRedux';

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumberRedux></DisplayNumberRedux>
      </div>
    );
  }
}
