import { createStore } from 'redux';

var initState = {};

function reducer(state, action) {
  if (state === undefined) {
    return initState;
  }
}

export default createStore(reducer);
