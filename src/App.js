import React, { Component } from 'react';
import TopBar from './TopBar';
import './css/App.css';
import Lunch from './Lunch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Lunch/>
      </div>
    );
  }
}

export default App;
