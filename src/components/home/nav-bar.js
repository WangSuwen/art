import React from "react";
import PropTypes from 'prop-types';

import '@styles/home/nav-bar.scss';

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
  }
  static propTypes = {
    listStatus: PropTypes.bool,
    listStatusToogle: PropTypes.func,
  };
  // 功能列表按钮
  iconClick = (e) => {
    this.props.listStatusToogle(!this.props.listStatus);
  }
  render() {
    const fontIcon = require('../../images/font-icon.png');
    const listIcon = require('@images/list-icon.png');
    const toRight = require('@images/to-right.png');
    const _props = this.props;
    return (
      <div className="native">
        <img className="font-icon" src={fontIcon}/>
        <img
          className="list-icon"
          onClick={this.iconClick}
          src={!_props.listStatus ? listIcon : toRight}
        />
      </div>
    );
  }
};
