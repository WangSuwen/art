import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class DeviceStatusRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Route path="/device-status" exact render={(props) => <AsyncLoad compPath="@containers/deviceStatus" {...props} />} />
    );
  }
}