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
    //const todos = process.env.NODE_ENV !== 'test' ? await api.getAll("todos") : data;
    dispatch(fetchTodosSuccess(todos));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
  }
};

export const fetchTodos = () => {
  return {
    type: FETCH_TODOS
  };
};

export const fetchTodosSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  };
};

export const fetchTodosFailure = error => {
  return {
    type: FETCH_TODOS_FAILURE,
    notification: {
      type: "error",
      message: error.message
    }
  };
};