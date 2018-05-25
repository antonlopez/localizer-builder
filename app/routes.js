/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import Home from './pages/home/HomeContainer';
import Workspace from './pages/workspace/Workspace';

export default () => (
  <App>
    <Switch>
      <Route path="/workspace" component={Workspace} />
      <Route path="/" component={Home} />
    </Switch>
  </App>
);
