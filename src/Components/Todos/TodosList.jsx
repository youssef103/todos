import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Status from "../../Common/Status";
import { getTodos } from "../../Store/Actions/todos";
import todosStyle from "./todos.module.scss";

const TodosList = props => {
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
  }, [TodosList]);

  return (
    <Status {...props}>
      <div className={todosStyle.Todos}>
        {props.todos.length > 0 &&
          props.todos.map(todo => (
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

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    loading: state.todosReducer.loading,
    notification: {
      type: state.todosReducer.notification.type,
      message: state.todosReducer.notification.message
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTodos: () => dispatch(getTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
