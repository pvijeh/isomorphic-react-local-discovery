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
      temporaryModalListItem: this.props.data
    }
    this.doSomeShit = this.doSomeShit.bind(this); 
  }

    handleClick_AddTag = event =>{
      let tempList = this.state.temporaryModalListItem; 

      AppActions.displayPopup(event);

      this.state.temporaryModalListItem.forEach( function(item){

        if (item.selected == true ) {
          tempList[item.Id - 1].count = 1;  
          tempList[item.Id - 1].selected = false;  
        }

      });

      this.setState({
        temporaryModalListItem : tempList
      });


      // need to send data to store about which items were selected and then update the state / data on the server and on venueprofile.js 
  }

    // this displays any tags that do not currently have any votes -- saves them to state variable temporaryModalListItems

    doSomeShit (event) {

      let temporaryModalListItem = this.state.temporaryModalListItem; 

      if (temporaryModalListItem[event.Id -1].selected === true ) {
        temporaryModalListItem[event.Id -1].selected = false;
        console.log(temporaryModalListItem[event.Id -1].selected);
      } else {
        temporaryModalListItem[event.Id -1].selected = true; 
        console.log(temporaryModalListItem[event.Id -1].selected);
      }

      // console.log(temporaryModalListItem); 

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
                if (i < number && item.count === 0 ){
                  list.push(<ModalListItem key={item.Id} item={item} doSomeShit={that.doSomeShit} />); 
                }
            }.bind(this)); 
          }
        }

        venueListIterator(modalItems, this.state.temporaryModalListItem, 100);  
  
  return (
      <div className="ModalContainer-wrap">
        <div className="ModalContainer-inner">
          <span className="ModalContainer-close" onClick={this.handleClick_AddTag.bind(this, [false, this.state.temporaryModalListItem] )}>X</span>  
          <div className="ModalContainer-innerInner">
            <div className="ModalContainer-content">
              {modalItems}
            </div>
          </div>
          <button className="ModalContainer-bottomCloseButton" onClick={this.handleClick_AddTag.bind(this, [false, this.state.temporaryModalListItem] )}> close </button>
        </div>
      </div>
    );
  }

}

export default ModalContainer;
