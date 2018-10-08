import React from "react";
import '@styles/home/block-one.scss';

export default class BlockOne extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
     document.getElementById('blockOne').style.height = window.innerHeight + 'px';
  }
  render() {
    return (
      <div id="blockOne" className="block-one">
        <div className="block-one-shadow"></div>
        <div className="block-one-text">
          <span className="block-one-title">艺术源自生活</span>
        </div>
      </div>
    );
  }
};
