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
        <div className="VenueProfile-ListItemIcon fa fa-adjust">
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

constructor (props) {
    super(props)
    this.state =  { 
      number_favoriteTags: 10,
      number_CrowdTags: 5,
      number_OtherTags: 5,
      number_BestListTags: 10 
    }
  }

  handleClick_AddTag = event =>{
    console.log(event);

    if (event === 'addTag'){

    } else if (event ==='viewMore'){

    }

  }
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

        // loops through data object and adds a VenueProfileItem for each Object
        // list --> an array to contain each component 
        // component --> the component that gets added for each item in the data array 
        // data --> an array of data 
        // number --> how many items from the array render initially 

        function venueListIterator(list, component, data , number){
          
            if (typeof data != 'undefined' ){
              data.forEach(function(item, i){
                if (i < number ){
                  list.push(<VenueProfileItem key={item.id} item={item}/>); 
                }
            }); 
          }
        }
       
        venueListIterator(venueList_favoriteTags, VenueProfileItem, trendingVenues, this.state.number_favoriteTags); 
        venueListIterator(venueList_CrowdTags, VenueProfileItem, trendingVenues, this.state.number_CrowdTags); 
        venueListIterator(venueList_OtherTags, VenueProfileItem, trendingVenues, this.state.number_OtherTags); 
        venueListIterator(venueList_BestListTags, VenueProfileItem, trendingVenues, this.state.number_BestListTags); 

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

              {venueList_favoriteTags}

                <div className="VenueProfile-ButtonContainer">
                  <button onClick={this.handleClick_AddTag.bind(this, 'viewMore')}> View More Tags </button> 
                  <button onClick={this.handleClick_AddTag.bind(this, 'addTag')}> Add New Tag </button> 
                </div>
 
        </div>
          
          <div className="VenueProfile-ReviewSection">
              <h3>{venue+reviewSectionFour}</h3>

                {venueList_CrowdTags}

                <div className="VenueProfile-ButtonContainer">
                  <button> View More Tags </button> 
                  <button> Add New Tag </button> 
                </div>

          </div>

          <div className="VenueProfile-ReviewSection">

              <h3>{venue+reviewSectionFour}</h3>
          
                {venueList_OtherTags}

                <div className="VenueProfile-ButtonContainer">
                  <button> View More Tags </button> 
                  <button> Add New Tag </button> 
                </div>
       
          </div>

        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>
              {venueList_BestListTags}

                <div className="VenueProfile-ButtonContainer">
                  <button> View More Tags </button> 
                  <button> Add New Tag </button> 
                </div>

        </div>

          <div className="VenueProfile-ImageContainer VenueProfile-ReviewSection">
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
