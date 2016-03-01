/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './VenueProfile.css';
import Link from '../Link';
import AppActions from '../../actions/appActions';
import AppStore from '../../stores/appStore'; 
import ListItem from '../ListItem';
import VoteButton from '../VoteButton';


// gets the new venues list from the store 
let getPopupState = function() {
  return AppStore.sendPopupState();
};

@withStyles(styles)
class VenueProfile extends Component {

constructor (props) {
    super(props)
    this.state =  { 
      trendingVenues: this.props.content.success.placeAttributes, 
      number_favoriteTags: 10,
      number_CrowdTags: 5,
      number_OtherTags: 5,
      number_BestListTags: 10 
    }
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  handleVoteClick = event => {
  console.log(event);
  AppActions.displayPopup(event);
}

  handleClick_addTag = event =>{
      // sends popup click event to actions 
      AppActions.displayPopup(event);
  } 

  handleClick_viewMoreTags = event =>{

    switch (event[2]) {
        
        case "favoriteTag":
          this.setState({ number_favoriteTags: this.state.number_favoriteTags+10 })
          break;

        case "crowdTag":
        this.setState({ number_CrowdTags: this.state.number_CrowdTags+5 })
          break;

        case "otherTag":
          this.setState({ number_OtherTags : this.state.number_OtherTags+5 })
          break;

        case "bestListTag":
          this.setState({ number_BestListTags: this.state.number_BestListTags+10 })
          break;
      }
   } 

  onCloseModal () {

    let popState = getPopupState();

    // checks if the modal action was a close 
    // if it was a close,  then it will check for new selected venues 
    if (popState[0] == false ) {    
      this.setState({
      trendingVenues : popState[1]
      });
    }
  }

componentWillMount () {
  AppStore.addChangeListener(this.onCloseModal);
}

componentWillUnmount() {
    AppStore.removeChangeListener(this.onCloseModal);
  }

  static contextTypes = {
    onSetVenue: PropTypes.func.isRequired,
    onSetreviewSectionOne: PropTypes.func.isRequired,
    onSetreviewSectionTwo: PropTypes.func.isRequired,
    onSetreviewSectionThree: PropTypes.func.isRequired,
  };

  render() {

    console.log(this.props.content.success.placeAttributes);

    console.log(this.props.content.success.placeAttributes); 

    const venue = '[Hypothetical Venue]';
    const reviewSectionOne = 'Why People Like ';
    const reviewSectionTwo = 'What Kind of Crowd Goes to ';
    const reviewSectionThree = 'Type of crowd at ';
    const reviewSectionFour = 'How to get in to ';
    const mainImage = {background: 'url(http://lorempixel.com/1250/600/)'}; 

      let venueList_favoriteTags = [],
      venueList_CrowdTags = [],
      venueList_GettingInTags = [],
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
                if (i < number && item.count > 0 ){
                  list.push(<ListItem key={item.Id} item={item}/>); 
                }
            }); 
          }
        }
       
        venueListIterator(venueList_favoriteTags, this.state.trendingVenues.slice(2,20), this.state.number_favoriteTags); 
        venueListIterator(venueList_CrowdTags, this.state.trendingVenues.slice(9,20), this.state.number_CrowdTags); 
        venueListIterator(venueList_GettingInTags, this.state.trendingVenues.slice(3,9), this.state.number_CrowdTags); 
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
         
          <div className="VenueProfile-MainImage" style={mainImage}>
            <div className="VenueProfile-MainImageInner">
              <h1>{venue}</h1>
              <p>main image goes here,  not sure if I will keep a large hero image</p>
              <div className="VenueProfile-MainButtonContainer">
                    
                    <VoteButton item={this.state.trendingVenues[1]}/>
                    <p onClick={this.handleVoteClick.bind(null, this.state.trendingVenues[1])}>FAVORITE</p>
              </div>
            </div>
          </div>
          
        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>

              {venueList_favoriteTags}

                <div className="VenueProfile-ButtonContainer">
                  <button onClick={this.handleClick_viewMoreTags.bind(this, [true, 'viewMore', 'favoriteTag' ] )}> View More Tags </button> 
                  <button onClick={this.handleClick_addTag.bind(this, [true , 'addTag', 'favoriteTag', this.state.trendingVenues] )}> Add New Tag </button> 
                </div>
 
        </div>
          
          <div className="VenueProfile-ReviewSection">
            <div className="VenueProfile-ReviewSection--Half">
              <h3>{reviewSectionThree+' '+venue}</h3>
                {venueList_CrowdTags}
            </div>
            <div className="VenueProfile-ReviewSection--Half">
                <h3>{reviewSectionFour+' '+venue}</h3>
                {venueList_GettingInTags}
            </div>
         </div>

        <div className="VenueProfile-ImageContainer VenueProfile-ReviewSection">
            <div className="VenueProfile-ReviewSection--Half">
            <div className="VenueProfile-DetailsContainer">
                <p>Venue Type: </p>
                <p>Neighborhood: </p>
                <p>Phone Number: </p>
                <p>Address: </p>
                <p>Website: </p>
              </div>
            </div>
            <div className="VenueProfile-ReviewSection--Half">
              <div className="VenueProfile-MapContainer">
              map
              </div>
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
