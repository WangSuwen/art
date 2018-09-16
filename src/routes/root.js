import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class RootRout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {/* 头部导航栏 */}
        {/* <Route path="/" render={(props) => <AsyncLoad compPath="@components/app" {...props} />} /> */}
        {/* 页面主体 部分 */}
        <Route path="/" exact render={(props) => <AsyncLoad compPath="@components/home/index" {...props} />} />
      </div>
    );
  }
}