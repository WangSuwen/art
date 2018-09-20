import React from "react";
import '@styles/home/block-list.scss';
import { anami } from '../../util/anamition.js';

export default class BlockList extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showList: false };
  }
  iconClick = (e) => {
    this.setState({
      showList: true
    });
  }
  render() {
    const listIcon = require('@images/list-icon.png');
    const toRight = require('@images/to-right.png');
    return (
      <div className="list-icon">
        <img
          style={{display: !this.state.showList ? 'inline-block' : 'none'}}
          onClick={this.iconClick}
          src={listIcon}
        />
        <div>
          <img
            style={{display: this.state.showList ? 'inline-block' : 'none'}}
            onClick={this.iconClick}
            src={toRight}
          />
          <ul>
            <li>类目</li>
            <li>类目</li>
            <li>类目</li>
            <li>类目</li>
            <li>类目</li>
            <li>类目</li>
          </ul>
        </div>
      </div>
    );
  }
};
