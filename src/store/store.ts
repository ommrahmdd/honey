import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { blogReducer } from "./reducers";
export let store = createStore(
  combineReducers({
    blogs: blogReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
