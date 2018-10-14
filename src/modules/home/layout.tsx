import * as React from 'react';
import { Provider } from 'react-redux';

import { Counter } from '../../components/Counter/hoc';

import { store } from '../common-store';

export class HomeLayout extends React.Component<any> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h3>Hello Component</h3>
          <Counter />
        </div>
      </Provider>
    );
  }
}
