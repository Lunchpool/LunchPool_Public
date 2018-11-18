import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CommentIcon from '@material-ui/icons/Comment';

import './css/LunchResult.css';
import selectedMap from './img/selectedMap.png';
import richard from './img/richard.png';
import betty from './img/betty.png';
import alin from './img/alin.png';

class LunchResults extends Component {

  constructor () {
    super();

    this.names = [
      {name: 'Betty P.', photoSrc: betty},
      {name: 'Richard M.', photoSrc: richard},
      {name: 'Alin I.', photoSrc: alin},
    ];
  }

  render() {
    return (
      <div className="lunch-result">
        <h2>We did it! We found your lunch mates. </h2>
        <h2>12:00, Fabrica Pizza 142 S Meridian Ave, Tampa, FL 33602.</h2>
        <img className="selectedMap" src={selectedMap} />
        <List dense>
          {[0, 1, 2].map(value => (
            <ListItem key={value} button>
              <Avatar alt="Remy Sharp" src={this.names[value].photoSrc} />
              <ListItemText primary={this.names[value].name} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default LunchResults;