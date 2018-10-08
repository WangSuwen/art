import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class MonitorRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Route path="/monitor" exact render={(props) => <AsyncLoad compPath="@containers/monitor" {...props} />} />
    );
  }
}