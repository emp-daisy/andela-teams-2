import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './redux/reducers';
import { isAuthenticated } from './redux/actions/index';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

let enhancer;
if (process.env.NODE_ENV !== 'production') {
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
} else {
  enhancer = composeEnhancers(applyMiddleware(thunk));
}

const store = createStore(reducers, enhancer);
store.dispatch(isAuthenticated());

export default store;
