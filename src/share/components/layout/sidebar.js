import * as React from "react";

import Stack from "@mui/material/Stack";

const Sidebar = () => {
  return (
    <>
      <Stack>
        <div style={{ padding: "25px 0 10px 0" }}>
          <a href="#">
            <img
              style={{ width: "100%", maxHeight: "190px" }}
              alt=""
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            />
          </a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a href="#">
            <img
              style={{ width: "100%", maxHeight: "190px" }}
              alt=""
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            />
          </a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a href="#">
            <img
              style={{ width: "100%", maxHeight: "190px" }}
              alt=""
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
            />
          </a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <a href="#">
            <img
              style={{ width: "100%", maxHeight: "190px" }}
              alt=""
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            />
          </a>
        </div>
      </Stack>
    </>
  );
};
export default Sidebar;
