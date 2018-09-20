import React from "react";
import '@styles/home/block-list.scss';

export default class BlockList extends React.Component{
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
    const listIcon = require('@images/list-icon.png');
    const toRight = require('@images/to-right.png');
    const _state = this.state;
    return (
      <div className="list">
        <img
          onClick={this.iconClick}
          src={!_state.showList ? listIcon : toRight}
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
    );
  }
};
