import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/App.css';
import Lunch from './Lunch';
import LunchScanning from './LunchScanning';
import LunchResults from './LunchResults';
import LunchNoResults from './LunchNoResults';
import SplashPage from './SplashPage';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f73812',
    },
    secondary: {
      main: '#028CEC',
    },
  },
});

class App extends Component {
  render() {
    return (
      <Router className="App">
        <MuiThemeProvider theme={theme}>
          <Route exact path="/" component={SplashPage} />
          {/*<TopBar  />*/}
          <Route exact path="/lunch" component={Lunch} />
          <Route exact path="/searching" component={LunchScanning} />
          <Route exact path="/results" component={LunchResults} />
          <Route exact path="/no-results" component={LunchNoResults} />
        </MuiThemeProvider>
      </Router>
    );
  }
}
export default App;
