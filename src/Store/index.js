import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { todosReducer } from "./Reducers/todos";

export const history = createBrowserHistory();

const middleware = [reduxThunk, routerMiddleware(history)];

export const store = createStore(
  combineReducers({
    todosReducer,
    router: connectRouter(history)
  }),
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
