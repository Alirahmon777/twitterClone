import { combineReducers, createStore } from "redux";

export const AUTH = "auth";

const authReducer = (state = false, action) => {
  if (action.type === AUTH) {
    console.log(action.payload);
    return action.payload;
  }
  return state;
};

const combineReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
