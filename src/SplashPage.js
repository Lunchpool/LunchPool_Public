import React, { Component } from 'react';
import './css/App.css';

class SplashPage extends Component {
  render() {
    return (
      <iframe
        src="https://lunchpools.com/"
        style={{ width: '100%', height: '100%',position: 'fixed', border:'none' }}
      />
    );
  }
}
export default SplashPage;
