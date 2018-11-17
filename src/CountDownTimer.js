import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

import './css/LunchScanning.css';

class CountDownTimer extends Component {

  render() {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <span>{minutes}:{seconds}</span>;
      }
    };

    return (
      <div className="lunch-scanning">
        <h2>Choose time</h2>
        <Countdown
          date={Date.now() + 1000000}
          renderer={renderer}
        />,


      </div>
    );
  }
}

export default CountDownTimer;
