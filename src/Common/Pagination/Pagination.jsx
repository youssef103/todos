import React, { useState, useEffect, Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Pagination = ({ recordsPerPage, data, component: Component }) => {
  // state
  const [currentPage, setCurrentPage] = useState(1);
  const [nextLink, setNextLink] = useState(2);
  const [prevLink, setPrevLink] = useState(1);
  const totalrecords= data.length;
  const pageNumbers = Array.from({length: Math.ceil(totalrecords / recordsPerPage)}).map((x, i) => i+1);

  const totalPages = pageNumbers.length;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  // changePage Handler
  const onPageChanged = async pageNumber => {
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
      <Component currentRecords={currentRecords}  />

      <p>{`${indexOfLastRecord} / ${totalrecords} Records`}</p>
      <nav>
        <ul className="pagination">
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
        </ul>
      </nav>
    </Fragment>
  );
};
