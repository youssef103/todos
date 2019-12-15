import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import todosStyle from "../../Components/Todos/todos.module.scss";

export const Pagination = ({ recordsPerPage, data }) => {
  // state
  const [currentPage, setCurrentPage] = useState(1);
  const [nextLink, setNextLink] = useState(2);
  const [prevLink, setPrevLink] = useState(1);

  const totalRecords = data.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
    pageNumbers.push(i);
  }
  const totalPages = pageNumbers.length;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  //const pageNeighbours = 18;
  // changePage Handler
  const onPageChanged = pageNumber => {
    //const curPage = Math.max(1, Math.min(pageNumber, totalPages));

    setNextLink(pageNumber < totalPages ? pageNumber + 1 : totalPages);
    setPrevLink(pageNumber > 1 ? pageNumber - 1 : 1);

    setCurrentPage(pageNumber);
  };
  const handleMoveLeft = pageNumber => onPageChanged(pageNumber);
  const handleMoveRight = pageNumber => onPageChanged(pageNumber);

  let page = useLocation();
  useEffect(() => {
    const pageNum =
      page.search !== ""
        ? parseInt(page.search.split("=")[1], 10)
        : currentPage;
    onPageChanged(pageNum);

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className={todosStyle.Todos}>
        {data.length === 0 && <p>Todos list is empty</p>}
        {currentRecords.map(todo => (
          <label htmlFor={todo.id} className={todosStyle.Item} key={todo.id}>
            <span>{todo.title}</span>
            <span>
              <input type="checkbox" name={todo.id} id={todo.id} />
            </span>
          </label>
        ))}
      </div>

      <nav>
        <ul className="pagination">
          <li>
            <NavLink
              to={`?page=${1}`}
              className="page-link"
              onClick={() => handleMoveLeft(1)}
            >
              First
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`?page=${prevLink}`}
              className="page-link"
              onClick={() => handleMoveLeft(prevLink)}
              disabled={currentPage > 1}
            >
              Prev
            </NavLink>
          </li>

          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <NavLink
                to={`?page=${number}`}
                className={`page-link ${
                  number === currentPage ? "active" : ""
                }`}
                onClick={() => onPageChanged(number)}
              >
                {number}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink
              to={`?page=${nextLink}`}
              className="page-link"
              onClick={() => handleMoveRight(nextLink)}
              disabled={currentPage > totalPages}
            >
              Next
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`?page=${totalPages}`}
              className="page-link"
              onClick={() => handleMoveRight(totalPages)}
            >
              Last
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
