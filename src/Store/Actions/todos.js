import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../Types";
import api from "../../Services/api";

export const getTodos = () => async dispatch => {
  dispatch(fetchTodos());

  try {
    const todos = await api.getAll("todos");
    dispatch(fetchTodosSuccess(todos));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};

const fetchTodos = () => {
  return {
    type: FETCH_TODOS
  };
};

const fetchTodosSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  };
};

const fetchTodosFailure = error => {
  return {
    type: FETCH_TODOS_FAILURE,
    notification: {
      type: "error",
      message: error.message
    }
  };
};
