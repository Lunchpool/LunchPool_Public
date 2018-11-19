import React, { Component } from 'react';
import './css/LunchScanning.css';
import { Route } from 'react-router-dom';
import Lunch from './Lunch';
import LunchScanning from './LunchScanning';
import LunchResults from './LunchResults';
import LunchNoResults from './LunchNoResults';
import TopBar from './TopBar';

class Topics extends Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <TopBar />
      <div className="App">
        <Route path={`${match.url}/lunch`} component={Lunch} />
        <Route path={`${match.url}/searching`} component={LunchScanning} />
        <Route path={`${match.url}/results`} component={LunchResults} />
        <Route path={`${match.url}/no-results`} component={LunchNoResults} />
      </div>
      </div>
    );
  }
}

export default Topics;
