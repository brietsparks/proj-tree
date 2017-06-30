import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

import RootContainer from './container';

import history from './data/history';

ReactDOM.render(
  <Provider store={store}>
    <RootContainer projects={history}/>
  </Provider>,
  document.getElementById('app')
);
