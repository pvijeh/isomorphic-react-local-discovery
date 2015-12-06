/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './ModalContainer.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import AppActions from '../../actions/appActions';
import ModalListItem from '../ModalListItem'; 

@withStyles(styles)
class ModalContainer extends Component {
  constructor (props) {
    super(props)
    this.state =  { 
      TemporaryModalListItem: this.props.data
    }
  }

    handleClick_AddTag = event =>{
      AppActions.displayPopup(event);
  }

  render() {

    let modalItems = [];  

     function venueListIterator(list, data , number){
          
            if ( typeof data != 'undefined' ){
              data.forEach(function(item, i){
                if (i < number && item.votes === 0 ){
                  list.push(<ModalListItem key={item.id} item={item}/>); 
                }
            }); 
          }
        }

        venueListIterator(modalItems, this.state.TemporaryModalListItem, 100); 


    if (this.props.data){
        console.log(this.props.data);
    }    
  
  return (
      <div className="ModalContainer-wrap">
        <div className="ModalContainer-inner">
          <span className="ModalContainer-close" onClick={this.handleClick_AddTag.bind(this, [false] )}>X</span>  
          <div className="ModalContainer-innerInner">
            <div className="ModalContainer-content">
              {modalItems}
            </div>
          </div>
          <button className="ModalContainer-bottomCloseButton" onClick={this.handleClick_AddTag.bind(this, [false] )}> close </button>
        </div>
      </div>
    );
  }

}

export default ModalContainer;
