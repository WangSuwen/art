import React from "react";
import PropTypes from 'prop-types';

export default class MonitorIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  static propTypes = {
    listStatus: PropTypes.bool,
  };
  componentWillMount () {
    console.log('will mount');
  }
  render() {
    return (
      <code>
        错误监控首页
      </code>
    );
  }
};
