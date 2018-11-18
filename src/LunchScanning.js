import React, { Component } from 'react';
import CountDownTimer from './CountDownTimer';

import './css/LunchScanning.css';
import LunchBag from './img/lunchbag.svg';
import TopBar from './TopBar';

class LunchScanning extends Component {
  render() {
    setTimeout(() => {
      this.props.history.push('/results');
    }, 10000);

    return (
      <div>
        <TopBar />
        <div className="lunch-scanning">
          <h2>Looking for your lunch mates...</h2>
          <CountDownTimer />
          <img src={LunchBag} className="bag" />
        </div>
      </div>
    );
  }
}

export default LunchScanning;
