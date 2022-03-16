import { createStore } from "redux";
import tweetReducer from "./tweetReducer";

const store = createStore(
  tweetReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
