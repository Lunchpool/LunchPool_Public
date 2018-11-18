import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import lunchpools from './img/lunchpools.svg';
import './css/TopBar.css';
import brian from './img/brian.png';

const styles = {
  root: {
    flexGrow: '1',
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className="logo-wrapper">
            <img src={lunchpools} />
          </div>

          <img
            src={brian}
            style={{
              position: 'absolute',
              top: '0',
              right: '10px',
              height: '100%',
              padding: '7px',
              boxSizing: 'border-box',
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
