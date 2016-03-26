/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import Link from '../Link';
import AppActions from '../../actions/appActions';

class VoteButton extends Component {

handleVoteClick = event => {
  AppActions.displayPopup(event);
}

  render(){
    return(
        <div className="App-VoteButtonContainer" onClick={this.handleVoteClick.bind(null, this.props.item)}>
          <span>{this.props.item.count}</span>
        </div>
      )
  }

}


export default VoteButton;
