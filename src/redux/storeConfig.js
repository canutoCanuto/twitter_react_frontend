import { createStore, combineReducers } from "redux";
import tweetReducer from "./tweetReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  tweets: tweetReducer,
  users: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
