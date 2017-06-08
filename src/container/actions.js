export const DUMMY_ACTION = 'action.DUMMY_ACTION';

export function dummyAction({ dummyArg }) {
  console.log('dummyAction ' + dummyArg);
  return {
    type: DUMMY_ACTION,
    payload: dummyArg
  }
}