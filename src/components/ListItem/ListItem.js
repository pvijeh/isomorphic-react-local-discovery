/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import Link from '../Link';
import AppActions from '../../actions/appActions';

class ListItem extends Component {

  render(){

    return(
      <div className="VenueProfile-BestListItem">
        <a href={this.props.item.route} onClick={Link.handleClick}></a>
        <div className="VenueProfile-ListItemVoteContainer">
          <span>{this.props.item.votes}</span>
        </div>
        <div className={"VenueProfile-ListItemIcon fa "+ this.props.item.venueIcon}>
        </div>
        <div className="VenueProfile-ListItemText">
          <p>{this.props.item.description}</p>
        </div>
      </div>
      )
  }

}


export default ListItem;