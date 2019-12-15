import React, { useEffect, useCallback } from "react";
import Status from "../../Common/Status";
import todosStyle from "./todos.module.scss";

export const TodosListComponent = props => {
  // eslint-disable-next-line
  const fetchTodos = useCallback(async () => {
    props.getAllTodos();
  });

  useEffect(() => {
    fetchTodos();

    return () => {
      console.log("cleanup");
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Status {...props}>
      <div className={todosStyle.Todos}>
        {props.todos.length === 0 && <p>Todos list is empty</p>}
        {props.todos.map(todo => (
          <label htmlFor={todo.id} className={todosStyle.Item} key={todo.id}>
            <span>{todo.title}</span>
            <span>
              <input type="checkbox" name={todo.id} id={todo.id} />
            </span>
          </label>
        ))}
      </div>
    </Status>
  );
};
