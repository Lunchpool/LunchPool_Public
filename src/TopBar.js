import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import lunchpools from './img/lunchpool.svg';
import './css/TopBar.css';
import brian from './img/brian.png';

const styles = {
  root: {
    flexGrow: '1',
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  function goHome() {
    window.location.href = '/app/lunch';
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <div className="logo-wrapper">
            <img src={lunchpools} onClick={goHome} alt="lunchpool_logo" />
          </div>

          <div className="profile">
            <div>Brian</div>
            <img src={brian} alt="profile_pic" />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
