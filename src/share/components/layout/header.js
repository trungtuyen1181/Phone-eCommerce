import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();
  const [keyword, setKeyword] = React.useState("");
  const handleOnChangeInput = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?key=${keyword}`);
  };
  const totalCart = useSelector((store) => {
    // return store.Cart.items.reduce((total, item) => total + item.qty, 0);
    return 0;
  });
  // console.log(totalCart);
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ maxWidth: "1100px", background: "#222", paddingBottom: "15px" }}
    >
      <Grid container spacing={3}>
        <Grid item xs>
          <Link href="/" style={{ marginLeft: "35px" }}>
            <img
              className="img-fluid"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
              alt=""
            />
          </Link>
        </Grid>
        <Grid item xs={7}>
          <form className="form-inline" style={{ paddingTop: "10px" }}>
            <TextField
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Search"
              name="keyword"
              onChange={handleOnChangeInput}
              value={keyword}
              style={{
                border: "1px solid gray",
                borderRadius: "5px",
                width: "70%",
              }}
            />
            <Button
              variant="contained"
              onClick={handleOnSubmit}
              style={{ height: "60px" }}
              disabled={!keyword}
              type="submit"
            >
              Tìm kiếm
            </Button>
          </form>
        </Grid>
        <Grid item xs style={{ paddingTop: "33px", fontSize: "1.3rem" }}>
          <Link href="/cart" alt="" style={{ color: "red" }} underline="none">
            Giỏ hàng:
          </Link>
          <Button
            style={{
              paddingBottom: "15px",
              borderRadius: "50%",
              fontSize: "1.3rem",
            }}
            href="/cart"
          >
            {totalCart}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
