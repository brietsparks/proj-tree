import { combineReducers } from "redux";
import { DUMMY_ACTION } from './actions';

const INITIAL_STATE = {
  foo: 'foo',
  bar: 'bar',
};

export default function dummyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DUMMY_ACTION:
      console.log('dummyReducer')
  }
  return state;
}

export const reducers = combineReducers({
  dummyReducer
});