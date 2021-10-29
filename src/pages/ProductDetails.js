import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

import { addCart, testThunk } from "../redux/reducers/action";
import { ADD_TO_CART } from "../redux/reducers/action-types";

const CartPage = (props) => {
  const history = props.history;
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const product = useSelector((state) => {
    // console.log(state.Cart);
    return state.Cart.items;
  });

  React.useEffect(() => {
    dispatch(testThunk(id));
  }, []);
  const error = product === null ? "Sản phẩm này không tồn tại" : "";
  const addToCart = () => {
    if (product) {
      const { id, title, image, price } = product;
      dispatch({
        type: ADD_TO_CART,
        payload: {
          id,
          title,
          image,
          price,
          qty: 1,
        },
      });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        background: "rgb(236, 241, 249)",
        margin: "0px",
        width: "100%",
      }}
    >
      <Grid item xs={6}>
        <Rating
          name="disabled"
          value={product?.rating?.rate}
          readOnly
          style={{ padding: "10px" }}
        />

        <img
          src={product?.image}
          alt=""
          style={{ width: "100%", height: "400px" }}
        />
      </Grid>
      <Grid item xs={6} style={{ paddingTop: "30px" }}>
        <h1 style={{ color: "red" }}>
          {product?.title} {error}
        </h1>
        <h3 style={{ color: "blue" }}>Loại: {product?.category}</h3>
        <ul>
          <li>
            <span>Bảo hành:</span> 12 Tháng
          </li>
          <li>
            <span>Số lượng:</span> {product?.rating?.count}
          </li>
          <li id="price">Price: {product?.price}đ</li>
        </ul>

        <div id="add-cart">
          <Button
            variant="contained"
            onClick={() => addToCart(history.push("/cart"))}
            className="btn btn-warning mr-2"
          >
            Mua ngay
          </Button>

          <Button
            style={{ background: "orange", marginTop: "20px" }}
            onClick={addToCart}
            className="btn btn-info"
            variant="contained"
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ background: "rgb(236, 241, 249)", padding: "20px" }}
      >
        <h3>Đánh giá về {product?.title}</h3>
        {product?.description}
      </Grid>
    </Grid>
  );
};

export default CartPage;
