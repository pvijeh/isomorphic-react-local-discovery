/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './VenueProfile.css';
import Link from '../Link';

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
            <div className="VenueProfile-BestListItemColumn">

              <div className="VenueProfile-BestListItem">
                <a href="/about" onClick={Link.handleClick}></a>
                <div className="VenueProfile-ListItemVoteContainer">
                  <span>1111</span>
                </div>
              </div>
              
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
            </div>
            <div className="VenueProfile-BestListItemColumn">
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
            </div>
          </div>    
        </div>
          
          <div className="VenueProfile-ReviewSection">
            <div className="VenueProfile-BestListItemRow">
              <div className="VenueProfile-BestListItemColumn">
              <h3>{venue+reviewSectionFour}</h3>
                <div className="VenueProfile-BestListItem"></div>
                <div className="VenueProfile-BestListItem"></div>
                <div className="VenueProfile-BestListItem"></div>
                <div className="VenueProfile-BestListItem"></div>
              </div>

              <div className="VenueProfile-BestListItemColumn">
              <h3>{venue+reviewSectionFour}</h3>
                <div className="VenueProfile-BestListItem"></div>
                <div className="VenueProfile-BestListItem"></div>
                <div className="VenueProfile-BestListItem"></div>
                <div className="VenueProfile-BestListItem"></div>
              </div>
            </div>
          </div>

        <div className="VenueProfile-ReviewSection">
          <h3>{reviewSectionOne+venue}</h3>
          <div className="VenueProfile-BestListItemRow">
            <div className="VenueProfile-BestListItemColumn">
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
            </div>
            <div className="VenueProfile-BestListItemColumn">
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
              <div className="VenueProfile-BestListItem"></div>
            </div>
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
