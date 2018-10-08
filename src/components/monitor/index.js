import React from "react";
import PropTypes from 'prop-types';
import monitor from '@api/monitor';
import '@styles/monitor/index.scss';

export default class MonitorIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  static propTypes = {
    listStatus: PropTypes.bool,
  };
  componentDidMount () {
    monitor.getMonitor().then(data => {
      this.setState({
        data: data
      });
    }).catch(e => {
      console.log('123456789', e);
    });
  }
  renderHeader () {
    return (
      <thead>
        <tr>
          <th>AppKey</th>
          <th>错误信息</th>
          <th>页面URL</th>
          <th>错误堆栈</th>
        </tr>
      </thead>
    );
  }
  renderRow (data) {
    const trs = [];
    data.forEach(d => {
      trs.push(
        <tr key={d._id}>
          <td>{d.appKey}</td>
          <td>{d.msg}</td>
          <td>{d.pageUrl}</td>
          <td>{d.errorStack}</td>
        </tr>
      );
    });
    return (
      <tbody>
        {trs}
      </tbody>
    );
  }
  render () {
    return (
      <table className="monitor-index">
        {this.renderHeader()}
        {this.renderRow(this.state.data)}
      </table>
    );
  }
};
