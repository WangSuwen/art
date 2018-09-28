import React from "react";
import PropTypes from 'prop-types';

import '@styles/home/block-list.scss';

export default class BlockList extends React.Component{
  constructor(props) {
    super(props);
  }
  static propTypes = {
    listStatus: PropTypes.bool,
  };
  render() {
    return (
      <div
        className={this.props.listStatus ? 'list-show list' : 'list'}
      >
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
