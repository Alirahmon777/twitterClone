import { combineReducers, createStore } from "redux";

export const ADD = "add";

const favoriteReducer = (state = false, action) => {
  if (action.type === ADD) {
    return action.payload;
  }
  return state;
};

const combineReducer = combineReducers({
  favorite: favoriteReducer,
});

export const store = createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
