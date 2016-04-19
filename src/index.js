import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV === 'development') {
  const createDevToolsWindow = require('./utils/createDevToolsWindow').default;
  createDevToolsWindow(store);
}

const rootEl = document.getElementById('root');

render(
  <AppContainer
    component={App}
    props={{ store, history }}
  />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer
        component={require('./containers/App').default}
        props={{ store, history }}
      />,
      rootEl
    );
  });
}
