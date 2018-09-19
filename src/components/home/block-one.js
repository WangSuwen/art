import React from "react";
import '@styles/home/block-one.scss';

export default class BlockOne extends React.Component{
  constructor() {
    super();
  }
  componentDidMount() {
     document.getElementById('blockOne').style.height = window.innerHeight + 'px';
  }
  render() {
    const fontIcon = require('../../images/font-icon.png');
    return (
      <div id="blockOne" className="block-one">
        <img src={fontIcon}/>
        <div className="block-one-shadow"></div>
        <div className="block-one-text">
          <span className="block-one-title">艺术灵感源自生活</span>
        </div>
      </div>
    );
  }
};
