import { createSelector } from 'reselect';

const fooSelector = state => state.foo;
const barSelector = state => state.bar;

const getFoobar = (foo, bar) => {
  return foo + bar;
};

export default createSelector(
  fooSelector,
  barSelector,
  getFoobar
);