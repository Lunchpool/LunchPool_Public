import React, { Component } from 'react';
import './css/App.css';

class SplashPage extends Component {
  componentWillMount () {
    document.getElementsByTagName('body')[0].classList.add('lunch');
  }

  componentWillUnmount () {
    document.getElementsByTagName('body')[0].classList.remove('lunch');
  }

  render() {
    return (
      <iframe
        title="splash page"
        src="https://lunchpools.com/"
        style={{ width: '100%', height: '100%',position: 'fixed', border:'none' }}
      />
    );
  }
}
export default SplashPage;
