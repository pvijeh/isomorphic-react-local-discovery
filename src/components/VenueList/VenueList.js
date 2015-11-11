/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './VenueList.css';
import withStyles from '../../decorators/withStyles';
import TrendingVenue from '../TrendingVenue';

// this is temporary data to be replaced with 

let trendingVenues = [
  {id: 1, venue: 'venue name', votes: 1, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 2, venue: 'venue name', votes: 2, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 3, venue: 'venue name', votes: 3, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 4, venue: 'venue name', votes: 4, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 5, venue: 'venue name', votes: 5, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 6, venue: 'venue name', votes: 6, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 7, venue: 'venue name', votes: 7, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 8, venue: 'venue name', votes: 8, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 9, venue: 'venue name', votes: 9, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'},
  {id: 10, venue: 'venue name', votes: 10, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters'}
];

@withStyles(styles)
class VenueList extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    var renderVenueList = [];

        if (typeof trendingVenues != 'undefined' ){
          var thing = trendingVenues; 
            thing.forEach(function(item){
            renderVenueList.push(<TrendingVenue key={item.id} item={item}/>); 
          }); 
        }

    const title = 'this thing title ';
    this.context.onSetTitle(title);
    return (
        <div className="VenueList-container">
          {renderVenueList}
        </div>
    );
  }

}

export default VenueList;
