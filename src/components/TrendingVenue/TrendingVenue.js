/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './TrendingVenue.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

// note the css for this component is in the VenueList Component file,  
// this is to prevent it from being called in multiple times 
class TrendingVenue extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  handleVoteClick = event =>{
    // this needs to send a request to the server api 
    // needs to check whether a user is logged in or not
    // show login / signup screen if user not logged in 
    // increment vote count if user is logged in 
    // should have different css if a user is logged in and has already voted 
    alert('stuff');
  }

  render() {

    var TrendingVenues = [];

    const title = 'this thing title ';

    this.context.onSetTitle(title);
    return (
          <div className="TrendingVenue-container">
            <a href={`/venue/${this.props.item.id}`} onClick={Link.handleClick}></a>
              <div className="TrendingVenue-VoteContainer">

                  <p className="TrendingVenue-VoteButton" onClick={this.handleVoteClick.bind(this)}>{this.props.item.votes}</p>

              </div>
              <div className="TrendingVenue-ImageContainer">
                <img src={this.props.item.venueImg}/>
              </div>
              <div className="TrendingVenue-TextContainer">
                <h3>{this.props.item.venue}</h3>
                <p>{this.props.item.description}</p>
              </div>
          </div>
    );
  }

}

export default TrendingVenue;
