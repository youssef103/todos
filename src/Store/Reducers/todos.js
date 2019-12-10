import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../Types";

const initialState = {
  todos: [],
  loading: false,
  notification: {
    type: "",
    message: ""
  }
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos,
          loading: false
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        notification: {
            type: action.notification.type,
            message: action.notification.message
          },
          loading: false
      };
    default:
      return state;
  }
};