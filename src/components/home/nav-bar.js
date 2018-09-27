import React from "react";
import '@styles/home/nav-bar.scss';

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showList: false };
  }
  iconClick = (e) => {
    this.setState({
      showList: !this.state.showList
    });
  }
  render() {
    const fontIcon = require('../../images/font-icon.png');
    const listIcon = require('@images/list-icon.png');
    const toRight = require('@images/to-right.png');
    const _state = this.state;
    return (
      <div className="native">
        <img className="font-icon" src={fontIcon}/>
        <img
          className="list-icon"
          onClick={this.iconClick}
          src={!_state.showList ? listIcon : toRight}
        />
      </div>
    );
  }
};
