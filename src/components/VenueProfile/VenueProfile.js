/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './VenueProfile.css';
import Link from '../Link';


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




class VenueProfileItem extends Component {

  render(){

    return(
      <div className="VenueProfile-BestListItem">
        <a href="/about" onClick={Link.handleClick}></a>
        <div className="VenueProfile-ListItemVoteContainer">
          <span>1111</span>
        </div>
        <div className="VenueProfile-ListItemIcon">
          <img src="http://lorempixel.com/80/80/" />
        </div>
        <div className="VenueProfile-ListItemText">
          <p>lorem lorem  lorem  lorem  lorem  lorem </p>
        </div>
      </div>
      )
  }

}




@withStyles(styles)
class VenueProfile extends Component {

  // not sure what this context stuff is about,  need to research it 

  // static contextTypes = {
  //   onSetVenue: PropTypes.func.isRequired,
  //   onSetreviewSectionOne: PropTypes.func.isRequired,
  //   onSetreviewSectionTwo: PropTypes.func.isRequired,
  //   onSetreviewSectionThree: PropTypes.func.isRequired,
  // };

  render() {
    const venue = 'Venue Name';
    const reviewSectionOne = 'Why People Like ';
    const reviewSectionTwo = 'What Kind of Crowd Goes to ';
    const reviewSectionThree = 'What Kind of Crowd Goes to ';
    const reviewSectionFour = ' Appears on These Best of Lists';

      let venueList_favoriteTags = [],
      venueList_CrowdTags = [],
       venueList_OtherTags = [],
       venueList_BestListTags = []; 

        function venueListIterator(list, component, data , number){
          
            if (typeof data != 'undefined' ){
              data.forEach(function(item, i){
                console.log(i);
                if (i < number ){
                  list.push(<VenueProfileItem key={item.id} item={item}/>); 
                }
            }); 
          }
        }
       
        venueListIterator(venueList_favoriteTags, VenueProfileItem, trendingVenues, 10); 
        venueListIterator(venueList_CrowdTags, VenueProfileItem, trendingVenues, 5); 
        venueListIterator(venueList_OtherTags, VenueProfileItem, trendingVenues, 5); 
        venueListIterator(venueList_BestListTags, VenueProfileItem, trendingVenues, 10); 

    // not sure what this context stuff is about,  need to research it 

    // this.context.onSetVenue(venue);
    // this.context.reviewSectionOne(reviewSectionOne);
    // this.context.reviewSectionTwo(reviewSectionTwo);
    // this.context.reviewSectionThree(reviewSectionThree);
    
    return (
      <div className="VenueProfile">
        <div className="VenueProfile-container">
          
          <div className="VenueProfile-MainImage">
            <h1>{venue}</h1>
            main image goes here,  not sure if I will keep a large hero image 
          </div>
          
        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>
          <div className="VenueProfile-BestListItemRow">

              {venueList_favoriteTags}
 
          </div>    
        </div>
          
          <div className="VenueProfile-ReviewSection">
            <div className="VenueProfile-BestListItemRow">
              <h3>{venue+reviewSectionFour}</h3>

                {venueList_CrowdTags}

              <h3>{venue+reviewSectionFour}</h3>
          
                {venueList_OtherTags}
       
            </div>
          </div>

        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>
          <div className="VenueProfile-BestListItemRow">
              {venueList_BestListTags}
          </div>    
        </div>

          <div className="VenueProfile-ImageContainer VenueProfile-BestListItemRow">
              <div className="VenueProfile-Image">image</div>
              <div className="VenueProfile-Image">image</div>
              <div className="VenueProfile-Image">image</div>
          </div>

        </div>
      </div>
    );
  }

}

export default VenueProfile;
