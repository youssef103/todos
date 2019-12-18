import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from "../Types";
import {
  getTodos,
  fetchTodos,
  fetchTodosSuccess,
  fetchTodosFailure
} from "./todos";
import { todos } from "../../../fixture/todos";
//import api from '../../Services/api.js'

jest.mock("../../Services/api.js");

describe("Test async action", () => {
  const createMockStore = configureMockStore([thunk]);

  test("should fetch todos correctly", async () => {
    const store = createMockStore({});
    await store.dispatch(getTodos());
    const actions = store.getActions();

    expect(actions[0]).toEqual(fetchTodos());
    expect(actions[1]).toEqual(fetchTodosSuccess(todos));
  });
});

test("should setup fetch todos action", () => {
  const action = fetchTodos();
  expect(action).toEqual({
    type: FETCH_TODOS
  });
});

test("should setup fetch todos success action", () => {
  const action = fetchTodosSuccess(todos);
  expect(action).toEqual({
    type: FETCH_TODOS_SUCCESS,
    todos
  });
});

test("should setup fetch todos failure action", () => {
  const error = { message: "Cannot read property 'data' of undefined" };
  const expectedAction = {
    type: FETCH_TODOS_FAILURE,
    notification: {
      type: "error",
      message: "Cannot read property 'data' of undefined"
    }
  };

  expect(fetchTodosFailure(error)).toEqual(expectedAction);
});
