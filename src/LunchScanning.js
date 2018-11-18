import React, { Component } from 'react';
import CountDownTimer from './CountDownTimer';

import './css/LunchScanning.css';
import LunchBag from './img/lunchbag.svg';

class LunchScanning extends Component {


  render() {

    setTimeout(() => {
      this.props.history.push('/results')
    }, 10000);

    return (
      <div className="lunch-scanning">
        <h2>Looking for your lunch mates...</h2>
        <CountDownTimer />
        <img src={LunchBag} className="bag" />
      </div>
    );
  }
}

export default LunchScanning;