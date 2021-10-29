import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_ITEM_CART,
  CHANGE_CARD,
  NEW_PRODUCT,
  ERROR_CART,
} from "./action-types";
import { getProduct } from "../../servicers/Api";

export const addCart = (id, title, image, price) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      title,
      image,
      price,
      qty: 1,
    },
  };
};

// export const updateCart = (id, qty) => {
//   return {
//     type: UPDATE_CART,
//     payload: {
//       id,
//       qty,
//     },
//   };
// };

// export const changeCard = (id, qty) => {
//   return {
//     type: CHANGE_CARD,
//     payload: {
//       id,
//       qty,
//     },
//   };
// };

// export const deleteCart = (id) => {
//   return {
//     type: DELETE_ITEM_CART,
//     payload: {
//       id,
//     },
//   };
// };

export const testThunk = (id) => {
  return function (dispatch) {
    return getProduct(id)
      .then((res) => {
        const persons = res.data;
        // console.log(persons);
        dispatch(newProduct(persons));
      })
      .catch(() => dispatch(errorCart()));
  };
};

export const newProduct = (item) => {
  // console.log("item");
  return {
    type: NEW_PRODUCT,
    item,
  };
};

export const errorCart = () => {
  // console.log("12131");
  return {
    type: ERROR_CART,
  };
};
