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
      temporaryModalListItem: this.props.data,
    }
    this.doSomeShit = this.doSomeShit.bind(this); 
  }

    handleClick_AddTag = event =>{
      AppActions.displayPopup(event);

      // need to send data to store about which items were selected and then update the state / data on the server and on venueprofile.js 

  }

    doSomeShit (event) {

      let temporaryModalListItem = this.state.temporaryModalListItem; 

      if (event.selected === true ) {
        temporaryModalListItem[event.id -1].selected = false; 
      } else {
        temporaryModalListItem[event.id -1].selected = true; 
      }

        this.setState({
          temporaryModalListItem : temporaryModalListItem        
        });

  }

  render() {

    let that = this; 

    let modalItems = [];  

     function venueListIterator(list, data , number){
          
            if ( typeof data != 'undefined' ){
              data.forEach(function(item, i){
                if (i < number && item.votes === 0 ){
                  list.push(<ModalListItem key={item.id} item={item} doSomeShit={that.doSomeShit} />); 
                }
            }.bind(this)); 
          }
        }

        venueListIterator(modalItems, this.state.temporaryModalListItem, 100); 


    if (this.props.data){
        // console.log(this.props.data);
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
