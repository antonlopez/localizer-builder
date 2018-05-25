// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import workspace from './WorkspaceReducer';

const rootReducer = combineReducers({
  counter,
  router,
  workspace
});

export default rootReducer;
