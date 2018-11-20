import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import Application from './Application';
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
    let currRoute = window.location.href.substring(21)
    if(currRoute === '/') { window.location.replace("splashpage.html") };
    return (
      <Router className="App">
        <MuiThemeProvider theme={theme}>
          <Route path="/app" component={Application} />
        </MuiThemeProvider>
      </Router>
    );
  }
}
export default App;
