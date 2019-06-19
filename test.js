import React from "react";
import PropTypes from 'prop-types';
import tab1 from 'component1';
import tab2 from 'component2';

export default class MonitorIndex extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }
  componentDidMount () {
    // this.getMonitorList();
  }
  activeTab (tabId) {
    this.setState({
      activeTab: tabId
    });
  }
  clickHandle = (tabId) => {
    if (tabId === 1) {
      return (<tab1></tab1>);
    } else {
      return (<tab2></tab2>);
    }
  }
  render () {
    return (
      <div>
        <div className="monitor-stack">
          <span className="stack-info-title" clickHandle={this.activeTab(1)}>Tab1</span>
          <span className="stack-info-title" clickHandle={this.activeTab(2)}>Tab2</span>
        </div>
        <div className="monitor">
          {this.clickHandle(this.activeTab)}
        </div>
      </div>
    );
  }
};
