import React, { Component } from 'react';
import TimeSlotPicker from './TimeSlotPicker';
import Button from '@material-ui/core/Button';

import map from './img/map.png';
import './css/Lunch.css';

class Lunch extends Component {
  constructor () {
    super();

    this.start = this.start.bind(this);
  }
  start () {
    this.props.history.push('/searching');
  }

  render() {
    return (
      <div className="App">
        <h2>Choose time</h2>
        <TimeSlotPicker />
        <h2>Confirm area</h2>
        <div className="map">
          <div className="circle" />
          <img src={map} />
        </div>


        <Button variant="contained" size="large" color="primary" id="lunch-button" onClick={this.start}>
          Let's go for lunch
        </Button>
      </div>
    );
  }
}

export default Lunch;