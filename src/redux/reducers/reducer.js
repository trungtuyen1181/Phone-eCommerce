import {
  ADD_TO_CART,
  UPDATE_CART,
  DELETE_ITEM_CART,
  // CHANGE_CARD,
  NEW_PRODUCT,
  ERROR_CART,
} from "./action-types";

const initState = {
  items: [],
  numberCart: true,
};

const cartReducer = (state = initState, action, payload) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.numberCart === false) {
        return {
          ...state,
          items: [...state, payload],
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === payload.id
              ? { item, qty: (item.qty += payload.qty) }
              : [item, payload]
          ),
        };
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        items: state.item.map((item) =>
          item.id === payload.id
            ? { ...item, qty: (item.qty += payload.qty) }
            : item
        ),
      };
    }
    // case CHANGE_CARD: {
    //   return {
    //     ...state,
    //     items: state.item.map((item) =>
    //       item.id === payload.id
    //         ? { ...item, qty: (item.qty += payload.qty) }
    //         : item
    //     ),
    //   };
    // }

    case DELETE_ITEM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    }

    case NEW_PRODUCT: {
      console.log(action.item);
      return {
        ...state,
        items: action.item,
      };
    }
    case ERROR_CART: {
      // console.log("1213213");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
// console.log(cartReducer);
