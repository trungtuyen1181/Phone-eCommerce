import React from "react";
// import Pagination from '@mui/material/Pagination';
// import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

const Pagination = ({ pages }) => {
  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search);
  // console.log(query);

  const { limit, currentPage, prev, next } = pages;
  const totalPages = Math.ceil(100 / limit);

  function formatUrl(page) {
    query.set("page", page);
    return `${pathname}?${query.toString()}`;
  }

  function renderPagesHTML(delta = 2) {
    const pagesHtml = [];
    const left = currentPage - delta;
    const right = currentPage + delta;
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === currentPage ||
        i === totalPages ||
        (i >= left && i <= right)
      ) {
        pagesHtml.push(i);
      }
    }
    return pagesHtml;
  }

  return (
    <div>
      <ul
        className="pagination"
        style={{
          float: "right",
          marginTop: "20px",
          paddingLeft: "0px",
          fontFamily: "sans-serif",
          listStyleType: "none",
          overflow: "hidden",
        }}
      >
        {currentPage > 1 ? (
          <li
            key={query.toString()}
            className="page-item"
            style={{
              float: "left",
              minWidth: "10px",
              height: "auto",
              lineHeight: " 40px ",
              textAlign: "center",
              background: "red",
              border: "1px solid black",
            }}
          >
            <a
              href={formatUrl(prev)}
              style={{
                textDecoration: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              Trang trước
            </a>
          </li>
        ) : null}

        {renderPagesHTML().map((item) => {
          return (
            <li
              key={query.toString()}
              className={`page-item ${currentPage === item && "active"}`}
              style={{
                float: "left",
                minWidth: "30px",
                height: "auto",
                lineHeight: " 40px ",
                textAlign: "center",
                border: "1px solid black",
                background: "red",
              }}
            >
              <a
                href={formatUrl(item)}
                style={{
                  textDecoration: "none",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                {item}
              </a>
            </li>
          );
        })}

        {currentPage < totalPages ? (
          <li
            key={query.toString()}
            className="page-item"
            style={{
              float: "left",
              minWidth: "10px",
              height: "auto",
              lineHeight: " 40px ",
              textAlign: "center",
              border: "1px solid black",
              background: "red",
            }}
          >
            <a
              href={formatUrl(next)}
              style={{
                textDecoration: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              Trang sau
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
};
export default Pagination;
