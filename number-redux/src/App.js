import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
