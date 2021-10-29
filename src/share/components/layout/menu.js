import React from "react";

const Menu = ({ item }) => {
  return (
    <div
      style={{
        width: "100%",
        background: "red",
        height: "2.3rem",
        // marginBottom: "20px",
      }}
    >
      <ul
        id="menu"
        style={{
          paddingLeft: "0px",
          fontFamily: "sans-serif",
          listStyleType: "none",
          overflow: "hidden",
        }}
      >
        {item.map((category) => {
          return (
            <li
              key={category}
              style={{
                float: "left",
                width: "auto",
                height: "2.3rem",
                lineHeight: " 40px ",
                textAlign: "center",
                borderRight: "0.5px solid black",
              }}
            >
              <a
                href={`/products/category/${category}`}
                style={{
                  textDecoration: "none",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                &ensp;{category} &ensp;
              </a>
            </li>
            // </ul>
          );
        })}
      </ul>
    </div>
  );
};
export default Menu;
