import { combineReducers } from "redux";

import goods from "./goods";
import cart from "./cart";
import filter from "./filter";

export default combineReducers({
    goods,
    cart,
    filter,
});
