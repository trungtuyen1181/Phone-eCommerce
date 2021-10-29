import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_ITEM_CART,
} from "../../share/constants/action-types";
const initState = {
  items: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case UPDATE_CART:
      return updateCart(state, action.payload);
    case DELETE_ITEM_CART:
      const newCarts = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: newCarts };
    default:
      return state;
  }
};

const addToCart = (state, payload) => {
  const items = state.items;
  let isProductExists = false;
  items.map((item) => {
    if (!isProductExists && item.id === payload.id) {
      item.qty += payload.qty;
      isProductExists = true;
    }
    return item;
  });
  const newItems = isProductExists ? items : [...items, payload];
  // localStorage.setItem("cart_items", JSON.stringify(newItems));
  return { ...state, items: newItems };
};

const updateCart = (state, payload) => {
  // console.log({ payload });
  const items = state.items;
  const { id, qty } = payload;

  const newCarts = items.map((item) => {
    if (item.id === id) {
      item.qty = qty;
    }
    return item;
  });
  return { ...state, items: newCarts };
};

export default cartReducer;
