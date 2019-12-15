import React, { useEffect, useCallback, Fragment } from "react";

import Status from "../../Common/Status";
import { Pagination } from "../../Common/Pagination/Pagination";

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
      <Fragment>
        <Pagination data={props.todos} recordsPerPage={10} />
      </Fragment>
    </Status>
  );
};
