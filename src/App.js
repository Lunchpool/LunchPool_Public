import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopBar from './TopBar';
import './css/App.css';
import Lunch from './Lunch';
import LunchScanning from './LunchScanning';
import LunchResults from './LunchResults';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <TopBar />
          <Route exact path="/" component={Lunch} />
          <Route exact path="/searching" component={LunchScanning} />
          <Route exact path="/results" component={LunchResults} />
        </div>
      </Router>
    );
  }
}
export default App;
