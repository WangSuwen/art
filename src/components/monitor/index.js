import React from "react";
import PropTypes from 'prop-types';
// import { getMonitor } from '@api/monitor';
import monitor from '@api/monitor';

export default class MonitorIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  static propTypes = {
    listStatus: PropTypes.bool,
  };
  componentWillMount () {
    monitor.getMonitor().then(data => {
      this.setState({
        data: data
      }).catch(e => {
        console.log(e);
      })
    });
  }
  render() {
    return (
      <code>
        {this.state.data}
      </code>
    );
  }
};
