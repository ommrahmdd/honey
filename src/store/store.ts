import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogReducer, cartReducer } from "./reducers";
export let store = createStore(
  combineReducers({
    blogs: blogReducer,
    cart: cartReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
