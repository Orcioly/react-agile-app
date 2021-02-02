import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Releases from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';
import Home from './container/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/releases' component={Releases} />
        <Route path='/backlog' component={Backlog} />
        <Route path='/sprints' component={Sprints} />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

