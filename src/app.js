import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '@reducers';
import RootRouter from '@routes';
import './util/resize';
import monitorUrl from './config/monitor';


let store;
if (process.env.NODE_ENV === 'development') {
  // 配置开发环境 Redux dev Tool
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  store = createStore(rootReducer);
}

window.badJsReport({
  url: monitorUrl[process.env.NODE_ENV],
  data: {
    appKey: monitorUrl.appKey
  }
});

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('art')
);