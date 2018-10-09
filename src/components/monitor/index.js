import React from "react";
import PropTypes from 'prop-types';
import monitor from '@api/monitor';
import dateFormatUtil from '@util/dateFormat';
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
  renderHeader1 () {
    return (
      <thead>
        <tr>
          <th>AppKey</th>
          <th>错误信息</th>
          <th>页面URL</th>
          <th>客户IP地址</th>
          <th>浏览器信息</th>
          <th>省</th>
          <th>市</th>
        </tr>
      </thead>
    );
  }
  renderHeader2 () {
    return (
      <thead>
        <tr>
          <th>发生时间</th>
          <th>操作</th>
        </tr>
      </thead>
    );
  }
  renderRow1 (data) {
    const trs = [];
    data.forEach(d => {
      trs.push(
        <tr key={`2_${d._id}`}>
          <td>{d.appKey}</td>
          <td>{d.msg}</td>
          <td>{d.pageUrl}</td>
          <td>{d.reqIp}</td>
          <td>{d.userAgent}</td>
          <td>山东</td>
          <td>烟台</td>
        </tr>
      );
    });
    return ( <tbody>{trs}</tbody> );
  }
  renderRow2 (data) {
    const trs = [];
    data.forEach(d => {
      trs.push(
        <tr key={`2_${d._id}`}>
          <td>{dateFormatUtil.dateFormat(new Date(d.createdAt), 'yyyy-MM-dd hh:mm:ss')}</td>
          <td>查看详情</td>
        </tr>
      );
    });
    return ( <tbody>{trs}</tbody> );
  }
  render () {
    return (
      <div className="monitor">
        <div className="monitor-left">
          <table className="monitor-index" style={{width: '2000px'}}>
            {this.renderHeader1()}
            {this.renderRow1(this.state.data)}
          </table>
        </div>
        <table className="monitor-index fixed-display">
          {this.renderHeader2()}
          {this.renderRow2(this.state.data)}
        </table>
      </div>
    );
  }
};
