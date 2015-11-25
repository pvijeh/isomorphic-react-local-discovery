/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a href="/" onClick={Link.handleClick}>ABOUT</a>
          <a href="/" onClick={Link.handleClick}>HOME</a>
          <a className="Header-Logo" href="/" onClick={Link.handleClick}></a>
          <a href="/" onClick={Link.handleClick}>LOGIN</a>
          <a href="/" onClick={Link.handleClick}>JOIN</a>
        </div>
      </div>
    );
  }

}

export default Header;
