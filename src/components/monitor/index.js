import React from "react";
import PropTypes from 'prop-types';
import monitor from '@api/monitor';
import dateFormatUtil from '@util/dateFormat';
import Pagination from '@components/commons/pagination';
import '@styles/monitor/index.scss';

export default class MonitorIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentPage: 1,
      pageSize: 0
    };
  }
  static propTypes = {
    listStatus: PropTypes.bool,
  };
  componentDidMount () {
    this.getMonitorList();
  }
  getMonitorList = (pageNumber = 1) => {
    monitor.getMonitor({currentPage: pageNumber}).then(data => {
      this.setState({
        data: data.list,
        currentPage: data.currentPage,
        pageSize: data.pageSize
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
          <td>{d.appKey || "暂无"}</td>
          <td>{d.msg.substr(0, 50) || "暂无"}</td>
          <td>{d.pageUrl || "暂无"}</td>
          <td>{d.reqIp || "暂无"}</td>
          <td>{d.userAgent || "暂无"}</td>
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
  onRowScroll (e) {
    const monitorRight = document.getElementById('monitorRight');
    if (e.target.offsetWidth + e.target.scrollLeft >= e.target.scrollWidth - 2) {
      monitorRight.classList.add('monitor-right-hide');
    } else if (monitorRight.classList.value.indexOf('monitor-right-hide') > -1) {
      monitorRight.classList.remove('monitor-right-hide');
    }
  }
  clickHandle = (pageNumber) => {
    this.getMonitorList(pageNumber);
  }
  render () {
    return (
      <div className="monitor">
        <div className="monitor-left" onScroll={this.onRowScroll}>
          <table className="monitor-index monitor-left-table">
            {this.renderHeader1()}
            {this.renderRow1(this.state.data)}
          </table>
        </div>
        <table className="monitor-index monitor-right" id="monitorRight">
          {this.renderHeader2()}
          {this.renderRow2(this.state.data)}
        </table>
        <div className="monitor-pagation">
          <Pagination
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            clickHandle={this.clickHandle}
          />
        </div>
      </div>
    );
  }
};
