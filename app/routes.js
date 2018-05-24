/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './pages/home/HomeContainer';
import Workspace from './pages/workspace/Workspace';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/workspace" component={Workspace} />
    </Switch>
  </App>
);
