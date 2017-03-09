import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers/index';
import routes from './routes';

const store = createStore(reducers);

class Root extends React.Component {
  render() {
    return (
        <Provider store={store} >
            <Router history={ browserHistory } routes={routes} />
        </Provider>
    )
  }
}

ReactDOM.render(
    <Root />,
    document.getElementById("root")
);

if (module.hot) {
  module.hot.accept()
}