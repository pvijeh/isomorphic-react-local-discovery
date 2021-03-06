/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import Link from '../Link';
import AppActions from '../../actions/appActions';
import VoteButton from '../VoteButton';

class ListItem extends Component {

handleVoteClick = event => {
  AppActions.displayPopup(event);
}

  render(){

    return(
      <div className="VenueProfile-BestListItem">
        <a href={this.props.item.Route} onClick={Link.handleClick}></a>
        <VoteButton item={this.props.item}/>
        <div className={"VenueProfile-ListItemIcon fa "+ this.props.item.CategoryIcon}>
        </div>
        <div className="VenueProfile-ListItemText">
          <p>{this.props.item.AttributeName}</p>
        </div>
      </div>
      )
  }

}


export default ListItem;
