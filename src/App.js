import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import SplashPage from './SplashPage';
import Topics from './Topics';
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
          <Route path="/topics" component={Topics} />
        </MuiThemeProvider>
      </Router>
    );
  }
}
export default App;
