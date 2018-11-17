import React, { Component } from 'react';

import './css/LunchScanning.css';
import LunchBag from './img/lunchbag.svg';

class LunchScanning extends Component {


  render() {
    return (
      <div className="lunch-scanning">
        <h2>Looking for your lunch mates...</h2>
        <img src={LunchBag} className="bag" />
      </div>
    );
  }
}

export default LunchScanning;