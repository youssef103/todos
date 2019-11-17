import React, { useEffect } from "react";
import { connect } from "react-redux";
import api from "../../Services/api";
import { getTodos } from "../../Store/Actions/todos";
import todosStyle from "./todos.module.scss";

const TodosList = props => {
  const fetchTodos = async () => {
    const todos = await api.getAll("todos");
    props.getAllTodos(todos);
  };

  useEffect(() => {
    fetchTodos();

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div className={todosStyle.Todos}>
      {props.todos.map(todo => (
        <p className={todosStyle.Item} key={todo.id}>
          {todo.title}
        </p>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllTodos: todos => dispatch(getTodos(todos))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
