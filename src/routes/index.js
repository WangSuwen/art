import React from "react";
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

import '@styles/main.scss';
import Header from '@containers/navigator/header';
import LeftSide from '@containers/navigator/leftSide';

import HomeRoute from './home';
import TodosRoute from './todos';
import DeviceStatusRoute from './deviceStatus';
import MonitorRoute from './monitor';

export default class RootRouter extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
            <div>
              <Switch>
                <Route path="/home" render={(props) => 
                    <div>
                      <HomeRoute {...props}/>
                    </div>
                  }
                />
                <Route path="/monitor" render={(props) => 
                    <div>
                      <MonitorRoute {...props}/>
                    </div>
                  }
                />
                <Route path="/" render={(props) => 
                    <div>
                      <Header/>
                      <div style={{display: 'flex'}}>
                        <LeftSide/>
                        <TodosRoute {...props}/>
                        <DeviceStatusRoute {...props}/>
                      </div>
                    </div>
                  }
                />
              </Switch>
            </div>
        </Router>
    );
  }
}