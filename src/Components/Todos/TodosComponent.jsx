import React, { useEffect, useCallback } from "react";
import { TodosList } from "./TodosList";

import Status from "../../Common/Status";
import { Pagination } from "../../Common/Pagination/Pagination";

export const TodosComponent = props => {
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
      <Pagination
        data={props.todos}
        recordsPerPage={20}
        component={TodosList}
      />
    </Status>
  );
};
