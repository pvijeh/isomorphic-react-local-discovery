/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import ExeNv from 'exenv'; 
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import ModalContainer from '../ModalContainer';

@withContext
@withStyles(styles)
class App extends Component {
  constructor (props) {
    super(props)
    this.state =  { 
      displayModalState: false
    }
  }

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    let displayModal = ''; 

    if(this.state.displayModalState && ExeNv.canUseDOM == true ){
        displayModal =       <ModalContainer />; 
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
