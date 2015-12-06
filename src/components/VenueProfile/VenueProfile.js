/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './VenueProfile.css';
import Link from '../Link';
import AppActions from '../../actions/appActions';
import ListItem from '../ListItem';


let trendingVenues = [
  {id: 1, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 2, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 3, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 4, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 5, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 6, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 7, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 8, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 9, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 10, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 11, venue: 'venue name', votes: 1, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 12, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 13, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 14, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 15, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 16, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 17, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 18, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 19, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'},
  {id: 20, venue: 'venue name', votes: 0, venueIcon: 'fa-adjust', description: 'one line description not', route: '/venue'}
];

@withStyles(styles)
class VenueProfile extends Component {

constructor (props) {
    super(props)
    this.state =  { 
      trendingVenues: trendingVenues, 
      number_favoriteTags: 10,
      number_CrowdTags: 5,
      number_OtherTags: 5,
      number_BestListTags: 10 
    }
  }

  handleClick_AddTag = event =>{

    if (event[1] === 'addTag'){

      AppActions.displayPopup(event);

    } else if (event[1] ==='viewMore'){

      console.log(event[2]);
      
      switch (event[2]) {
        
        case "favoriteTag":
          console.log("favoriteTag");
          console.log(this.state.number_favoriteTags);
          this.setState({
            number_favoriteTags: this.state.number_favoriteTags+10
          })
          console.log(this.state.number_favoriteTags);
          break;

        case "crowdTag":
          this.setState({
            number_CrowdTags: this.state.number_CrowdTags+5
          })
          break;

        case "otherTag":
          this.setState({
            number_OtherTags : this.state.number_OtherTags+5
          })
          break;

        case "bestListTag":
          this.setState({
            number_BestListTags: this.state.number_BestListTags+10
          })
          break;
      }
      

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

       // this needs to be added to some sort of view helpers file that has all my functions / methods for doing view

        // loops through data object and adds a VenueProfileItem for each Object
        // list --> an array to contain each component 
        // component --> the component that gets added for each item in the data array 
        // data --> an array of data 
        // number --> how many items from the array render initially 

        function venueListIterator(list, data , number){
          
            if (typeof data != 'undefined' ){
              data.forEach(function(item, i){
                if (i < number ){
                  list.push(<ListItem key={item.id} item={item}/>); 
                }
            }); 
          }
        }
       
        venueListIterator(venueList_favoriteTags, this.state.trendingVenues, this.state.number_favoriteTags); 
        venueListIterator(venueList_CrowdTags, this.state.trendingVenues, this.state.number_CrowdTags); 
        venueListIterator(venueList_OtherTags, this.state.trendingVenues, this.state.number_OtherTags); 
        venueListIterator(venueList_BestListTags, this.state.trendingVenues, this.state.number_BestListTags); 

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
                  <button onClick={this.handleClick_AddTag.bind(this, [true, 'viewMore', 'favoriteTag' ] )}> View More Tags </button> 
                  <button onClick={this.handleClick_AddTag.bind(this, [true , 'addTag', 'favoriteTag', this.state.trendingVenues] )}> Add New Tag </button> 
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
