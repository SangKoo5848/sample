import { createStore, applyMiddleware, compose } from "redux";
import penderMiddleware from "redux-pender/lib/middleware";

import reducers from "./reducers";

const composeEnhancers = compose;

const store = createStore(reducers, applyMiddleware(penderMiddleware()));

export default store;