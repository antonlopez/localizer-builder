// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import workspace from './WorkspaceReducer';
import zipFile from './zipFileReducer';

const rootReducer = combineReducers({
  counter,
  router,
  workspace,
  zipFile
});

export default rootReducer;
