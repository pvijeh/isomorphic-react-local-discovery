/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import ExeNv from 'exenv'; 
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppStore from '../../stores/appStore'; 
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import ModalContainer from '../ModalContainer';

let getPopupState = function() {

  console.log(AppStore.sendPopupState());

  return {
    displayModalState: AppStore.sendPopupState()
  };   
};

@withContext
@withStyles(styles)
class App extends Component {
  constructor (props) {
    super(props)
    this.state =  { 
      displayModalState: false, 
      displayModalData: []
    }
    this.changePopupState = this.changePopupState.bind(this);
  }

   changePopupState () {
    this.setState({
      displayModalState: getPopupState().displayModalState[0], 
      displayModalData: getPopupState().displayModalState[3]
    })
}

componentWillMount () {
  AppStore.addChangeListener(this.changePopupState);
}

componentWillUnmount() {
    AppStore.removeChangeListener(this.changePopupState);
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    let displayModal = ''; 

    if(this.state.displayModalState === true && ExeNv.canUseDOM === true ){
        displayModal =       <ModalContainer data={this.state.displayModalData} />; 

        console.log(this.state.displayModalData);

    }

    return !this.props.error ? (
      <div>
        <Header />
        {displayModal}
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
