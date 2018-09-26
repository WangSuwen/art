import React from "react";
import '@styles/home/nav-bar.scss';

export default class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showList: false };
  }
  render() {
    const fontIcon = require('../../images/font-icon.png');
    return (
      <div className="native">
        <img src={fontIcon}/>
      </div>
    );
  }
};
