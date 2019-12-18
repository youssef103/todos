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
import api from "../../Services/api.js";

//jest.mock("../../Services/api.js");
api.getAll = jest.fn();

describe("Test async action", () => {
  const createMockStore = configureMockStore([thunk]);

  test("should fetch todos correctly", async () => {
    const store = createMockStore({});
    //await api.getAll.mockImplementation(()=>  Promise.resolve(todos));
    //const myMock= await api.getAll.mockReturnValueOnce(Promise.resolve(todos));
    //const myMock= api.getAll.mockImplementation(()=> Promise.resolve(error));
    const myMock = api.getAll.mockResolvedValue(todos);

    await store.dispatch(getTodos());
    const actions = store.getActions();

    expect(actions[0]).toEqual(fetchTodos());

    expect(myMock.call.length).toBe(1);
    expect(actions[1]).toEqual(fetchTodosSuccess(todos));
  });

  test("should Not fecth todos", async () => {
    const store = createMockStore({});
    const error = { message: "No have data" };
    //const myMock= await api.getAll.mockReturnValueOnce(Promise.reject(error));
    //const myMock=api.getAll.mockImplementation(()=> Promise.reject(error));
    const myMock = api.getAll.mockRejectedValue(error);

    await store.dispatch(getTodos());
    const actions = store.getActions();

    expect(actions[0]).toEqual(fetchTodos());

    //expect(actions[1]).rejects.toEqual(fetchTodosFailure('error'));
    expect(myMock.call.length).toBe(1);
    expect(actions[1]).toEqual(fetchTodosFailure(error));
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
