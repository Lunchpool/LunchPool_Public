import React, { Component } from 'react';
import './css/LunchScanning.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Lunch from './Lunch';
import LunchScanning from './LunchScanning';
import LunchResults from './LunchResults';
import LunchNoResults from './LunchNoResults';

class Topics extends Component {
  render() {
    let match = this.props.match;
    console.log({ match });
    return (
      <div className="App">
        <Route path={`${match.url}/lunch`} component={Lunch} />
        <Route path={`${match.url}/searching`} component={LunchScanning} />
        <Route path={`${match.url}/results`} component={LunchResults} />
        <Route path={`${match.url}/no-results`} component={LunchNoResults} />
      </div>
    );
  }
}

export default Topics;
