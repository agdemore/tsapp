import * as React from 'react';
import {connect} from 'react-redux';

import {AppState, AppDispatch} from '../../modules/common-store';

import {Counter as CounterPure, StateProps, DispatchProps} from './index';

export const Counter = connect((state: AppState): StateProps => ({
  count: state.count,
}), (dispatch: AppDispatch) : DispatchProps => ({
  increment() {
    dispatch({
      type: 'INCREMENT'
    })
  },
  decrement() {
    dispatch({
      type: 'DECREMENT',
    })
  }
}))(CounterPure);