import React from 'react';
import {Router, Route, IndexRoute, hashHistory, DefaultRoute} from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../store/reducers';
import thunk from 'redux-thunk';

import MainContainer from '../containers/MainContainer';
import Home from '../components/Home';
import HomeContainer from '../containers/HomeContainer';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

var routes = (
  <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={MainContainer} >
            <IndexRoute component={HomeContainer} />
        </Route>
      </Router>
  </Provider>
);

export default routes;
