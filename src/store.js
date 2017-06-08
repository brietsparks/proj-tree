import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";

let middlewares = [];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(reducers, middleware);
