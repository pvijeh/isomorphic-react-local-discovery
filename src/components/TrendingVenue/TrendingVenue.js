/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TrendingVenue.css';
import withStyles from '../../decorators/withStyles';

// this is temporary data to be replaced with 
let 


@withStyles(styles)
class TrendingVenue extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    var TrendingVenues = [];


    const title = 'fukkkkkkkkkkk';
    this.context.onSetTitle(title);
    return (
        <div className="TrendingVenue-container">
          <div className="TrendingVenue-VoteContainer">
            voting goes here 
          </div>
          <div className="TrendingVenue-ImageContainer">
          <img src="#"/>
          </div>
          <div className="TrendingVenue-TextContainer">
            <h1>{title}</h1>
            <p>top rated one liner about venue goes here</p>
          </div>
          <div className="TrendingVenue-RightContainer">
          not sure what goes here yet, but something will. 
          </div>
        </div>
    );
  }

}

export default TrendingVenue;
