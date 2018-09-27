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
    return (
      <div className="list">
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
