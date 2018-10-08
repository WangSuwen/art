import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class TodosRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Route path="/reduxSth" exact render={(props) => <AsyncLoad compPath="@containers/todos" {...props} />} />
    );
  }
}