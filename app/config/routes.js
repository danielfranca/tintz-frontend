import React from 'react';
import {Router, Route, IndexRoute, hashHistory, DefaultRoute} from 'react-router';

import MainContainer from '../containers/MainContainer';
import Home from '../components/Home';
import HomeContainer from '../containers/HomeContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer} >
        <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
);

export default routes;
