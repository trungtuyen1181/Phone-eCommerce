import { combineReducers } from "redux";
import cartReducer from "./reducer";
export default combineReducers({
  Cart: cartReducer,
});
// console.log(cartReducer);
