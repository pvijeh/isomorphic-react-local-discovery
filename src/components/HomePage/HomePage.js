/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './HomePage.css';
import withStyles from '../../decorators/withStyles';
import TrendingVenue from '../TrendingVenue';
import VenueList from '../VenueList';

@withStyles(styles)

class HomePage extends React.Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Home Page';
    this.context.onSetTitle(title);
    return (
      <div className="HomePage">
        <div className="HomePage-container">
          <h1>{title}</h1>
        </div>
        <VenueList/>
      </div>
    );
  }

}

export default HomePage;
