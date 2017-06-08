import { createStore, applyMiddleware } from "redux";
import { reducers } from "./container/reducers";

let middlewares = [];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(reducers, middleware);
