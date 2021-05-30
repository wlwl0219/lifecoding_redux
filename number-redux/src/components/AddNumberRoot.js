import React, { Component } from 'react';
import AddNumberRedux from '../containers/AddNumberRedux';

export default class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumberRedux></AddNumberRedux>
      </div>
    );
  }
}
