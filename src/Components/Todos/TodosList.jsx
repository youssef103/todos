import React from "react";
import todosStyle from "./todos.module.scss";

export const TodosList = props => {
  return (
    <div className={todosStyle.Todos}>
      {props.currentRecords.length === 0 && <p>Todos list is empty</p>}
      {props.currentRecords.map(todo => (
        <label htmlFor={todo.id} className={todosStyle.Item} key={todo.id}>
          <span>{todo.title}</span>
          <span>
            <input type="checkbox" name={todo.id} id={todo.id} />
          </span>
        </label>
      ))}
    </div>
  );
};
