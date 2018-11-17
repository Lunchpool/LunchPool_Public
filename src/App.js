import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
import TimeSlotPicker from './TimeSlotPicker';
import map from './img/map.png';
import Button from '@material-ui/core/Button';

class App extends Component {


  render() {
    return (
      <div className="App">
        <TopBar />
        <h2>Choose time</h2>
        <TimeSlotPicker />
        <h2>Confirm area</h2>
        <div className="map">
          <div className="circle" />
          <img src={map} />
        </div>

        <Button variant="contained" size="large" color="primary" id="lunch-button">
          Let's go for lunch
        </Button>
      </div>
    );
  }
}

export default App;
