import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class RootRoute extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {/* 页面主体 部分 */}
        <Route path="/" exact render={(props) => <AsyncLoad compPath="@containers/home/index" {...props} />} />
      </div>
    );
  }
}