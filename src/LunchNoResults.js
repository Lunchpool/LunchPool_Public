import React, { Component } from 'react';

import './css/LunchResult.css';
import TopBar from './TopBar';

class LunchResults extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="lunch-result">
          <h2>Nice, but nobody wants to have lunch with you</h2>
          <p>We are sorry. Please donate us $1.</p>
        </div>
      </div>
    );
  }
}

export default LunchResults;
