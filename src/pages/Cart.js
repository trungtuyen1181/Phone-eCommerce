import React from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";

import { UPDATE_CART, DELETE_ITEM_CART } from "../redux/reducers/action-types";
import { updateCart, changeCard, deleteCart } from "../redux/reducers/action";

import { order } from "../servicers/Api";
import { Button } from "@mui/material";

const CartPage = (props) => {
  const [inputs, setInputs] = React.useState({});
  const dispatch = useDispatch();
  const history = props.history;
  const carts = useSelector(({ Cart }) => {
    // console.log(Cart.items);
    return Cart.items;
  });
  const onChangeInput = (e, id) => {
    const value = parseInt(e.target.value);
    if (value <= 0) {
      // eslint-disable-next-line no-restricted-globals
      const isConfirm = confirm("Xóa sản phẩm khỏi giỏi hàng ?");

      return !isConfirm
        ? dispatch({
            type: UPDATE_CART,
            payload: {
              id,
              qty: 1,
            },
          })
        : dispatch({
            type: DELETE_ITEM_CART,
            payload: {
              id,
            },
          });
    }
    dispatch({
      type: UPDATE_CART,
      payload: {
        id,
        qty: value,
      },
    });
  };
  const onDeleteItem = (e, id) => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const isConfirm = confirm("Xóa sản phẩm khỏi giỏi hàng ?");
    return isConfirm
      ? dispatch({
          type: DELETE_ITEM_CART,
          payload: {
            id,
          },
        })
      : false;
  };

  const onChangeOrderInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    // console.log(inputs);
  };
  const onClickOrder = (e) => {
    e.preventDefault();
    const items = carts.map((item) => ({ prd_id: item._id, qty: item.qty }));
    order({
      items,
      ...inputs,
    }).then(({ data }) => {
      if (data.status === "success") {
        history.push("/success", { isOrderSuccess: true });
      }
    });
  };
  const onClickOn = (e) => {
    e.preventDefault();
    return alert("Vui long goi (+84) 0988 550 553");
  };
  // console.log(carts);
  return (
    <>
      {/*	Cart	*/}
      <Box
        id="my-cart"
        sx={{ flexGrow: 1 }}
        style={{
          background: "rgb(236, 241, 249)",
          margin: "25px 0 10px 0",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{ marginTop: "0px", marginBottom: "10px" }}
        >
          <Grid item xs={7} style={{ color: "yellow", paddingLeft: "25px" }}>
            Thông tin sản phẩm
          </Grid>
          <Grid item xs="2" style={{ color: "yellow" }}>
            Số lượng
          </Grid>
          <Grid item xs="3" style={{ color: "yellow" }}>
            Giá
          </Grid>
        </Grid>
        <hr />
        <br />
        <form method="post">
          {carts.map((item) => {
            console.log(item);
            return (
              <Box
                sx={{ display: "flex", flexWrap: "wrap", p: 1, m: 1 }}
                key={item?.title}
                style={{ padding: "0px", margin: "0px" }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{
                    marginTop: "0px",
                    marginBottom: "10px",
                  }}
                >
                  <Grid item xs="7">
                    <Grid container spacing={2}>
                      <Grid item xs="2.5" style={{ textAlign: "center" }}>
                        <img
                          src={item?.image}
                          alt=""
                          style={{ width: "40px", height: "50px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs="9.5"
                        style={{
                          padding: "0px",
                          textAlign: "top",
                          color: "green",
                        }}
                      >
                        <h5>{item?.title}</h5>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="2">
                    <Input
                      style={{ width: "100%", background: "gray" }}
                      type="number"
                      id="quantity"
                      className="form-control form-blue quantity"
                      value={item?.qty}
                      onChange={(e) => onChangeInput(e, item?.id)}
                    />
                  </Grid>
                  <Grid item xs="1" style={{ marginTop: "10px", color: "red" }}>
                    <b>{item?.qty * item?.price} </b>
                  </Grid>
                  <Grid item xs="2" style={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      onClick={(e) => onDeleteItem(e, item?.id)}
                      href="true"
                      // style={{ height: "0px" }}
                    >
                      Xóa
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
          <hr />
          <Grid container spacing={2}>
            <Grid item xs="9" style={{ textAlign: "right" }}>
              <b style={{ color: "#FF0066" }}>Tổng cộng:</b>
            </Grid>
            <Grid item xs="3">
              <b style={{ color: "red" }}>
                {carts?.reduce(
                  (total, item) => total + item.qty * item.price,
                  0
                )}
              </b>
            </Grid>
          </Grid>
        </form>
      </Box>
      {/*	End Cart	*/}
      {/*	Customer Info	*/}
      <Box
        sx={{ display: "flex", flexWrap: "wrap", p: 1, m: 1 }}
        style={{ background: "black", margin: "15px 0 0 0" }}
      >
        <form method="post">
          <Grid container spacing={2}>
            <Grid
              item
              xs="4"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              <input
                placeholder="Họ và tên (bắt buộc)"
                type="text"
                name="name"
                value={inputs?.name}
                onChange={onChangeOrderInput}
                className="form-control"
                required
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  width: "98%",
                  height: "1.5rem",
                }}
              />
            </Grid>
            <Grid
              item
              xs="4"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              <input
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                name="phone"
                value={inputs?.phone}
                onChange={onChangeOrderInput}
                className="form-control"
                required
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  width: "98%",
                  height: "1.5rem",
                }}
              />
            </Grid>
            <Grid
              item
              xs="4"
              style={{
                textAlign: "center",
                marginTop: "10px",
                height: "1.5rem",
              }}
            >
              <input
                placeholder="Email (bắt buộc)"
                type="text"
                name="email"
                value={inputs?.email}
                onChange={onChangeOrderInput}
                className="form-control"
                required
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  width: "98%",
                  height: "1.5rem",
                }}
              />
            </Grid>
            <Grid
              item
              xs="12"
              style={{ textAlign: "center", marginTop: "0px" }}
            >
              <input
                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                type="text"
                name="address"
                value={inputs?.address}
                onChange={onChangeOrderInput}
                className="form-control"
                required
                style={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  width: "99.5%",
                  height: "1.5rem",
                }}
              />
            </Grid>
          </Grid>
        </form>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "15px",
            textAlign: "center",
            paddingBottom: "10px",
          }}
        >
          <Grid item xs="6">
            <Button
              href="#"
              onClick={onClickOrder}
              variant="contained"
              style={{ width: "70%" }}
            >
              <b>Mua ngay</b>
              {/* <span>Giao hàng tận nơi siêu tốc</span> */}
            </Button>
          </Grid>
          <Grid item xs="6">
            <Button
              href="#"
              onClick={onClickOn}
              variant="contained"
              style={{ width: "70%" }}
            >
              <b>Trả góp Online</b>
              {/* <span>Vui lòng call (+84) 0988 550 553</span> */}
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/*	End Customer Info	*/}
    </>
  );
};

export default CartPage;
