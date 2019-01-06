import React, { Component } from 'react';
import './App.css';
import Registration from './containers/registration';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Registration</h1>
        <Registration />
      </div>
    );
  }
}

export default App;
