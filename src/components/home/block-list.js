import React from "react";
import { Link } from 'react-router-dom';
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
          <li>
            <Link to="/device-status">机器状态监测</Link>
          </li>
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
