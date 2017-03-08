import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from 'react-router';
import reducers from './reducers/index';
import routes from './routes';


/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router history={ hashHistory } routes={ routes } />
    </Provider>,
    document.getElementById("root")
);
