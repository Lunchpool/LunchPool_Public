import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopBar from './TopBar';
import './css/App.css';
import Lunch from './Lunch';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <TopBar />
          <Route exact path="/" component={Lunch} />
        </div>
      </Router>
    );
  }
}
export default App;
