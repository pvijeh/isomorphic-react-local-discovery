/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TrendingVenue.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class TrendingVenue extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    var TrendingVenues = [];

    const title = 'this thing title ';
    this.context.onSetTitle(title);
    return (
          <div className="TrendingVenue-container">
            <div className="TrendingVenue-VoteContainer">
               <a className="TrendingVenue-VoteButton" href="/about" onClick={Link.handleClick}>{this.props.item.votes} a</a>
            </div>
            <div className="TrendingVenue-ImageContainer">
              <img src={this.props.item.venueImg}/>
            </div>
            <div className="TrendingVenue-TextContainer">
              <h3>{this.props.item.venue}</h3>
              <p>{this.props.item.description}</p>
            </div>
            <div className="TrendingVenue-RightContainer">
              not sure what goes here
            </div>
          </div>
    );
  }

}

export default TrendingVenue;
