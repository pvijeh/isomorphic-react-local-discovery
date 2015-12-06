/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import Link from '../Link';
import AppActions from '../../actions/appActions';

class ModalListItem extends Component {
  constructor (props) {
    super(props)
    this.handleModalListClick = this.handleModalListClick.bind(this);
  }

  handleModalListClick (event){
    console.log(event);
    console.log('handle modal list click called from modal list item component');
  }

  render(){

    return(
      <div 
      className={`VenueProfile-BestListItem VenueProfile-BestListItem--modal ${'VenueProfile-BestListItem--modal'}`}
      onClick={this.handleModalListClick.bind(this, this.props.item)}
      >
        <div className={`VenueProfile-ListItemIcon fa ${this.props.item.venueIcon}`}>
        </div>
        <div className="VenueProfile-ListItemText">
          <p>{this.props.item.description + this.props.item.votes}</p>
        </div>
      </div>
      )
  }

}

export default ModalListItem;
