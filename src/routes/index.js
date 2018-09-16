import React from "react";
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

import RootRoute from './root';
import TodosRoute from './todos';

export default class RootRouter extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
            <div>
              <Switch>
                <Route 
                  path="/"
                  render={(props) => 
                    <div>
                      <RootRoute {...props}/>
                      <TodosRoute {...props}/>
                    </div>
                  }
                />
              </Switch>
            </div>
        </Router>
    );
  }
}