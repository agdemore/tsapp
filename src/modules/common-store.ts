import { Store, createStore } from 'redux';

// the best post about redux-typescript
// https://dzone.com/articles/using-typescript-with-redux

// actions sections
// TODO how works enums?
enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface IncrementAction {
  type: 'INCREMENT';
}

interface DecrementAction {
  type: 'DECREMENT';
}

export type AppAction = IncrementAction | DecrementAction;

// reducer section
export interface AppState {
  count: number;
}

const defaultState: AppState = {
  count: 0,
};

function reducer(state: AppState = defaultState, action: AppAction) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default: {
      return state;
    }
  }
}

// create own dispatch type
export type AppDispatch = (action: AppAction) => AppAction;

// create store
export const store: Store<AppState, AppAction> = createStore(
  reducer,
  defaultState,
);
