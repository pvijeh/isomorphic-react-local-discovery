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
    this.props.trackClickedItems(event);  
  }

  render(){

    let selectedClass = ''; 
    if(this.props.item.selected === true ){
      console.log('do some shiz');
      selectedClass = 'VenueProfile-BestListItem--modalSelected' 
    }

    return(
      <div 
      className={`VenueProfile-BestListItem VenueProfile-BestListItem--modal ${selectedClass}`}
      onClick={this.handleModalListClick.bind(this, this.props.item)}
      >
        <div className={`VenueProfile-ListItemIcon fa ${this.props.item.CategoryIcon}`}>
        </div>
        <div className="VenueProfile-ListItemText">
          <p>{this.props.item.description + this.props.item.count}</p>
        </div>
      </div>
      )
  }
}

export default ModalListItem;
