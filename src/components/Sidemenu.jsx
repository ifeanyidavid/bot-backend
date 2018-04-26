import React from 'react';
import Ionicon from 'react-ionicons';
import { Icon } from '@blueprintjs/core';

require('../styles/sideMenu.css');

const Sidemenu = () => (
  <nav className="menu">
    <div className="menu-top">
      <a href="/" className="menu-icon">
        <Ionicon
          icon="ios-chatbubbles-outline"
          fontSize="24px"
          color="rgb(255, 255, 255)"
          className="icon"
        />
      </a>
      <a href="/" className="menu-icon">
        <Ionicon
          icon="ios-people-outline"
          fontSize="24px"
          color="rgb(255, 255, 255)"
          className="icon"
        />
      </a>
    </div>
    <div className="menu-bottom">
      <a href="/" className="menu-icon menu-bottom__icon">
        <Ionicon
          icon="ios-person-outline"
          fontSize="24px"
          color="rgb(255, 255, 255)"
          className="icon"
        />
      </a>
      <a href="/" className="menu-icon menu-bottom__icon">
        <Icon icon="maximize" color="rgb(255, 255, 255)" iconSize="18px" />
      </a>
      {/* <a href="/" className="menu-icon menu-bottom__icon">
        <Ionicon
          icon="ios-menu-outline"
          fontSize="24px"
          color="rgb(255, 255, 255)"
          className="icon"
        />
      </a> */}
    </div>
  </nav>
);

export default Sidemenu;
