import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE
} from "../Types";

export const getTodos = (todos) => {
    return {
        type: FETCH_TODOS,
        todos
    };
};