import {
    createStore
} from "redux";
import {
    todosReducer
} from "./Reducers/todos";

export const store = createStore(
    todosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);