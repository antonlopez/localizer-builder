// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <ConnectedRouter history={this.props.history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </BrowserRouter>
    );
  }
}
