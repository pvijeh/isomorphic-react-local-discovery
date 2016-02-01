/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './VenueList.css';
import withStyles from '../../decorators/withStyles';
import TrendingVenue from '../TrendingVenue';

// this is temporary data to be replaced with data from API 

let trendingVenues = [
  {id: 1, venue: 'venue name', votes: 111, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/testvenue'},
  {id: 2, venue: 'venue name', votes: 211, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/1'},
  {id: 3, venue: 'venue name', votes: 311, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/2'},
  {id: 4, venue: 'venue name', votes: 411, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/3'},
  {id: 5, venue: 'venue name', votes: 511, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/4'},
  {id: 6, venue: 'venue name', votes: 611, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/5'},
  {id: 7, venue: 'venue name', votes: 711, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/6'},
  {id: 8, venue: 'venue name', votes: 811, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/7'},
  {id: 9, venue: 'venue name', votes: 911, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/8'},
  {id: 10, venue: 'venue name', votes: 101, venueImg: 'http://lorempixel.com/200/200', description: 'one line description not more than 100 characters', route: '/9'}
];

@withStyles(styles)
class VenueList extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {

    let renderVenueList = [];

        if (typeof trendingVenues != 'undefined' ){
            trendingVenues.forEach(function(item){
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
