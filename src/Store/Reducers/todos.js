import {
    FETCH_TODOS,
} from "../Types";

const initialState = {
    todos: []
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.todos
            }
            default:
                return state;
    }
}