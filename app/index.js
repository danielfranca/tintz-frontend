import React from 'react';
import ReactDom from 'react-dom';
import routes from './config/routes';
import Reactotron from 'reactotron-react-js'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!

ReactDom.render(
  routes,
  document.getElementById('app')
);
